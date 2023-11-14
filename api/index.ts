import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH}`,
  },
});

export default api;
