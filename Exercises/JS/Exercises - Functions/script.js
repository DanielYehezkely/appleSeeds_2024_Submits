// Exercise 1 - initialize movie ratings
let movieRatings = [];
function initializeMovieRatings() {
    movieRatings = [];
}
console.log(initializeMovieRatings());

// Exercise 2 - add a movie ratings
function addRatings(movieTitle, rating) {
    movieRatings.push([movieTitle, rating]);
}
addRatings("Inception", 10);
addRatings("The Matrix", 11);
addRatings("Blade", 7);
console.log(movieRatings);

// Exercise 3 - find movie rating
function findRating(movieTitle) {
    for (let i = 0; i < movieRatings.length; i++) {
        const movieRating = movieRatings[i];
        if (movieRating.includes(movieTitle)) {
            console.log(`Rating for "${movieTitle}" is: ${movieRating[1]}`);
            return; 
        }
    }
    console.log(`"${movieTitle}" was not found in movieRatings`);
}

findRating('Blade');

// Exercise 4 - update a movie rating
function updateRating(movieTitle, newRating) {
    for (let i = 0; i < movieRatings.length; i++) {
        const movieRating = movieRatings[i]
        if (movieRating.includes(movieTitle)) {
            movieRating[1] = newRating
        }
    }
    return `Movie was not found`
}
console.log(updateRating('Bade', 10));
updateRating('Blade', 10)
console.log(movieRatings);

// Exercise 5 - remove movie rating
function removeRating(movieTitle) {
    for (let i = 0; i < movieRatings.length; i++) {
        const movieRating = movieRatings[i]
        if (movieRating.includes(movieTitle)) {
            movieRatings.splice(i, 1);
        }
    }
    return `Movie was Not found`
}
console.log(removeRating('blade'));
removeRating('Blade');
console.log(movieRatings);

// Exercise 6 - list all movies and ratings
function listMovies() {
    for (let i = 0; i < movieRatings.length; i++) {
        const movieRating = movieRatings[i].join("-")
        console.log(`Movie ${movieRating}`);
    }
}
listMovies();

// Exercise 7 - find highest rated movie
function highestRatedMovie() {
    let highestRating = 0;
    let chosenMovie = undefined;
    for (let i = 0; i < movieRatings.length; i++) {
        const movieRating = movieRatings[i];
        if (movieRating[1] > highestRating) {
            highestRating = movieRating[1];
            chosenMovie = movieRating;
        }
    }
    if (!chosenMovie) {
        console.log(`no movies`);
    }
    return chosenMovie;
}
console.log(highestRatedMovie());

//  --------------------------------------------------- Pure Functions -------------------------------------------------//

// 1. Average Rating
// Example input: [3, 4, 5, 3, 5
function calculateAverageRating(arrayOfRatings) {
    let sum = 0;
    for (const movieRate of arrayOfRatings) {
        sum += movieRate
    }
    return sum / arrayOfRatings.length
}
calculateAverageRating([3, 4, 5, 3, 5])
