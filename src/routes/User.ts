import express from 'express'
import UserController from '../controller/User';
const userRoutes = express();

userRoutes.use("/clients", UserController);
userRoutes.use("/customer", UserController);

export default userRoutes;