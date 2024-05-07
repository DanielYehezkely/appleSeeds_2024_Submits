// Exercise 1 creating movie
const createMovie = (title) => {
    const ratings = [];

    const addRating = (num) => {
        if (ratings.length >= 10) {
            console.error('Maximum number of ratings reached!');
        } else if (num < 1 || num > 5) {
            console.error('Rating must be between 1 and 5.');
        } else {
            ratings.push(num);
        }
    };

    const getAverageRating = () => {
        if (ratings.length === 0) {
            return 0;
        }
        return ratings.reduce((acc, cur) => acc + cur, 0) / ratings.length;
    };

    return {
        title,
        addRating,
        getAverageRating,
    };
};

const movie1 = createMovie("Inception");

movie1.addRating(5);
movie1.addRating(4);
movie1.addRating(3);
movie1.addRating(2);
movie1.addRating(1);
movie1.addRating(5);

console.log(movie1);
console.log(movie1.getAverageRating());

// Exercise 2 hiding movie details
const createMovieWithDetails = (movieTitle, directorName, year) => {
   
    const ratings = []

    const getDetails = () => {
        return {title: movieTitle, director: directorName, year:year}
    }
    
    const addRating = (num) => {
        if (ratings.length >= 10) {
            console.error('Maximum number of ratings reached!');
        } else if (num < 1 || num > 5) {
            console.error('Rating must be between 1 and 5.');
        } else {
            ratings.push(num);
        }
    };

    const getAverageRating = () => {
        if (ratings.length === 0) {
            return 0;
        }
        return ratings.reduce((acc, cur) => acc + cur, 0) / ratings.length;
    };

    return {
        getDetails,
        addRating,
        getAverageRating
    }
    
}
const movie = createMovieWithDetails("Inception", "Christopher Nolan", 2010);
movie.addRating(5);
movie.addRating(4);
movie.addRating(3);
movie.addRating(4);
movie.addRating(5);

const details = movie.getDetails();
console.log(details); 

const averageRating = movie.getAverageRating();
console.log(averageRating);

// Exercise 3 creating a movie database
const createMovieDatabase = () => {
    const movies = [];

    const addMovie = (title) => {
        const movie = createMovie(title);
        movies.push({ title,movie });
    };

    const findMovieByTitle = (title) => {
        return movies.find(movie => movie.title === title)?.movie;
    };

    const getAverageRatingOfAllMovies = () => {
        const averageRatings = movies.map(movie => movie.movie.getAverageRating());
        if (averageRatings.length === 0) {
            return 0;
        }
        return averageRatings.reduce((acc, cur) => acc + cur, 0) / averageRatings.length;
    };

    const getMovies = () => {
        return movies
    }

    return {
        addMovie,
        findMovieByTitle,
        getAverageRatingOfAllMovies,
        getMovies
    };
};
const movieDatabase = createMovieDatabase();

movieDatabase.addMovie("Inception");
movieDatabase.addMovie("The Dark Knight");
console.log(movieDatabase.getMovies());

const inception = movieDatabase.findMovieByTitle("Inception");
if (inception) {
    inception.addRating(5);
    inception.addRating(4);
}

const darkKnight = movieDatabase.findMovieByTitle("The Dark Knight");
if (darkKnight) {
    darkKnight.addRating(5);
    darkKnight.addRating(5);
}

console.log(movieDatabase.getAverageRatingOfAllMovies());

