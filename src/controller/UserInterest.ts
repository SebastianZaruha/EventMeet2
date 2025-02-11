import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { createUserInterest, findAllInterestsByUserId } from "../services/UserInterest";

const getUserInterest = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_GET_USERINTEREST");
  }
};

const getInterstsByUserId = async (req: Request, res: Response) => {
  try {
    const interests = await findAllInterestsByUserId(req.params.id);
    res.status(200).send(interests);

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

const postCreateUserInterest = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    const { interestId } = req.body;
    const userInterest = await createUserInterest(userId, interestId);
    res.status(201).send(userInterest);
        
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
  getInterstsByUserId,
  updateUserInterest,
  postCreateUserInterest,
  deleteUserInterest,
};
