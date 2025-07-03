
import axios from 'axios';

const API_URL = 'https://backend-portfolio-q4t4.onrender.com/api/projects'; // adapte selon ton backend

export const getProjects = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const createProject = async (data) => {
  const res = await axios.post(API_URL, data);
  return res.data;
};

export const updateProject = async (id, data) => {
  const res = await axios.put(`${API_URL}/${id}`, data);
  return res.data;
};

export const deleteProject = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};
