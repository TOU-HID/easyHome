import axios from 'axios';
const BASE_URL = 'http://localhost:3001';

export const getUser = async (accessToken) => {
  const response = await axios.get(`${BASE_URL}/user/profile`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

export const getUserByID = async (id) => {
  const response = await axios.get(`${BASE_URL}/user/${id}`);
  return response.data;
};

export const creatUser = async (data) => {
  const response = await axios.post(`${BASE_URL}/user`, data);
  return response.data;
};
export const createAndGetGoogleUser = async (data) => {
  const response = await axios.post(`${BASE_URL}/google/user`, data);
  return response.data;
};
export const loginUser = async (data) => {
  const response = await axios.post(`${BASE_URL}/user/login`, data);
  return response.data;
};
export const addRemoveWishList = async (data) => {
  // console.log(data);
  const response = await axios.post(`${BASE_URL}/user/like`, data);
  return response.data;
};
