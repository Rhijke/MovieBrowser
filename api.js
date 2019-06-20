import key from './config';
let count = 0;
const processMovie = movie => ({
  key: `${movie.Title} ${count++}`,
  title: movie.Title,
  poster: movie.Poster,
  plot: movie.Plot
});

const getPlot = async movie => {
  return movieDetails;
};

export const fetchMovies = async search => {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${key}&s=${search}`
  );
  const { Search } = await response.json();
  let movies = Search;
  movies = movies.map(processMovie);

  for (let i = 0; i < movies.length; i++) {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${key}&t=${movies[i].title}&plot=full`
    );
    let { Plot } = await response.json();
    console.log(Plot);
    movies[i]['plot'] = Plot;
  }
  return movies;
};