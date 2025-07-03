import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-portfolio-q4t4.onrender.com/api', // à adapter si besoin
});

export default api;
