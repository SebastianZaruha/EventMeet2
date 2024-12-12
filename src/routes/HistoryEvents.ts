import { Request, Response, Router } from "express";
import {
  getHistoryEvents,
  getHistoryEvent,
  updateHistoryEvent,
  postHistoryEvent,
  deleteHistoryEvent,
} from "../controller/HistoryEvents";

const router = Router();

router.get("/", getHistoryEvents);
router.get("/:id", getHistoryEvent);
router.post("/", postHistoryEvent);
router.put("/:id", updateHistoryEvent);
router.delete("/:id", deleteHistoryEvent);

export { router };
