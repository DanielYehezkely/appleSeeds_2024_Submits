// Exercise 1  --- 
const movie = {
    title: 'movie',
    director: 'me',
    releaseYear: 1996,
    genres: ['comedy', 'Ci-fi'],
    ratings: [1, 2, 3, 4, 5],
    getAverageRatings() {
        const sum = this.ratings.reduce((total, rating) => total + rating, 0);
        return sum / this.ratings.length;
    }
}
console.log(movie.getAverageRatings());
// Exercise 2  ---

const movieObj = {
    ...movie,
    cast: [
        { name: 'daniel', role: 'programmer' },
        { name: 'ori', role: 'developer' },
        { name: 'dor', role: 'photographer' }
    ]
}

console.log(movieObj.genres[1]);
console.log(movieObj['genres'][1]);
console.log(movieObj.cast[1]);
console.log(movieObj['cast'][1]);

// Exercise 3  ---
movieObj.releaseYear = 1998;
movieObj.ratings.push(6);
delete movieObj.director;
movieObj.cast[0].role = 'Junior'
movieObj['cast'][0]['role'] = 'Junior'
console.log(movieObj.hasOwnProperty('ratings'));

// Exercise 4 ---
const movies = [
    { title: 'Inception', details: { duration: 148, rating: 'PG-13' } },
    { title: 'Interstellar', details: { duration: 169, rating: 'PG-13' } },
];

console.log(movies[0].details.duration);

const getAverageDuration = (movies) => {
    const totalDuration = movies.reduce((total, movie) => total + movie.details.duration, 0);
    return totalDuration / movies.length;
};

console.log(getAverageDuration(movies)
);

// Exercise 5 ---
const mergedObj = Object.assign({}, movies[0], movies[1])
Object.freeze(mergedObj);
Object.seal(mergedObj);
console.log(Object.isFrozen(mergedObj));
console.log(Object.isSealed(mergedObj));

// Exercise 6 ---
const movieDetails = {
    title: 'Inception',
    director: 'Christopher Nolan',
    releaseYear: 2010,
    ratings: [8, 9, 9.5, 8.5],
};

const logKeysAndValues = (movieObjEx) => {
    const keys = Object.keys(movieObjEx);
    const values = Object.values(movieObjEx);
    console.log(`Keys : ${keys}`);
    console.log(`Values : ${values}`);
}

logKeysAndValues(movieDetails);

// Exercise 7 ---
const movieCollection = {
    Inception: 9,
    Interstellar: 8.5,
    'The Dark Knight': 9.5,
    Prestige: 8,
};

const increaseRating = (movieObj) => {
    for (const [title, rating] of Object.entries(movieObj)) {
        if (rating < 7) {
            movieObj[title]++;
        }
    }
    return movieObj
}

increaseRating(movieCollection);
console.log(movieCollection);

// 8
const movies2 = {
    1: { title: 'Inception', year: 2010, rating: 9 },
    2: { title: 'The Matrix', year: 1999, rating: 8.5 },
    3: { title: 'Interstellar', year: 2014, rating: 8.6 },
};

const findNewerMovies = (movieObj) => {
    return Object.entries(movieObj)
        .filter(([id, movie]) => movie.year > 2000)
        .map(([id, movie]) => {
            return { ...movie, isNewer: true };
        });
};

console.log(findNewerMovies(movies2));

// 9
const genreRatings = {
    action: [8, 9, 7, 10, 8.5],
    sciFi: [8.5, 8, 9, 9.5, 7.5],
    drama: [7, 7.5, 8, 8.5, 9],
};
const calculateGenreAverages = (genreRatings) => {
    Object.keys(genreRatings).forEach(genre => {
        const ratings = genreRatings[genre];
        const averageRating = ratings.reduce((total, rating) => total + rating, 0) / ratings.length;
        console.log(`Genre: ${genre} AverageRating: ${averageRating}`);
    });
};

calculateGenreAverages(genreRatings);

// 10
const movieAwards = {
    Inception: 'Best Visual Effects',
    Interstellar: 'Best Visual Effects',
    'The Dark Knight': 'Best Supporting Actor',
    Prestige: 'Best Cinematography',
};

const traverseKeysAndValues = (movieAwards) => {
    return Object.fromEntries(
        Object.entries(movieAwards)
            .map(([title, award]) => {
                return [award, [title]];
            })
    );
};

console.log(traverseKeysAndValues(movieAwards));