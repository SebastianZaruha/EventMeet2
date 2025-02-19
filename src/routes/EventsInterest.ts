import { Request, Response, Router } from "express";
import {
  getEventsInterest,
  getEventInterestsByEventId,
  postRelateInterestToEvent,
  updateEventsInterest,
  deleteEventsInterest,
} from "../controller/EventsInterest";

const router = Router();

router.get("/eventsInterest/", getEventsInterest);
router.get("/eventsInterest/:id", getEventInterestsByEventId);
//los intereses por id necesitan ambos un parámetro de búsqueda
//entiendo que el primer busca los eventos por un interés y el segundo busca
//todos los intereses de un evento
router.post("/eventsInterest", postRelateInterestToEvent);
router.put("/eventsInterest/:id", updateEventsInterest);
router.delete("/eventsInterest/:id", deleteEventsInterest);

export { router as eventsInterestRouter };
