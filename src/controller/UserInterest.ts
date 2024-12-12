import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

const getUserInterest = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_GET_USERINTEREST");
  }
};

const getUserInterests = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_GET_USERINTERESTS");
  }
};

const updateUserInterest = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_USERINTEREST");
  }
};

const postUserInterest = ({ body }: Request, res: Response) => {
  try {
    res.send(body);
  } catch (e) {
    handleHttp(res, "ERROR_POST_USERINTEREST");
  }
};

const deleteUserInterest = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_USERINTEREST");
  }
};

export {
  getUserInterest,
  getUserInterests,
  updateUserInterest,
  postUserInterest,
  deleteUserInterest,
};
