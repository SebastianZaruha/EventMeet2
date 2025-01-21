// import { Router } from "express";
// import { readdirSync } from "fs";

import { isParameter } from "typescript";

// // Esto es un 'CARGADOR DINÁMICO DE RUTAS'

// const PATH_ROUTER = `${__dirname}`; // guarda los archivos que hay en el directorio en el que se encuentra
// const router = Router();

// /**
//   index.ts -> ['index', 'ts']
//  */
// const cleanFileName = (fileName: string) => {
//   const file = fileName.split(".").shift(); // shift devuelve 'el primer elemento de un array
//   return file;
// };

// readdirSync(PATH_ROUTER).filter((fileName) => {
//   const cleanName = cleanFileName(fileName);
//   if (cleanName !== "index") {
//     import(`./${cleanName}`).then((moduleRouter) => {
//       console.log(`Se esta cargando la ruta... /${cleanName}`);
//       router.use(`/${cleanName}`, moduleRouter.router);
//     });
//   }
// });

// export { router };
import express from "express";

const app = express();

const companyRouter = require('./company');
const userRouter = require('./user');
const eventRouter = require('./event');

app.use('/company', companyRouter);
app.use('/user', userRouter);
app.use('/event', eventRouter);

export default app;