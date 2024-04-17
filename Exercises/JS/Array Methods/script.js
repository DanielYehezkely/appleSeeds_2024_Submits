// <----------- Exercise -1 ----------->
const movieLibrary = ["Inception" , "The Matrix", "Interstellar"];
const movieToCheck = "Inception";
if (movieLibrary.includes(movieToCheck)) {
    console.log("The movie exists in this array");
} else {
    console.log("Movie does not exist");
}
// <----------- Exercise -2 ----------->
const releaseDates = ["1999", "2010", "2014"];
const reversedReleaseDates = releaseDates.reverse();
console.log(reversedReleaseDates);
// <----------- Exercise -3 ----------->
const movieGenres = ["Sci-Fi", "Action", "Adventure"];
const genresString = movieGenres.join(', ');
console.log(genresString);
// <----------- Exercise -4 ----------->
const genreToCheck = "Action";
if (movieGenres.indexOf(genreToCheck) === -1) {
    console.log("Movie does not exist");
} else {
    console.log("The movie exists");
}
// <----------- Exercise -5 ----------->
const movieTitles = ["Inception", "The Matrix", "Interstellar"];
const specificMovie = "Interstellar";
if (movieTitles.indexOf(specificMovie) !== -1) {
    console.log(`Interstellar found at index ${movieTitles.indexOf(specificMovie) }`);
} else {
    console.log("Movie not found");
}
// <----------- Exercise -6 ----------->
const upcomingReleases = ["avatar", "Dune", "Tenet"];
upcomingReleases.pop();
console.log(upcomingReleases);
// <----------- Exercise -7 ----------->
const classicMovies = ["The Godfather", "Citizen Kane"];
const newMovie = "Casablanca";
classicMovies.unshift(newMovie);
console.log(classicMovies);
// <----------- Exercise -8 ----------->
const filmNoir = ["The Maltese Falcon", "Touch of Evil", "Double Indemnity"];
const firstMovie = filmNoir.splice(0,1)
console.log(firstMovie);
// <----------- Exercise -9 ----------->
const actionMovies = ["Die Hard", "John Wick"];
const comedyMovies= ["Superbad","The Hangover"];
const newMoviesArr = actionMovies.concat(comedyMovies);
console.log(newMoviesArr);
// <----------- Exercise -10 ----------->
console.log(movieTitles.sort());
// <----------- Exercise -11 ----------->
const quotesString = "Ill be back,May the force be with you,To infinity and beyond";
console.log(quotesString.split(','));
// <----------- Exercise -12 ----------->
const topMovies = ["The Shawshank Redemption", "The Godfather", "The Dark Knight"];
const n = 2;
console.log(topMovies.slice(0, n));
// <----------- Exercise -13 ----------->
const movieWishList = ["The Matrix 4", "Avatar 2", "Dune"];
movieWishList.splice(0);
console.log(movieWishList);
// <----------- Exercise -14 ----------->
const movies = ["Inception", "Interstellar"];
const newMovie2 = "Tenet";
movies.push(newMovie2);
console.log(movies);
// <----------- Exercise -15 ----------->
console.log(movies.shift());
// <----------- Exercise -16 ----------->
const movies2 = ["Inception", "Interstellar", "Tenet"];
console.log(movies2.join(', '));
// <----------- Exercise -17 ----------->
const movieToFind = "Interstellar";
console.log(movies2.indexOf(movieToFind));
// <----------- Exercise -18 ----------->
console.log(movies2.reverse());
// <----------- Exercise -19 ----------->
const releaseYears = [2001, 2023, 1998, 2014];
console.log(releaseYears.sort());