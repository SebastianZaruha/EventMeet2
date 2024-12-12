import { Request, Response, Router } from "express";
import {
  getUser,
  getUsers,
  updateUser,
  postUser,
  deleteUser,
} from "../controller/User";

const router = Router();

router.get("/:id", getUser);
router.get("/", getUsers);
router.put("/:id", updateUser);
router.post("/", postUser);
router.delete("/:id", deleteUser);

export { router };
