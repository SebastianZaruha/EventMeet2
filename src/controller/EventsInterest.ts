import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { findAllByEventId, relateInterestToEvent } from "../services/EventInterest";

const getEventsInterest = (req: Request, res: Response) => {
  try {
    res.status(200).send({ eventsInterest: {} });
  } catch (e) {
    handleHttp(res, "ERROR_GET_EVENTINTEREST");
  }
};

const getEventInterestsByEventId = (req: Request, res: Response) => {
  try {
    const event = findAllByEventId(req.params.id);
    res.status(200).json(event);
        
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

const postRelateInterestToEvent = async (req: Request, res: Response) => {
  try {
    const { eventId, interestId } = req.body;

    // Verificar que los campos requeridos estén presentes
    if (!eventId || !interestId) {
      res.status(400).json({ message: "Event ID and Interest ID are required" });
    }

    const eventInterest = await relateInterestToEvent(eventId, interestId);
    res.status(201).json(eventInterest);
  } catch (e) {
    handleHttp(res, "ERROR_RELATE_INTEREST_TO_EVENT");
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
  getEventInterestsByEventId,
  updateEventsInterest,
  postRelateInterestToEvent,
  deleteEventsInterest,
};
