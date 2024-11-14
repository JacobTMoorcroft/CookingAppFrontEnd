import axios from 'axios';

// Set the base URL for all API calls
const api = axios.create({
  baseURL: 'http://localhost:8080/api', // Replace with your Spring Boot API base URL
});

// Fetch all dishes
export const fetchDishes = async () => {
  const response = await api.get('/dishes');
  return response.data;
};

// Add a new dish
export const addDish = async (dish) => {
  const response = await api.post('/dishes', dish);
  return response.data;
};

// Fetch a single dish by ID
export const fetchDishById = async (id) => {
  const response = await api.get(`/dishes/${id}`);
  return response.data;
};

// Delete a dish by ID
export const deleteDish = async (id) => {
  const response = await api.delete(`/dishes/${id}`);
  return response.data;
};

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
