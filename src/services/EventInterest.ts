import EventsInterestModel from "../models/EventsInterest";
import EventModel from "../models/Event";
import InterestModel from "../models/Interest";
import connectDB from "../config/db-connector";
import { QueryTypes } from "sequelize";

export const findAllByEventId = async (eventId: string) => {
  const query = `
    SELECT interests.*
    FROM interests
    INNER JOIN "eventsInterests" ON interests.id = "eventsInterests"."interestId"
    WHERE "eventsInterests"."eventId" = :eventId
  `;

  const interests = await connectDB.query(query, {
    replacements: { eventId },
    type: QueryTypes.SELECT,
  });

  if (!interests.length) {
    throw new Error("No interests found for the given event ID");
  }

  return interests;
};

export const relateInterestToEvent = async (eventId: string, interestId: string) => {
  const eventInterest = await EventsInterestModel.create({
    eventId,
    interestId,
  });
  return eventInterest;
};