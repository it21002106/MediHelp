import axios from "axios";

const baseUrl = 'http://localhost:8070';

export const getAllEvents = () => {
    return axios.get(baseUrl + `/event/`);
};

export const deleteEventByID = (id) => {
    return axios.delete(baseUrl + `/event/delete/${id}`)
};

export const getEventById = (event_id) => {
    return axios.get(baseUrl + `/event/get/${event_id}`);
}

export const addevent = (event) => {
    return axios.post(baseUrl + `/event/add/`, event);
};

export const updateEvent = (event_id, event) => {
    return axios.put(`/event/update/${event_id}`, event);
};
  
