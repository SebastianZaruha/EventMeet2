import cors from "cors";
import dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import { companyRouter } from "./routes/Company";
import { eventRouter } from "./routes/Event";
import { eventsInterestRouter } from "./routes/EventsInterest";
import { interestRouter } from "./routes/Interest";
import { userRouter } from "./routes/User";
import { userInterestRouter } from "./routes/UserInterest";
import { findByEmail, passwordMatch, saveUser } from "./services/User";
import { TokenPayload } from "./types/express";

console.log("Iniciando la aplicación...");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

console.log("Puerto:", PORT);

app.use(express.json());
app.use(cors());

const secretKey = process.env.JWT_SECRET || "token";

const authenticate = (req: Request, res: Response, next: NextFunction) => {
  console.log("Middleware authenticate iniciado");
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    console.log("No se proporcionó token"); // <-- Console.log
    return res.status(401).json({ message: "No se proporcionó token" });
  }
  console.log("Token recibido:", token);
  jwt.verify(token, secretKey, (err, decoded: any) => {
    // Tipo 'any' para decoded, o define una interfaz para tu payload
    if (err) {
      console.error("Error al verificar el token:", err); // <-- Console.error
      return res.status(403).json({ message: "Token inválido" });
    }

    console.log("Token verificado:", decoded); // <-- Console.log
    req.user = decoded; // Ahora req.user tiene un tipo (any por ahora)
    next();
  });
};

const validateLogin = [
  body("email").isEmail().withMessage("Email inválido"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("La contraseña debe tener al menos 6 caracteres"),
];
app.post(
  "/v1/users/login",
  validateLogin,
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    console.log("Ruta /v1/users/login iniciada");

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("Errores de validación:", errors.array());
      res.status(400).json({ errors: errors.array() });
      return;
    }

    const { email, password } = req.body;

    try {
      console.log("Buscando usuario:", email);

      // 1. Obtener el usuario de la base de datos (tipado correcto)
      const user: any = await findByEmail(email); // Tipado 'any' hasta que definas el tipo de usuario

      if (!user) {
        console.log("Usuario no encontrado");
        res.status(404).json({ message: "User not found" });
        return;
      }

      console.log("Usuario encontrado:", user);

      const isMatch = await passwordMatch(email, password.trim());

      console.log("Contraseña proporcionada:", password); // <-- Imprime la contraseña proporcionada
      console.log("Contraseña almacenada:", user.password); // <-- Imprime la contraseña almacenada (si no está encriptada, ¡cuidado!)
      console.log("Resultado de la comparación:", isMatch); // <-- Imprime el resultado de la comparación

      console.log("Contraseña proporcionada:", password, typeof password); // Imprime la contraseña y su tipo
      console.log(
        "Contraseña almacenada:",
        user.password,
        typeof user.password
      ); // Imprime la contraseña y su tipo
      console.log("Resultado de la comparación:", isMatch);

      if (!isMatch) {
        console.log("Contraseña incorrecta");
        res.status(400).json({ message: "Invalid credentials" });
        return;
      }

      console.log("Contraseña correcta");

      // 2. Crear el Payload (usando la interfaz TokenPayload)
      const payload: TokenPayload = {
        userId: user.id, // Asegúrate de que user.id exista y sea un número
        email: user.email, // Asegúrate de que user.email exista
        role: user.role,
        nick: user.nick,
        location: user.location,
        points: user.points,
        status: user.status,
      };

      console.log("Payload antes de firmar el token:", payload);

      // 3. Firmar el token
      const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });
      console.log("Token generado:", token);

      // 4. Enviar el token como respuesta
      res.json({ token });
    } catch (error) {
      console.error("Error during login:", error);
      next(error); // Pasar el error al middleware de manejo de errores
    }
  }
);

app.post("/v1/users", async (req: Request, res: Response) => {
  console.log("Datos recibidos:", req.body);
  try {
    const newUser = await saveUser(req.body);
    console.log("Usuario creado:", newUser);
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error creating user:", error); // <-- Imprime el error completo en la consola del backend
    const errorMessage = (error instanceof Error) ? error.message : "Unknown error";
    res.status(500).json({ message: errorMessage }); // <-- Envía el mensaje de error ESPECÍFICO al frontend
  }
});
app.use("/v1/companies", companyRouter);
app.use("/v1/events", eventRouter);
app.use("/v1/interests", interestRouter);
app.use("/v1/events-interests", eventsInterestRouter);
app.use("/v1/user-interests", userInterestRouter);

app.use((req: Request, res: Response, next: NextFunction) => {
  authenticate(req, res, next); // Llama a tu función authenticate
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error("Error general:", err);
  res.status(500).json({ message: "An error occurred: " + err.message });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
