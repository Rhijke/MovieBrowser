import key from './config';
let count = 0;
export const processMovie = movie => ({
  key: `${movie.Title} ${count++}`,
  title: movie.Title,
  poster: movie.Poster,
  plot: movie.Plot,
  year: movie.Year,
  imdb: movie.imdbID
});

const getPlot = async movie => {
  return movieDetails;
};
export const searchMovieTitle = async search => {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${key}&s=${search}`
  );
  const searchJSON = await response.json();
  return searchJSON;
};
export const searchMovieIMDB = async search => {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${key}&i=${search}&plot=full`
  );
  const searchJSON = await response.json();
  return searchJSON;
};
export const fetchMovies = async search => {
  let searchJSON = await searchMovieTitle(search);
  if (searchJSON.Response === 'False') throw Error(searchJSON.Error);
  let movies = searchJSON.Search;
  movies = movies.map(processMovie);

  for (let i = 0; i < movies.length; i++) {
    let { Plot, Genre, imdbRating } = await searchMovieIMDB(movies[i].imdb);
    movies[i]['plot'] = Plot;
    movies[i]['genre'] = Genre;
    movies[i]['rating'] = imdbRating;
  }
  movies.forEach(movie => console.log(movie));
  return movies;
};

export const fetchMoviesID = async imdbArr => {
  for (let i = 0; i < imdbArr.length; i++) {
    let JSON = await searchMovieIMDB(imdbArr[i]);
    imdbArr[i] = processMovie(JSON);
    imdbArr[i]['genre'] = JSON.Genre;
    imdbArr[i]['rating'] = JSON.imdbRating;
  }
  return imdbArr;
};
