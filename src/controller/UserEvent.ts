import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

const getUserEvent = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_GET_USEREVENT");
  }
};

const getUserEvents = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_GET_USEREVENTS");
  }
};

const updateUserEvent = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_USEREVENT");
  }
};

const postUserEvent = ({ body }: Request, res: Response) => {
  try {
    res.send(body);
  } catch (e) {
    handleHttp(res, "ERROR_POST_USEREVENT");
  }
};

const deleteUserEvent = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_USEREVENT");
  }
};

export {
  getUserEvent,
  getUserEvents,
  updateUserEvent,
  postUserEvent,
  deleteUserEvent,
};
