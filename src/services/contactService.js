
import axios from 'axios';

const API_URL = 'https://backend-portfolio-q4t4.onrender.com/api/contacts'; // adapte selon ton backend

export const getContacts = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const deleteContact = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};

export const sendContactMessage = async (data) => {
  const res = await axios.post(API_URL, data);
  return res.data;
};
