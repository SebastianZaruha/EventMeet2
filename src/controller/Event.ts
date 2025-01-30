import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

import  { findEventById, findAllEvents, findEventsByCompanyId, findEventsByDate, findEventsByLocation, findEventsByTitle, findEventsByInterest, createEvent} from "../services/Event"; 
import { create } from "domain";

const getEvent = async(req: Request, res: Response) => {
  try {    
    const event = await findEventById(req.params.id);

    if (event){      
      res.status(200).send(event);
    } else{
      res.status(404).send("ERROR_GET_EVENT");
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

const getEventsByInterest = async (req: Request, res: Response) => {
  try {
    const events = await findEventsByInterest(req.params.interestTag);
    res.status(200).send(events);
  } catch (e) {
    handleHttp(res, "ERROR_GET_EVENTS_BY_INTEREST");
  }
}

export { getEvent, getEvents, updateEvent, postEvent, deleteEvent, getEventsByInterest };
