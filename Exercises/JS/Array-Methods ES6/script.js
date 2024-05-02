const movies = require("./mockDataMovies")

// Exercise 1 -----------Display movie titles----------
const getMovieTitles = (movies) => movies.map(movie => movie.title);
console.log(getMovieTitles(movies));

// Exercise 2 -----------highly rated movies----------
const getHighlyRatedMovies = (movies, minRating) => movies.filter(movie => movie.rating >= minRating);
console.log(getHighlyRatedMovies(movies, 9.1));

// Exercise 3 -----------total votes count----------
const getTotalVotes = (movies) => movies.reduce((acc, movie) => acc + movie.votes, 0);
console.log(getTotalVotes(movies));

// Exercise 4 -----------Combine Movie Titles and Ratings----------
const combineTitleAndRating = (movies) => movies.map(movie => `${movie.title} - ${movie.rating}`);
console.log(combineTitleAndRating(movies));

// Exercise 5 -----------Update Movie Ratings----------
const updateMovieRating = (movies, newRating, movieTitle) => movies.map(movie => movie.title === movieTitle ? { ...movie, rating: newRating } : movie
);

console.log(updateMovieRating(movies, 9.5, "The Shawshank Redemption"));

// Exercise 6 -----------Genre Filter----------
const filterByGenre = (movies, genre) => movies.filter(movie => movie.genre.includes(genre));
console.log(filterByGenre(movies, "Drama"));

// Exercise 7 -----------Yearly Movie Filter----------
const filterByYear = (movies, year) => movies.filter(movie => movie.year > year);
console.log(filterByYear(movies, 2000));

// Exercise 8 -----------Average Movie Rating----------
const calculateAverageRating = (movies) => movies.reduce((acc, movie) => acc + movie.rating, 0) / movies.length;
console.log(calculateAverageRating(movies));

// Exercise 9 -----------Sort Movies by Votes----------
const sortByVotes = (movies) => movies.sort((a, b) => b.votes - a.votes);
console.log(sortByVotes(movies));
