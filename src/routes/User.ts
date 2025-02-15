import { Request, Response, Router } from "express";
import {
  getUser,
  getUsers,
  updateUser,
  postUser,
  deleteUser,
} from "../controller/User";

const router = Router();

router.get("/user/:id", getUser);
router.get("/users", getUsers);
router.put("/user/:id", updateUser);
router.post("/user", postUser);
router.delete("/user/:id", deleteUser);

export { router as userRouter };
