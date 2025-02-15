import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import {
  findAllCompanies,
  findById,
  findByIdAndUpdate,
  loginCompany,
  saveCompany,
} from "../services/Company";

const getCompanyById = (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    findById(id).then((company) => {
      if (company) {
        res.status(200).json(company);
      } else {
        res.status(404).json({ message: "Company not found" });
      }
    });
  } catch (e) {
    handleHttp(res, "ERROR_GET_COMPANY");
  }
};

const getCompanies = (req: Request, res: Response) => {
  try {
    findAllCompanies().then((companies) => {
      res.status(200).json(companies);
    });
  } catch (e) {
    handleHttp(res, "ERROR_GET_COMPANIES");
  }
};

const updateCompany = (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const body = req.body;

    if (!id) {
      return handleHttp(res, "ERROR_UPDATE_COMPANY");
    }

    findByIdAndUpdate(id, body).then((company) => {
      res.status(200).json(company);
    });
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_COMPANY");
  }
};

const postLoginCompany = (req: Request, res: Response) => {
  try {
    const email = req.body.email;
    loginCompany(email).then((company) => {
      if (company) {
        res.status(200).json(company);
      } else {
        res.status(404).json({ message: "Company not Registered" });
      }
    });
  } catch (e) {
    handleHttp(res, "ERROR_POST_COMPANY");
  }
};

const postCompany = (req: Request, res: Response) => {
  try {
    const company = req.body;
    console.log(company);
    saveCompany(company).then((company) => {
      res.status(201).json(company);
    });
  } catch (e) {
    handleHttp(res, "ERROR_POST_COMPANY");
  }
};

const deleteCompany = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_COMPANY");
  }
};

export {
  getCompanyById,
  getCompanies,
  updateCompany,
  postLoginCompany,
  deleteCompany,
  postCompany,
};
