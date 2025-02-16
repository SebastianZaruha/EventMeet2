import { Router } from "express";
import {
  getCompanyById,
  getCompanies,
  postCompany,
  updateCompany,
  deleteCompany,
} from "../controller/Company";

const router = Router();

router.get("/", getCompanies);
router.get("/:id", getCompanyById);
router.post("/", postCompany);
router.put("/:id", updateCompany);
router.delete("/:id", deleteCompany);

export { router as companyRouter };
