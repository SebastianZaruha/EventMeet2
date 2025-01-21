import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

const getEventsInterest = (req: Request, res: Response) => {
  try {
    res.status(200).send({ eventsInterest: {} });
  } catch (e) {
    handleHttp(res, "ERROR_GET_EVENTINTEREST");
  }
};

const getEventsInterests = (req: Request, res: Response) => {
  try {
    res.status(200).send({ eventInterests: [] });
  } catch (e) {
    handleHttp(res, "ERROR_GET_EVENTINTERESTS");
  }
};

const updateEventsInterest = ( {params, body} : Request, res: Response) => {
  try {
    res.status(200).send(body);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_EVENTINTEREST");
  }
};

const postEventsInterest = ({ body }: Request, res: Response) => {
  try {
    res.send(body);
  } catch (e) {
    handleHttp(res, "ERROR_POST_EVENTINTEREST");
  }
};

const deleteEventsInterest = (req: Request, res: Response) => {
  try {
    res.status(204).send();
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_EVENTINTEREST");
  }
};

export {
  getEventsInterest,
  getEventsInterests,
  updateEventsInterest,
  postEventsInterest,
  deleteEventsInterest,
};
