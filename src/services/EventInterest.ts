import EventsInterestModel from "../models/EventsInterest";
import EventModel from "../models/Event";
import InterestModel from "../models/Interest";

export const findAllByEventId = async (eventId: string) => {
  const event = await EventModel.findByPk(eventId);
  if (!event) {
    throw new Error("Event not found");
  }
  const interests = await EventsInterestModel.findAll({
    where: {
      eventId,
    },
    include: [
      {
        model: InterestModel,
      },
    ],
  });
  return interests;
};

export const relateInterestToEvent = async (eventId: string, interestId: string) => {
  const eventInterest = await EventsInterestModel.create({
    eventId,
    interestId,
  });
  return eventInterest;
};