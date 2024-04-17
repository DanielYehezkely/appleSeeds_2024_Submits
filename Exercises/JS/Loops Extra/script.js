// 1. Calculate Average Rating

/*Use a loop to iterate over the movie objects, when you find the movie with the
specified name, use another loop to calculate the sum of all ratings and then divide by the
number of ratings */ 

const movies1 = [
    { name: 'Movie 1', ratings: [5, 6, 7] },
    { name: 'Movie 2', ratings: [8, 9, 9] },
];
const movieName1 = 'Movie 1';
const calculateAverageRating = (movieObjs, movieName) => {
    let ratingsSum = 0;
    for (let i = 0; i < movieObjs.length; i++) {
        const movie = movieObjs[i];
        if (movie.name === movieName) {
            for (let j = 0; j < movie.ratings.length; j++) {
                ratingsSum += movie.ratings[j];
            }
            const averageRatings = ratingsSum / movie.ratings.length;
            return averageRatings;
        }
    }
};
console.log(calculateAverageRating(movies1, movieName1));

// 2. Find Highest Rated Movie

/*Use a loop to iterate over the movie objects, for each movie calculate the average
rating and keep track of the highest rating and the corresponding movie object. You can
use the function you created in exercise 1 */

const movies2 = [
    { name: 'Movie 1', ratings: [5, 6, 7] },
    { name: 'Movie 2', ratings: [8, 9, 9] },
    { name: 'Movie 3', ratings: [6, 8, 8] },
];
const highestRatedMovie = (movieObjs) => {
    let highestRating = 0;
    let highestRatedMovie = undefined;
    for (let i = 0; i < movieObjs.length; i++) {
        const movie = movieObjs[i];
        const averageRating = calculateAverageRating(movieObjs, movie.name)
        if (averageRating > highestRating) {
            highestRating = averageRating 
            highestRatedMovie = movie   
        }
    }
    return highestRatedMovie
}
console.log(highestRatedMovie(movies2));

// 3. Find Most Rated Movie

/* Use a loop to iterate over the movie objects and keep track of the movie object with
the most ratings */

const movies3 = [
    { name: 'Movie 1', ratings: [5, 6, 7, 6] },
    { name: 'Movie 2', ratings: [8, 9, 9] },
    { name: 'Movie 3', ratings: [6, 8, 8] },
];
const mostRatedMovie = (movieObjs) => {
    let highestLength = 0;
    let mostRatedMovie = undefined;
    for (let i = 0; i < movieObjs.length; i++) {
        const movie = movieObjs[i];
        const ratingsLength = movie.ratings.length
        if (ratingsLength > highestLength) {
            highestLength = ratingsLength;
            mostRatedMovie = movie;
        }
    }
    return mostRatedMovie 
}
console.log(mostRatedMovie(movies3));

// 4. Remove Lowest Rating
const movies4 = [
    { name: 'Movie 1', ratings: [5, 6, 7] },
    { name: 'Movie 2', ratings: [8, 9, 9] },
];
const movieName4 = 'Movie 1';

// 5. Movie Rating Histogram
const movies5 = [
    { name: 'Movie 1', ratings: [5, 6, 7, 7] },
    { name: 'Movie 2', ratings: [8, 9, 9] },
];
const movieName5 = 'Movie 1';