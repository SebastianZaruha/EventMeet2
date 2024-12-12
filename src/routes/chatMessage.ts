import { Request, Response, Router } from "express";
import {
  getChatMessages,
  getChatMessage,
  postChatMessage,
  updateChatMessage,
  deleteChatMessage,
} from "../controller/chatMessage";

const router = Router();

router.get("/", getChatMessages);
router.get("/:id", getChatMessage);
router.post("/", postChatMessage);
router.put("/:id", updateChatMessage);
router.delete("/:id", deleteChatMessage);

export { router };
