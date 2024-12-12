import { Request, Response, Router } from "express";
import {
  getUserInterest,
  getUserInterests,
  updateUserInterest,
  postUserInterest,
  deleteUserInterest,
} from "../controller/UserInterest";

const router = Router();

router.get("/:id", getUserInterest);
router.get("/", getUserInterests);
router.put("/:id", updateUserInterest);
router.post("/", postUserInterest);
router.delete("/:id", deleteUserInterest);

export { router };
