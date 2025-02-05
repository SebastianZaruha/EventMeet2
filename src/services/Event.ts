import EventModel from "../models/Event";
import InterestModel from "../models/Interest";
import EventInterestModel from "../models/EventsInterest";
import connectDB from "../config/db-connector";
import { QueryTypes } from "sequelize";
//He añadido el service de los eventos como propuesta de las posibilidades que deberían tener nuestros usuarios para buscar eventos
export const findEventsByCompanyId = async (companyid: string) => {
  const events = await EventModel.findAll({
    where: {
      companyid,
    },
  });
  return events;
};

export const findEventsByTitle = async (title: string) => {
  const events = await EventModel.findAll({
    where: {
      title,
    },
  });
  return events;
};

export const findEventsByDate = async (date: Date) => {
  const events = await EventModel.findAll({
    where: {
      date,
    },
  });
  return events;
};
export const findEventsByLocation = async (location: string) => {
  const events = await EventModel.findAll({
    where: {
      location,
    },
  });
  return events;
};

export const findAllEvents = async () => {
    const events = await EventModel.findAll();
    return events;
  };

export const findEventById = async (id: string) => {
  //este último puede que lo utilicemos para extraer todos los datos de un evento si lo querems
  //colocar en la web o en el landing page
  const event = await EventModel.findOne({
    where: {
      id
    }
  });
  return event;
};

export const findEventsByInterestTag = async (tag: string) => {
  const query = `
    SELECT e.id, e.title, e.description, e.date, e.hour, e.location, e.status
    FROM events e
    INNER JOIN "eventsInterests" ei ON e.id = ei."eventId"
    INNER JOIN interests i ON ei."interestId" = i.id
    WHERE i.tag = :tag
  `;

  const events = await connectDB.query(query, {
    replacements: { tag },
    type: QueryTypes.SELECT,
  });

  return events;

};

export const createEvent = async (event: any) => {
  const newEvent = EventModel.build(event);
  await newEvent.save();
  return newEvent;
};

export const findEventsWithFilters = async (filters: any) => {
  let query = `
    SELECT e.id, e.title, e.description, e.date, e.hour, e.location, e.status, e.price 
    FROM events e
    LEFT JOIN "eventsInterests" ei ON e.id = ei."eventId"
    LEFT JOIN interests i ON ei."interestId" = i.id
    WHERE 1=1
  `;

  const queryParams: any[] = [];

  if (filters.location) {
    query += ` AND e.location ILIKE ?`;
    queryParams.push(`%${filters.location}%`);
  }

  if (filters.date) {
    query += ` AND e.date = ?`;
    queryParams.push(filters.date);
  }

  if (filters.interests) {
    query += ` AND i.tag = ?`;
    queryParams.push(filters.interests);
  }

  if (filters.maxPrice) {
    query += ` AND e.price <= ?`;
    queryParams.push(filters.maxPrice);
  }

  query += ` ORDER BY e.date ASC;`;

  return await connectDB.query(query, {
    type: QueryTypes.SELECT,
    replacements: queryParams, // Pasamos los valores de manera segura
  });
};

export default {
  findEventsByCompanyId,
  findEventsByTitle,
  findEventsByDate,
  findEventsByLocation,
  findAllEvents,
  findEventById,
  findEventsByInterestTag,
  createEvent,
  findEventsWithFilters
};
