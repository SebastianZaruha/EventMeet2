import { Request, Response, Router } from "express";
import {
  getEventsInterest,
  getEventsInterests,
  postEventsInterest,
  updateEventsInterest,
  deleteEventsInterest,
} from "../controller/EventsInterest";

const router = Router();

router.get("/eventsInterest", getEventsInterest);
router.get("/eventsInterest/:id", getEventsInterests);
router.post("/eventsInterest", postEventsInterest);
router.put("/eventsInterest/:id", updateEventsInterest);
router.delete("/eventsInterest/:id", deleteEventsInterest);

export { router };
