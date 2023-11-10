import api from './index';

const API_KEY = '6d482b614139b65c7359f30521c4deb2';

export const getNowPlaying = () => {
  return api
    .get(`movie/now_playing?api_key=${API_KEY}`)
    .then((res) => res.data);
};

export const getTopRated = () => {
  return api.get(`movie/top_rated?api_key=${API_KEY}`).then((res) => res.data);
};

export const getPopular = () => {
  return api.get(`movie/popular?api_key=${API_KEY}`).then((res) => res.data);
};

export const getUpcoming = () => {
  return api.get(`movie/upcoming?api_key=${API_KEY}`).then((res) => res.data);
};

export const getTopTv = () => {
  return api.get(`tv/popular?language=en-US&page=1`).then((res) => res.data);
};

export const getImageUrl = (path = '', size = 400) => {
  return `https://image.tmdb.org/t/p/w${size}${path}`;
};
