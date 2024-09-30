const API_KEY = 'cc87d95dbbb46c6d0da6f726f3495047';
const BASE_URL = 'https://api.themoviedb.org/3';

// Obține filmele populare
export const getTrendingMovies = async () => {
  const response = await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

// Caută filme după cuvânt cheie
export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
  const data = await response.json();
  return data.results;
};

// Obține detaliile unui film
export const getMovieDetails = async (id) => {
  const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  const data = await response.json();
  return data;
};

// Obține informațiile despre actori
export const getMovieCredits = async (id) => {
  const response = await fetch(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`);
  const data = await response.json();
  return data.cast;
};

// Obține recenziile pentru un film
export const getMovieReviews = async (id) => {
  const response = await fetch(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};
