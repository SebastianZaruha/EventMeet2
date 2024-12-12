import { Request, Response, Router } from "express";
import {
  getCompany,
  getCompanies,
  postCompany,
  updateCompany,
  deleteCompany,
} from "../controller/Company";

const router = Router();

router.get("/", getCompanies);
router.get("/:id", getCompany);
router.post("/", postCompany);
router.put("/:id", updateCompany);
router.delete("/:id", deleteCompany);

export { router };
