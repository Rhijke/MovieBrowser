import key from './config';
let count = 0;
const processMovie = movie => ({
  key: `${movie.Title} ${count++}`,
  title: movie.Title,
  poster: movie.Poster
});

export const fetchMovies = async search => {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${key}&s=${search}`
  );
  const { Search } = await response.json();
  // console.log(movies);
  let movies = Search;
  return movies.map(processMovie);
};
