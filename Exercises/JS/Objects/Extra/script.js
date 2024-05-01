const movieDataBase = {
    movies: [],

    addMovie(movieTitle) {
        const existingMovie = this.movies.find(movie => movie.title === movieTitle);
        if (existingMovie) {
            console.log(`"${movieTitle}" already exists in the database.`);
        } else {
            this.movies.push({ title: movieTitle, ratings: [], averageRating: 0 });
            console.log(`"${movieTitle}" has been added to the database.`);
        }
    },

    removeMovie(movieTitle) {
        const removeMovie = this.movies.find(movie => movie.title === movieTitle);
        if (removeMovie) {
            this.movies = this.movies.filter(movie => movie.title !== movieTitle)
            console.log(`The movie : "${movieTitle}", has been removed.`);
        } else {
            console.log(`Movie not found, try again.`);
        }
    },

    addRatings(movieTitle, rating) {
        const index = this.movies.findIndex(movie => movie.title === movieTitle);
        if (index !== -1) {
            const movie = this.movies[index];
            movie.ratings.push(rating);
            console.log(`Rating has been added to "${movieTitle}"`);
            this.calculateAverageRating(movieTitle);
        } else {
            console.log(`Movie not found, try again.`);
        }
    },

    removeRating(movieTitle, rating) {
        const index = this.movies.findIndex(movie => movie.title === movieTitle);
        if (index !== -1) {
            const movie = this.movies[index];
            const ratingIndex = movie.ratings.indexOf(rating)
            if (ratingIndex !== -1) {
                movie.ratings.splice(ratingIndex, 1)
                console.log(`Rating has been removed`);
                this.calculateAverageRating(movieTitle);
            } else {
                console.log(`Rating not found, try again.`);
            }
        } else {
            console.log(`Movie not found, try again.`);
        }
    },

    calculateAverageRating(movieTitle) {
        const index = this.movies.findIndex(movie => movie.title === movieTitle);
        if (index !== -1) {
            const movie = this.movies[index];
            const movieRatings = movie.ratings;
            const totalRatings = movieRatings.reduce((acc, rating) => acc + rating, 0);
            const averageRating = totalRatings / movieRatings.length;
            movie.averageRating = averageRating;
            return averageRating;
        } else {
            console.log(`Movie not found, try again.`);
        }
    },

    searchMovie(str) {
        const lowerString = str.toLowerCase();
        const matchingMovies = this.movies.filter(movie => movie.title.toLowerCase().includes(lowerString));
        if (matchingMovies.length > 0) {
            return matchingMovies;
        } else {
            console.log(`Can't find the movie.`);
        }
    },

    sortMoviesByRating() {
        this.movies.sort((a, b) => {
            if (b.averageRating !== a.averageRating) {
                return b.averageRating - a.averageRating;
            } else {
                this.sortMoviesByTitle();
            }
        });
    },

    sortMoviesByTitle() {
        this.movies.sort((a, b) => {
            const titleA = a.title.toLowerCase();
            const titleB = b.title.toLowerCase();
            if (titleA < titleB) {
                return -1;
            } else if (titleA > titleB) {
                return 1;
            } else {
                return 0;
            }
        });
    }
}

movieDataBase.addMovie("movie1")
movieDataBase.addMovie("movie2")
movieDataBase.addMovie("movie3")
movieDataBase.removeMovie("movie3")
movieDataBase.addRatings("movie1", 8.5)
movieDataBase.addRatings("movie1", 9)
movieDataBase.addRatings("movie1", 7)
movieDataBase.addRatings("movie2", 10)
movieDataBase.addRatings("movie2", 6)
movieDataBase.addRatings("movie2", 7.8)
console.log(movieDataBase.movies);
movieDataBase.removeRating("movie1", 8.5)
console.log(movieDataBase.calculateAverageRating("movie1"));
console.log(movieDataBase.searchMovie("v"));
movieDataBase.sortMoviesByRating();
console.log(movieDataBase.movies);

