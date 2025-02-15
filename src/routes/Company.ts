import { Request, Response, Router } from "express";
import {
  getCompanyById,
  getCompanies,
  postCompany,
  updateCompany,
  deleteCompany,
  postLoginCompany,
} from "../controller/Company";

const router = Router();

router.get("/", getCompanies);
router.get("/:id", getCompanyById);
router.post("/", postCompany);
router.put("/:id", updateCompany);
router.delete("/:id", deleteCompany);
router.post("/login", postLoginCompany);

export { router as companyRouter };
