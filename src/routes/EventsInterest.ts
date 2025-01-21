import { Request, Response, Router } from "express";
import {
  getEventsInterest,
  getEventsInterests,
  postEventsInterest,
  updateEventsInterest,
  deleteEventsInterest,
} from "../controller/EventsInterest";

const router = Router();

router.get("/eventsInterest/", getEventsInterest);
router.get("/eventsInterest/:id", getEventsInterests);
//los intereses por id necesitan ambos un parámetro de búsqueda
//entiendo que el primer busca los eventos por un interés y el segundo busca
//todos los intereses de un evento
router.post("/eventsInterest", postEventsInterest);
router.put("/eventsInterest/:id", updateEventsInterest);
router.delete("/eventsInterest/:id", deleteEventsInterest);

export { router };
