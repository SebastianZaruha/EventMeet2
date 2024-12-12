import { Request, Response, Router } from "express";
import {
  getFriendship,
  getFriendships,
  postFriendship,
  updateFriendship,
  deleteFriendship,
} from "../controller/Friendship";

const router = Router();

router.get("/:id", getFriendship);
router.get("/", getFriendships);
router.post("/", postFriendship);
router.put("/:id", updateFriendship);
router.delete("/:id", deleteFriendship);

export { router };
