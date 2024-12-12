import { Request, Response, Router } from "express";
import {
getUserEvent,
getUserEvents,
updateUserEvent,
postUserEvent,
deleteUserEvent
} from "../controller/UserEvent";

const router = Router();

router.get("/:id", getUserEvent);
router.get("/", getUserEvents);
router.put("/:id", updateUserEvent);
router.post("/", postUserEvent);
router.delete("/:id", deleteUserEvent);

export { router };