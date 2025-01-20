import EventModel from "../models/Event";
//He añadido el service de los eventos como propuesta de las posibilidades que deberían tener nuestros usuarios para buscar eventos
export const findEventsByCompanyId = async (companyId: number) =>{
    const events = await EventModel.findAll({
        where: {
        companyId
        }
    });
    return events;
}

export const findEventsByName = async (name : string) =>{
    const events = await EventModel.findAll({
        where: {
        name
        }
    });
    return events;
}

export const findEventsByDate = async (date : Date) =>{
    const events = await EventModel.findAll({
        where: {
        date
        }
    });
    return events;
}
export const findEventsByLocation = async (location : string) =>{
    const events = await EventModel.findAll({
        where: {
        location
        }
    });
    return events;
}

export const findEventsById = async (id : number) =>{//este último puede que lo utilicemos para extraer todos los datos de un evento si lo querems
    //colocar en la web o en el landing page
    const events = await EventModel.findOne({
        where: {
        id
        }
    });
    return events;
}