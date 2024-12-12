import { Request, Response, Router } from "express";
import {
  getEvent,
  getEvents,
  postEvent,
  updateEvent,
  deleteEvent,
} from "../controller/Event";

const router = Router();

router.get("/event", getEvent);
router.get("/events", getEvents);
router.post("/event", postEvent);
router.put("/event", updateEvent);
router.delete("/event", deleteEvent);

export { router };
