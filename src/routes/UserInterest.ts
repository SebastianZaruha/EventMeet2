import { Request, Response, Router } from "express";
import {
  getUserInterest,
  getInterstsByUserId,
  updateUserInterest,
  postCreateUserInterest,
  deleteUserInterest,
} from "../controller/UserInterest";

const router = Router();

router.get("/:id", getUserInterest);
router.get("/", getInterstsByUserId);
router.put("/:id", updateUserInterest);
router.post("/", postCreateUserInterest);
router.delete("/:id", deleteUserInterest);

export { router as userInterestRouter };
