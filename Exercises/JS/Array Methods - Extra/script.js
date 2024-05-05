const mockData = [
    {
        title: "Movie1",
        rating: 8.5,
        genre: "Drama",
        director: "Director1",
        votes: 10000,
        year: 2000
    },
    {
        title: "Movie2",
        rating: 9.5,
        genre: "Action",
        director: "Director2",
        votes: 15000,
        year: 2005
    },
    {
        title: "Movie3",
        rating: 7.5,
        genre: "Drama",
        director: "Director1",
        votes: 20000,
        year: 2010
    }
]
// Exercise 1 ---- Group Movies By Genre
const groupByGenre = (movies) => {
    return movies.reduce((obj, movie) => {
        if (!obj[movie.genre]) {
            obj[movie.genre] = []
        }
        obj[movie.genre].push(movie);
        return obj;
    }, {})
}

console.log(groupByGenre(mockData));

// Exercise 2 ---- Find Top Rated Movie for Each Genre
const getTopRatedByGenre = (movies) => {
    const sorted = {};

    movies.forEach(movie => {
        if (!sorted[movie.genre] || movie.rating > sorted[movie.genre].rating) {
            sorted[movie.genre] = movie;
        }
    });

    return sorted;
};

console.log(getTopRatedByGenre(mockData));

// Exercise 3 ---- Count Movies by Genre
const countMoviesByGenre = (movies) => {
    return movies.reduce((obj, movie) => {
        obj[movie.genre] = (obj[movie.genre] || 0) + 1;
        return obj;
    }, {});
};

console.log(countMoviesByGenre(mockData));

// Exercise 4 ---- Genre Presence Across Years
const findGenrePresence = (movies, genre) => {
    return movies.filter(movie => movie.genre === genre).reduce((obj, movie) => {
        obj[movie.year] = (obj[movie.genre] || 0) + 1;
        return obj;
    }, {});
}

console.log(findGenrePresence(mockData, "Drama"));
console.log(findGenrePresence(mockData, "Action"));

// Exercise 5 ---- Movies with Ratings within Range
const findMoviesWithRatingsInRange = (movies, minRate, maxRate) => movies.filter(movie => movie.rating >= minRate && movie.rating <= maxRate).map(movie => movie.title);

console.log(findMoviesWithRatingsInRange(mockData, 8.5, 9));
console.log(findMoviesWithRatingsInRange(mockData, 8.5, 9.5));

// Exercise 6 ---- Find All Unique Genres
const findUniqueGenres = (movies) => {
    const uniqueGenres = []
    movies.forEach(movie => {
        if (!uniqueGenres.includes(movie.genre)) {
            uniqueGenres.push(movie.genre)
        }
    })
    return uniqueGenres
}

console.log(findUniqueGenres(mockData));

// Exercise 7 ---- Deep Copy of Movies
const deepCopyMovies = (movies) => {
    const copiedMovies = JSON.parse(JSON.stringify(movies));
    return copiedMovies;
};
const newMock = deepCopyMovies(mockData)
console.log(newMock);
newMock.pop();
console.log(newMock);
console.log(mockData);

// Exercise 8 ---- Sort Movies by Rating, Then Votes
const sortByRatingsAndVotes = (movies) => {
    return movies.sort((a, b) => {
        if (a.rating !== b.rating) {
            return b.rating - a.rating;
        } else {
            return b.votes - a.votes;
        }
    });
};

console.log(sortByRatingsAndVotes(mockData));

// Exercise 9 ---- Normalize Ratings
const movies = [
    { title: "Inception", rating: 8.8 },
    { title: "The Dark Knight", rating: 9.0 },
    { title: "A Beautiful Mind", rating: 8.2 }
];
const normalizeRatings = (movies) => {
    const minRating = Math.min(...movies.map(movie => movie.rating));
    const maxRating = Math.max(...movies.map(movie => movie.rating));
    return movies.map(movie => ({
        ...movie,
        rating: ((movie.rating - minRating) / (maxRating - minRating)) * 100
    }));
};

console.log(normalizeRatings(movies));
console.log(normalizeRatings(mockData));

// Exercise 10 ---- Top Director
const topDirector = (movies) => {
    const directorRatings = movies.reduce((acc, movie) => {
        if (!acc[movie.director]) {
            acc[movie.director] = { totalRating: 0, count: 0 };
        }
        acc[movie.director].totalRating += movie.rating;
        acc[movie.director].count++;
        return acc;
    }, {});
    const directorAverages = Object.keys(directorRatings).map(director => ({
        director,
        averageRating: directorRatings[director].totalRating / directorRatings[director].count
    }));
    const topDirector = directorAverages.reduce((maxDirector, currentDirector) => {
        return (currentDirector.averageRating > maxDirector.averageRating) ? currentDirector : maxDirector;
    });
    return { director: topDirector.director, averageRating: topDirector.averageRating };
}

console.log(topDirector(mockData));
console.log(topDirector(movies));