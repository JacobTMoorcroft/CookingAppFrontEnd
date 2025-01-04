import axios from 'axios';

// Set the base URL for all API calls
const api = axios.create({
  baseURL: 'http://localhost:8080/api', // Replace with your Spring Boot API base URL
});

// get all family profiles
  export const getAllProfiles = async () => {
    const response = await api.get(`/profiles`);
    return response.data;
  };

  export const getAllSchedule = async () => {
    const response = await api.get(`/schedule`);
    return response.data;
  };

  export const postProfile = async (profile) => {
    const response = await api.post('/profiles', profile);
    return response.data;
  }

  export const deleteProfile = async (profileId) => {
    const response = await api.delete(`/profiles/${profileId}`);
    return response.data;
  }

  export const patchProfile = async (profileId, profile) => {
    const response = await api.patch(`/profiles/${profileId}`, profile);
    return response.data;
  }

  export const getAllDishes = async () => {
    const response = await api.get(`/dishes`);
    return response.data;
  }

  export const patchSchedule = async (day, schedule) => {
    const response = await api.patch(`/schedule/${day}`, schedule);
    return response.data
  }

  export const clearSchedule = async () => {
    const response = await api.delete(`/schedule/clear`)
    return response.data;
  }