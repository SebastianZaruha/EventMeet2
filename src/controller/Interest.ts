import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import {
  createInterest,
  findAllInterests,
  findInterestByTag,
} from "../services/Interest";

const getInterestByTag = (req: Request, res: Response) => {
  try {
    const interest = findInterestByTag(req.params.tag);
    if (interest) {
      res.status(200).send(interest);
    } else {
      res.status(404).send("ERROR_GET_INTEREST");
    }
  } catch (e) {
    handleHttp(res, "ERROR_GET_INTEREST");
  }
};

const getInterests = async (req: Request, res: Response) => {
  try {
    const interests = await findAllInterests();
    res.status(200).send(interests);
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

const postCreateInterest = (req: Request, res: Response) => {
  try {
    const interest = req.body;
    const { tag: iTag = '' } = interest;

      createInterest(interest).then((cInterest) => {
        return res.status(201).json(cInterest);
      });
    
  } catch (e) {
    handleHttp(res, "ERROR_CREATE_INTEREST");
  }
};



const deleteInterest = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_INTEREST");
  }
};

export {
  getInterestByTag,
  getInterests,
  updateInterest,
  postCreateInterest,
  deleteInterest,
};
