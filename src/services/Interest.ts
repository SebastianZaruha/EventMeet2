import InterestModel from "../models/Interest";
import EventInterestModel from "../models/EventsInterest";
import EventModel from "../models/Event";
import { Op } from "sequelize";

export const findAllInterests = async () => {
    const interests = await InterestModel.findAll();
    return interests;
};

export const findInterestById = async (id: string) => {
    const interest = await InterestModel.findOne({
        where: {
            id
        }
    });
    return interest;
};

export const findInterestByTag = async (tag: string) => {
    const interest = await InterestModel.findOne({
        where: {
            tag: {
                [Op.iLike]: tag
            }
        }
    });
    return interest;
};

export const findInterestsByEventId = async (eventId: string) => {
    const interests = await EventInterestModel.findAll({
        where: {
            eventId
        }
    });
    return interests;
};

export const createInterest = async (interest:any) => {
    const newInterest = await InterestModel.create(interest);
    return newInterest;
};

export const relateInterestToEvent = async (eventId: string, interestId: string) => {
    const eventInterest = await EventInterestModel.create({
        eventId,
        interestId
    });
    return eventInterest;
};

export const removeInterestFromEvent = async (eventId: string, interestId: string) => {
    const result = await EventInterestModel.destroy({
        where: {
            eventId,
            interestId
        }
    });
    if (result) {
        return { message: "Interest successfully removed from event." };
    } else {
        return { message: "Interest not found or already removed from event." };
    }
};

export default {
    findAllInterests,
    findInterestById,
    findInterestByTag,
    findInterestsByEventId,
    createInterest,
    relateInterestToEvent,
    removeInterestFromEvent
};

