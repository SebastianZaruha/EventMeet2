import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

import  { findEventById, findAllEvents, findEventsByCompanyId, findEventsByDate, findEventsByLocation, findEventsByName} from "../services/Event"; 

const getEvent = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const event = findEventById(id);

    if (event){
      res.status(200).send(event);
    } else{
      res.status(404).send("ERROR_GET_EVENT");
    }
  } catch (e) {
    handleHttp(res, "ERROR_GET_EVENT");
  }
};

const getEvents = (req: Request, res: Response) => {
  try {
    const events = findAllEvents(); 
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

const postEvent = ({ body }: Request, res: Response) => {
  try {
    res.status(201).send(body);
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

export { getEvent, getEvents, updateEvent, postEvent, deleteEvent };
