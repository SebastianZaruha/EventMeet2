import EventModel from "../models/Event";
import InterestModel from "../models/Interest";
import EventInterestModel from "../models/EventsInterest";
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

export const findEventsByInterest = async (interestTag: string) => {
  const events = await EventModel.findAll({
    include: [
      {
        model: EventInterestModel,
        include: [
          {
            model: InterestModel,
            where: {
              tag: interestTag
            }
          }
        ]
      }
    ]
  });
  return events;
};

export default {
  findEventsByCompanyId,
  findEventsByTitle,
  findEventsByDate,
  findEventsByLocation,
  findAllEvents,
  findEventById,
  findEventsByInterest
};
