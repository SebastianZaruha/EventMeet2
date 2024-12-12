import { Request, Response, Router } from "express";
import {
  getInterest,
  getInterests,
  updateInterest,
  postInterest,
  deleteInterest,
} from "../controller/Interest";

const router = Router();

router.get("/:id", getInterest);
router.get("/", getInterests);
router.put("/:id", updateInterest);
router.post("/", postInterest);
router.delete("/:id", deleteInterest);

export { router };
