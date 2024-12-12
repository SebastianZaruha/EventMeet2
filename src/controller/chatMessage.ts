import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

const getChatMessage = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_GET_CHATMESSAGE");
  }
};

const getChatMessages = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_GET_CHATMESSAGES");
  }
};

const updateChatMessage = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_CHATMESSAGE");
  }
};

const postChatMessage = ({ body }: Request, res: Response) => {
  try {
    res.send(body);
  } catch (e) {
    handleHttp(res, "ERROR_POST_CHATMESSAGE");
  }
};

const deleteChatMessage = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_CHATMESSAGE");
  }
};

export { getChatMessage, getChatMessages, updateChatMessage, postChatMessage, deleteChatMessage };
