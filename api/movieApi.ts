import api from "./index";


export const getMovies = (url: string) => {
  return api.get(url).then((res) => res.data);
};

export const getImageUrl = (path = "", size = 400) => {
  return `https://image.tmdb.org/t/p/w${size}${path}`;
};
