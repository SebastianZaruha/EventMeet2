import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { createInterest, findAllInterests, findInterestByTag, relateInterestToEvent } from "../services/Interest";

const getInterestByTag = (req: Request, res: Response) => {
  try {
    const interest = findInterestByTag(req.params.tag);
    if (interest) {
      res.status(200).send(interest);
    } else {
      res.status(404).send("ERROR_GET_INTEREST");
    }
  } catch (e) {
    handleHttp(res, "ERROR_GET_INTEREST");
  }
};

const getInterests = async (req: Request, res: Response) => {
  try {
    const interests = await findAllInterests();
    res.status(200).send(interests);
  } catch (e) {
    handleHttp(res, "ERROR_GET_INTERESTS");
  }
};

const updateInterest = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_INTEREST");
  }
};

const postCreateInterest =  (req: Request, res: Response) => {
  const interest = req.body;
  findInterestByTag(interest).then((interest) => {
    if (interest) {
      return res.status(400).json({ message: "Interest already exists" });
    }
    createInterest(interest).then((interest) => {
      return res.status(201).json(interest);
    });
  });
};

const postRelateInterestToEvent = async (req: Request, res: Response) => {
  try {
    const { eventId, interestId } = req.body;

    // Verificar que los campos requeridos estén presentes
    if (!eventId || !interestId) {
      return res.status(400).json({ message: "Event ID and Interest ID are required" });
    }

    const eventInterest = await relateInterestToEvent(eventId, interestId);
    return res.status(201).json(eventInterest);
  } catch (e) {
    handleHttp(res, "ERROR_RELATE_INTEREST_TO_EVENT");
  }
};

const deleteInterest = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_INTEREST");
  }
};

export {
  getInterestByTag,
  getInterests,
  updateInterest,
  postCreateInterest,
  postRelateInterestToEvent,
  deleteInterest,
};
