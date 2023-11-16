import api from "./index";

export const getMovies = (url: string) => {
  return api.get(url).then((res) => res.data);
};

export const getImageUrl = (path = "", size = 400) => {
  return `https://image.tmdb.org/t/p/w${size}${path}`;
};

// export const fetchSearchResults = async (searchQuery: string) => {
//   const response = await fetch(
//     `https://api.themoviedb.org/3/search/movie?query=${searchQuery}`
//   );
//   const data = await response.json();
//   return data;
// };
