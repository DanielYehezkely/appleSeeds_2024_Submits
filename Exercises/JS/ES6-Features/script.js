// Exercise 1 ----------------- 
const movie = {
    title: "Inception",
    year: 2010,
    rating: 8.8,
    genre: "Science fiction"
}
const {title, year, rating} = movie
console.log(`${title} ${year} ${rating}`);

// Exercise 2 ----------------
let topMovies = ["The Shawshank Redemption", "The Godfather", "The Dark Knight", "12 Angry Men"];
[topMovies[1], topMovies[0], topMovies[2], topMovies[3]] = [topMovies[0], topMovies[1], topMovies[2], topMovies[3]];
console.log(topMovies);

// Exercise 3 ----------------
const movieRatings = {
    "The Matrix" : 8.7,
    "Inception": 8.8
}
const updates = {
    "Inception": 9.0,
    "The Matrix" : 9.1
}

const updateRatings = (movieObj, updatedObj) => {
    const { "Inception": movie1, "The Matrix": movie2 } = updatedObj;
    return { ...movieObj, "Inception": movie1, "The Matrix": movie2 };
};

console.log(updateRatings(movieRatings, updates));

// Exercise 4 -----------------
const list1 = ["The Shawshank Redemption", "The Godfather", "The Dark Knight"];
const list2 = ["Forest Gump", "Inception", "The Godfather"];

const list3 = [...new Set([...list1, ...list2])];
console.log(list3);

// Exercise 5 -----------------
const movieDetails = {
    title: "Inception",
    cast: {
        first: "Leonardo Dicaprio",
        second: "Joseph Gordon-Levitt",
        third: "Ellen Page"
    }
};

const { first, second } = movieDetails.cast;
console.log(first); 
console.log(second);

// Exercise 6 ----------------
const baseInfo = {
    title: "Inception",
    director: "Christopher Nolan"
}
const additionalInfo = {
    year: 2010,
    rating: 8.8
}

const movieInfo = {...baseInfo, ...additionalInfo}
console.log(movieInfo);

// Exercise 7 ----------------
const movieDetails1 = {
    title: "Inception",
    year: 2010,
    rating: 9.0,
    genres: ["Action", "Adventure", "Sci-fi"]
};

const expandGenres = (movie, ...genre) => {
    movie.genres = [...movie.genres, ...genre]
}
expandGenres(movieDetails1,'Drama', 'Horror', 'Foo');
console.log(movieDetails1);

// Exercise 8 ----------------
const watchList = [
    ["The Matrix", "Inception"],
    ["Inception", "The Dark Knight"],
    ["The Dark Knight", "Interstellar"]
]
const flatten = (watchList) => {
    const [array1, array2, array3] = watchList;
    const flattenedArr = [...new Set([...array1, ...array2, ...array3])];
    return flattenedArr;
};

console.log(flatten(watchList));

// Exercise 9 ----------------
const movies = [
    {title: "The Matrix", rating: 8.7},
    {title: "Inception", rating: 8.8}
]

const ratingUpdater = (movies, amount) => movies.map(movie => ({ ...movie, rating: movie.rating + amount }));
console.log(ratingUpdater(movies, 0.5));

// Exercise 10 ----------------
const movieDetails2 = {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"]
};
const firstNames = (movieDetails) => {
    const {title, cast} = movieDetails
    const firstNames = cast.map(name => name.split(" ")[0])
    return {title: title, cast: firstNames}
}

console.log(firstNames(movieDetails2));
