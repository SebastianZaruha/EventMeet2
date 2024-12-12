import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

const getEvent = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_GET_EVENT");
  }
};

const getEvents = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_GET_EVENTS");
  }
};

const updateEvent = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_EVENT");
  }
};

const postEvent = ({ body }: Request, res: Response) => {
  try {
    res.send(body);
  } catch (e) {
    handleHttp(res, "ERROR_POST_EVENT");
  }
};

const deleteEvent = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_EVENT");
  }
};

export { getEvent, getEvents, updateEvent, postEvent, deleteEvent };
