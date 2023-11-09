import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '6d482b614139b65c7359f30521c4deb2';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDQ4MmI2MTQxMzliNjVjNzM1OWYzMDUyMWM0ZGViMiIsInN1YiI6IjY1NGM4NDZiMjkzODM1MDBlMTExMjM0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UEZQPn9E1yQDNL0jJluGIb_eZ6l8f0H_GboKB71TyuA`,
  },
});

export default api;
