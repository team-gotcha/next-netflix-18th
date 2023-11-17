import api from "./index";

export const getMovies = (url: string) => {
  return api.get(url).then((res: any) => res.data);
};

export const getImageUrl = (path = "", size = 400) => {
  return `https://image.tmdb.org/t/p/w${size}${path}`;
};

export const getSearchResults = (searchQuery: string) => {
  return api
    .get(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}`)
    .then((res: any) => res.data);
};
