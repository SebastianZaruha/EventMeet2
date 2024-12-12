import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

const getInterest = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_GET_INTEREST");
  }
};

const getInterests = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_GET_INTERESTS");
  }
};

const updateInterest = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_INTEREST");
  }
};

const postInterest = ({ body }: Request, res: Response) => {
  try {
    res.send(body);
  } catch (e) {
    handleHttp(res, "ERROR_POST_INTEREST");
  }
};

const deleteInterest = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_INTEREST");
  }
};

export {
  getInterest,
  getInterests,
  updateInterest,
  postInterest,
  deleteInterest,
};
