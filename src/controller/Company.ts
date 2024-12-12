import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

const getCompany = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_GET_COMPANY");
  }
};

const getCompanies = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_GET_COMPANIES");
  }
};

const updateCompany = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_COMPANY");
  }
};

const postCompany = ({ body }: Request, res: Response) => {
  try {
    res.send(body);
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

export { getCompany, getCompanies, updateCompany, postCompany, deleteCompany };
