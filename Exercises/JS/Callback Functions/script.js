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

const logMovieTitle = (movie) => {
    console.log(`Movie title: ${movie.title}`);
};
processMovies(movies, logMovieTitle);

// Exercise 2
const processReviews = (arrayOfReviewObj, cbF) => {
    if (!Array.isArray(arrayOfReviewObj)) {
        throw new Error(`Expected an array of reviews`);
    } else {
        arrayOfReviewObj.forEach(review => {
            if (!review.hasOwnProperty("rating") || !review.hasOwnProperty("comment")) {
                throw new Error(`Review with ID ${review.id} is not correctly structured`);
            }
        })
    }
    const newReviews = JSON.parse(JSON.stringify(arrayOfReviewObj));
    newReviews.forEach(review => cbF(review));

    return newReviews;
}
const reviews = [
    { id: 45, movieId: 34, rating: 9, comment: "Great movie!" },
    { id: 46, movieId: 35, rating: 8, comment: "Nice film!" },
    { id: 47, movieId: 36, rating: 7, comment: "Could be better." }
];
const logReviewComment = (review) => {
    console.log(`Review comment: ${review.comment}`);
};
processReviews(reviews, logReviewComment);

// Exercise 3
const processUsers = (arrayOfUserObj, cbF) => {
    if (!Array.isArray(arrayOfUserObj)) {
        throw new Error(`Expected an array of users`);
    } else {
        arrayOfUserObj.forEach(user => {
            if (!user.hasOwnProperty("name") || !user.hasOwnProperty("age") || !user.hasOwnProperty("favoriteMovies") || !user.hasOwnProperty("reviewsPosted")) {
                throw new Error(`User with ID ${user.id} is not correctly structured`);
            }
        })
    }
    const newUsers = JSON.parse(JSON.stringify(arrayOfUserObj));
    newUsers.forEach(user => cbF(user));

    return newUsers;
}
const users = [
    { id: 'a9bcf', name: "User1", age: 25, favoriteMovies: ["Movie Title 1", "Movie Title 2"], reviewsPosted: 5 },
    { id: 'b2dfg', name: "User2", age: 30, favoriteMovies: ["Movie Title 3"], reviewsPosted: 8 },
    { id: 'c5hjk', name: "User3", age: 28, favoriteMovies: ["Movie Title 1"], reviewsPosted: 10 }
];
const incrementReviewsPosted = (user) => {
    user.reviewsPosted += 1;
    return user;
};
const updatedUsers = processUsers(users, incrementReviewsPosted);
console.log(updatedUsers); 

