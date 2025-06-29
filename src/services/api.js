import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // à adapter si besoin
});

export default api;
