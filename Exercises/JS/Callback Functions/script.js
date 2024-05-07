// Exercise 1 - 
const movies = [
    {
        id: 34,
        title: "Movie Title",
        rating: 8.5
    },
    {
        id: 35,
        title: "Movie Title2",
        rating: 8.8
    },
    {
        id: 36,
        title: "Movie Title3",
        rating: 9.5
    }
]

const processMovies = (arrayOfMovieObj, cbF) => {
    if (!Array.isArray(arrayOfMovieObj)) {
        throw new Error(`Expected an array of movies`);
    } else {
        arrayOfMovieObj.forEach(movie => {
            if (!movie.hasOwnProperty("rating") || !movie.hasOwnProperty("title")) {
                throw new Error(`Movie with ID ${movie.id} is not correctly structured`);
            }
        })
    }
    const newMovies = JSON.parse(JSON.stringify(arrayOfMovieObj));
    newMovies.forEach(movie => cbF(movie));

    return newMovies;
}


// console.log(processMovies(movies, movie => movie. ));