import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

const getFriendship = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_GET_FRIENDSHIP");
  }
};

const getFriendships = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_GET_FRIENDSHIPS");
  }
};

const updateFriendship = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_FRIENDSHIP");
  }
};

const postFriendship = ({ body }: Request, res: Response) => {
  try {
    res.send(body);
  } catch (e) {
    handleHttp(res, "ERROR_POST_FRIENDSHIP");
  }
};

const deleteFriendship = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_FRIENDSHIP");
  }
};

export {
  getFriendship,
  getFriendships,
  updateFriendship,
  postFriendship,
  deleteFriendship,
};
