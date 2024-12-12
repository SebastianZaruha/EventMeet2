import { Router } from "express";
import { readdirSync } from "fs";

// Esto es un 'CARGADOR DINÁMICO DE RUTAS'

const PATH_ROUTER = `${__dirname}`; // guarda los archivos que hay en el directorio en el que se encuentra
const router = Router();

/**
  index.ts -> ['index', 'ts']
 */
const cleanFileName = (fileName: string) => {
  const file = fileName.split(".").shift(); // shift devuelve 'el primer elemento de un array
  return file;
};

readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = cleanFileName(fileName);
  if (cleanName !== "index") {
    import(`./${cleanName}`).then((moduleRouter) => {
      console.log(`Se esta cargando la ruta... /${cleanName}`);
      router.use(`/${cleanName}`, moduleRouter.router);
    });
  }
});

export { router };
