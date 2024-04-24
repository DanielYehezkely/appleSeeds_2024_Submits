// Exercise 1 
const getMovies = (movies) => movies.map(movie => movie.title);

// Exercise 2
const averageMovieRating = (rating) => {
    if (rating > 7) {
        return "Good";
    } else if (rating > 5) {
        return "Average";
    } else {
        return "Bad";
    }
};

// Exercise 3 
const getTotalMovieLength = (movies) => {
    let totalLength = 0;
    for (let i = 0; i < movies.length; i++) {
        totalLength += movies[i].length;
    }
    return 'Total movie length is ' + totalLength + ' minutes';
}

// Exercise 4
const sortedMovies = movies.sort( (a, b) => b.averageRating - a.averageRating );

// Exercise 5
const getMovieTitles = (movies) => movies.map((movie) => movie.title);
