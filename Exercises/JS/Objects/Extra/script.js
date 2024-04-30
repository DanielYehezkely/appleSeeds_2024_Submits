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
            } else {
                console.log(`rating not found, try again.`);
            }
        } else {
            console.log(`Movie not found, try again.`);
        } 
    },
}
movieDataBase.addMovie("movie1")
movieDataBase.addMovie("movie2")
movieDataBase.addMovie("movie3")
movieDataBase.removeMovie("movie3")
movieDataBase.addRatings("movie1" , 8.5)
console.log(movieDataBase.movies);
movieDataBase.removeRating("movie1" , 8.5)
console.log(movieDataBase);
