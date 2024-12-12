import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

const getHistoryEvent = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_GET_HISTORYEVENT");
  }
};

const getHistoryEvents = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_GET_HISTORYEVENTS");
  }
};

const updateHistoryEvent = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_HISTORYEVENT");
  }
};

const postHistoryEvent = ({ body }: Request, res: Response) => {
  try {
    res.send(body);
  } catch (e) {
    handleHttp(res, "ERROR_POST_HISTORYEVENT");
  }
};

const deleteHistoryEvent = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_HISTORYEVENT");
  }
};

export {
  getHistoryEvent,
  getHistoryEvents,
  updateHistoryEvent,
  postHistoryEvent,
  deleteHistoryEvent,
};
