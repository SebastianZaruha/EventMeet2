import { Request, Response, NextFunction } from "express";
import { handleHttp } from "../utils/error.handle";

import  { findEventById, findAllEvents, findEventsByCompanyId, findEventsByDate, findEventsByLocation, findEventsByTitle, createEvent, findEventsByInterestTag, findEventsWithFilters} from "../services/Event"; 
import { create } from "domain";

const getEvent = async(req: Request, res: Response) => {
  try {    
    const event = await findEventById(req.params.id);

    if (event){      
      res.status(200).send(event);
    } else{
      res.status(404).send("ERROR_GET_EVENT");
      return;
    }
  } catch (e) {
    handleHttp(res, "ERROR_GET_EVENT");
  }
};

const getEvents = async (req: Request, res: Response) => {
  try {
    const events = await findAllEvents(); 
    res.status(200).send(events);
  } catch (e) {
    handleHttp(res, "ERROR_GET_EVENTS");
  }
};

const updateEvent = ( {params, body} : Request, res: Response) => {
  try {
    res.status(200).send(body);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_EVENT");
  }
};

const postEvent = (req: Request, res: Response) => {
  try {
    const event = req.body;
    console.log(event);
    createEvent(event).then((event) => {
      res.status(201).send(event);
    }); 
  } catch (e) {
    handleHttp(res, "ERROR_POST_EVENT");
  }
};

const deleteEvent = (req: Request, res: Response) => {
  try {
    res.status(204).send();
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_EVENT");
  }
};

const getEventsByInterestTag = async (req: Request, res: Response): Promise<void> => {
  try {
    const events = await findEventsByInterestTag(req.params.tag);
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

const getFilteredEvents = async (req: Request, res: Response) => {
  try {
    const filters = req.body; // Capturamos los filtros desde el body

    const events = await findEventsWithFilters(filters);

    res.json(events);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export { getEvent, getEvents, updateEvent, postEvent, deleteEvent, getEventsByInterestTag, getFilteredEvents };
