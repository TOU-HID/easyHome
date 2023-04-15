import axios from 'axios';
const BASE_URL = 'http://localhost:3001';

export const getAllHouses = async () => {
  const response = await axios.get(`${BASE_URL}/advertise/getAll`);
  return response.data;
};
export const getHousesByID = async (id) => {
  const response = await axios.get(`${BASE_URL}/advertise/${id}`);
  return response.data;
};
export const createPost = async (data) => {
  const response = await axios.post(`${BASE_URL}/advertise/create`, data);
  return response.data;
};
// export const loginUser = async (data) => {
//   const response = await axios.post(`${BASE_URL}/user/login`, data);
//   return response.data;
// };