import User from "../models/User";
import UserModel from "../models/User";
import bcrypt from "bcrypt"; // Importa bcrypt para hashear contraseñas

export const findAllUsers = async () => {
  const users = await UserModel.findAll();
  return users;
};
export const saveUser = async (user: any) => {
  console.log("Datos recibidos en saveUser:", user); // <-- Imprime los datos recibidos
  try {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
    const newUser = await User.create(user);
    console.log("Usuario creado en saveUser:", newUser); // <-- Imprime el usuario creado
    return newUser;
  } catch (error) {
    console.error("Error saving user en saveUser:", error); // <-- Imprime el error
    throw error;
  }
};
export const findById = async (id: string) => {
  //los id son strings porque las http request son en string
  const user = await UserModel.findOne({
    where: {
      id,
    },
  });
  return user;
};
export const findByIdAndUpdate = async (id: string, body: any) => {
  const user = await UserModel.update(body, {
    where: {
      id,
    },
  });
  return user;
};

export const findByEmail = async (email: string) => {
  try {
    const user = await User.findOne({ where: { email } });
    return user;
  } catch (error) {
    console.error("Error finding user by email:", error);
    throw error;
  }
};
export const passwordMatch = async (
  email: string,
  passwordToCheck: string
): Promise<boolean> => {
  try {
    const user: any = await findByEmail(email);
    if (!user) {
      return false;
    }
    return await bcrypt.compare(passwordToCheck, user.password);
  } catch (error) {
    console.error("Error comparing passwords:", error);
    return false;
  }
};

// export const passwordMatch = async (
//   email: string,
//   passwordToCheck: string
// ): Promise<boolean> => {
//   try {
//     const user: any = await findByEmail(email);
//     if (!user) {
//       return false;
//     }
//     // ¡Solo para desarrollo!
//     return passwordToCheck === user.password;
//   } catch (error) {
//     console.error("Error comparing passwords:", error);
//     return false;
//   }
// };

export default {
  findAllUsers,
  saveUser,
  findById,
  findByIdAndUpdate,
  findByEmail,
  passwordMatch,
};
