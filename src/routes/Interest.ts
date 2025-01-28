import { Request, Response, Router } from "express";
import {
  getInterestByTag,
  getInterests,
  updateInterest,
  postCreateInterest,
  deleteInterest,
} from "../controller/Interest";

const router = Router();

router.get("/:tag", getInterestByTag);
router.get("/", getInterests);
router.put("/:id", updateInterest);
router.post("/create", postCreateInterest);
router.delete("/:id", deleteInterest);

export { router as interestRouter};
