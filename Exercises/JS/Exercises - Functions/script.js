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
const averageRating = calculateAverageRating([3, 4, 5, 3, 5])
console.log(averageRating);

// 2. Filter Movies by Rating
// Example input: ([3, 4, 5, 2, 1, 5], 4)
function filterByRating(arrayOfRatings, minRatingValue) {
    let minRateArray = []
    for (const rate of arrayOfRatings) {
        if (rate >= minRatingValue) {
            minRateArray.push(rate)
        }
    }
    return minRateArray
}
const filteredArr = filterByRating([3, 4, 5, 2, 1, 5], 4);
console.log(filteredArr);

// 3. Highest Rated Movie
// Example input: [3, 4, 5, 3, 5]
function findHighestRating(arrayOfRatings) {
    let highestRate = arrayOfRatings[0];
    for (const rate of arrayOfRatings) {
        if (highestRate < rate ) {
            highestRate = rate
        }
    }
    return highestRate
}
const highestRate = findHighestRating([8, 1, 5, 22, 5])
console.log(highestRate);

// 4. Ratings Above Threshold
// Example input: ([3, 4, 5, 2, 1, 5], 3)
function ratingAboveThreshold(arrayOfRatings, threshold) {
    let thresholdArr = []
    for (const rate of arrayOfRatings) {
        if (rate > threshold) {
            thresholdArr.push(rate)
        }
    }
    return thresholdArr
}
console.log(ratingAboveThreshold([3, 4, 5, 2, 1, 5], 3)); 

// 5. Count Movies in Rating Range
// Example input: ([3, 4, 5, 2, 1, 5], 4, 5)
function countInRatingRange(arrayOfRatings, lower, higher) {
    let count = 0;
    for (const rate of arrayOfRatings) {
        if (rate >= lower && rate <= higher) {
            count++;
        }
    }
    return count
}
console.log(countInRatingRange([3, 4, 5, 2, 1, 5], 4, 5));

// 6. Filter Unique Ratings
// Example input: [5, 3, 4, 3, 5, 4, 5]
function uniqueRatings(arrayOfRatings) {
    for (const rate of arrayOfRatings) {
        if () {
           
        }
    }
}

