// < ----------------- Exercise 1 -------------- >
const movieTitles = ["Inception", "The Dark Knight", "Interstellar"];
let longestTitle = "";
for (let i = 0; i < movieTitles.length; i++) {
    if (movieTitles[i].length > longestTitle.length) {
        longestTitle = movieTitles[i];
    }
}
console.log(longestTitle);
// < ----------------- Exercise 2 -------------- >
const movieRatings = [8.3, 7.5, 9.0, 8.7];
let sum = 0;
for (let rating of movieRatings) {
    sum += rating;
}
const average = sum / movieRatings.length;
console.log(average);
// < ----------------- Exercise 3 -------------- >
const newArr = [];
for (let i = 0; i < movieTitles.length; i++) {
    newArr.unshift(movieTitles[i]);
}
console.log(newArr);
// < ----------------- Exercise 4 -------------- >
for (let i = 0; i < movieRatings.length; i++) {
    movieRatings[i] += 0.5
}
console.log(movieRatings);
// < ----------------- Exercise 5 -------------- >
const movieRatings2 = [8.3, 7.5, 9.0, 8.7];
let highRatingsArr = [];
for (let i = 0; i < movieRatings2.length; i++) {
    const movieRating = movieRatings2[i]
    if (movieRating > 8) {
        highRatingsArr.push(movieRating)
    }
}
console.log(highRatingsArr);
// < ----------------- Exercise 6 -------------- >
const movieRatings3 = [8.3, 8.7, 9.0, 8.7, 8.3];
const specificRating = 8.7;
let count = 0;
for (let i = 0; i < movieRatings3.length; i++) {
    const movieRating = movieRatings3[i];
    if (movieRating === specificRating) {
        count++;
    }
}
console.log(count);
// < ----------------- Exercise 7 -------------- >
const watchedList = ["Inception", "The Dark Knight"];
const wishList = ["Interstellar", "Inception"];
let arr = [];
for (let i = 0; i < watchedList.length; i++) {
    if (wishList.indexOf(watchedList[i]) !== -1) {
        arr.push(watchedList[i]);
    }
}
console.log(arr);
// < ----------------- Exercise 8 -------------- >
const movieRatings4 = [8.3, 7.5, 9.0, 8.7];
const minRating = 8.0;
let ratingDemand = true;
for (let i = 0; i < movieRatings4.length; i++) {
    if (movieRatings4[i] < minRating) {
        ratingDemand = false;
        break;
    }
}
console.log(ratingDemand);
// < ----------------- Exercise 9 -------------- >
// const movieRatings4 = [8.3, 7.5, 9.0, 8.7];
let highestRating = 0;
for (let i = 0; i < movieRatings4.length; i++) {
    if (movieRatings4[i] > highestRating) {
        highestRating = movieRatings4[i];
    }
}
console.log(highestRating);
// < ----------------- Exercise 11 -------------- >
const ratingList = [[8, 7, 9], [6, 8, 7], [9, 9, 10]];
for (let i = 0; i < ratingList.length; i++) {
    let sumRating = 0;
    for (let j = 0; j < ratingList[i].length; j++) {
        sumRating += ratingList[i][j];
    }
    const averageRating = sumRating / ratingList[i].length;
    console.log(`Movie ${i + 1} average rating: ${averageRating}`);
}
// < ----------------- Exercise 12 -------------- >
const movieRatings5 = [8, 5, 9];
for (let i = 0; i < movieRatings5.length; i++) {
    let ratingBar = [];
    for (let j = 0; j < movieRatings5[i]; j++) {
        ratingBar.push('*');
    }
    console.log(`movie ${[i + 1]}: ${ratingBar.join('')}`);
}
// < ----------------- Exercise 13 -------------- >
// const movieRatings4 = [8.3, 7.5, 9.0, 8.7]
for (let i = 0; i < movieRatings4.length; i++) {
    for (let j = 0; j < movieRatings4.length - 1 - i; j++) {
        if (movieRatings4[j] > movieRatings4[j + 1]) {
            let highest = movieRatings4[j];
            movieRatings4[j] = movieRatings4[j + 1];
            movieRatings4[j + 1] = highest;
        }
    }
}
console.log(movieRatings4);
// < ----------------- Exercise 14 -------------- >
const reviewMatrix = [[7, 8.5], [6, 9], [8, 7.5]];
let total = 0;
// let totalLength = 0;
for (let i = 0; i < reviewMatrix.length; i++) {
    // totalLength += reviewMatrix[i].length
    for (let j = 0; j < reviewMatrix[i].length; j++) {
        total += reviewMatrix[i][j]
    }
}
console.log(total);
// < ----------------- Exercise 15 -------------- >
const ratingMatrix = [[7, 8.5], [6, 9], [8, 7.5]];
for (let i = 0; i < ratingMatrix.length; i++) {
    for (let j = 0; j < ratingMatrix[i].length - 1; j++) {
        if (ratingMatrix[i][j] > ratingMatrix[i][j + 1]) {
            console.log(`category ${[i][j] + 1} highest rating: ${ratingMatrix[i][j]}`);
        } else {
            console.log(`category ${[i][j] + 1} highest rating: ${ratingMatrix[i][j + 1]}`);
        }
    }
}
// more readable way ...
for (let i = 0; i < ratingMatrix.length; i++) {
    let highestRating = ratingMatrix[i][0];
    let category = i + 1;
    for (let j = 1; j < ratingMatrix[i].length; j++) {
        if (ratingMatrix[i][j] > highestRating) {
            highestRating = ratingMatrix[i][j];
        }
    }
    console.log(`Category ${category} highest rating: ${highestRating}`);
}
// < ----------------- Exercise 16 -------------- >
const genreAcclaimMatrix = [[5, 7], [8, 6], [9, 7]];
let acclaimCount = 0;
for (let i = 0; i < genreAcclaimMatrix.length; i++) {
    for (let j = 0; j < genreAcclaimMatrix[i].length; j++) {
        if (genreAcclaimMatrix[i][j] >= 7) {
            acclaimCount++
        }
    }
}
console.log(acclaimCount);
// < ----------------- Exercise 17 -------------- >
const blockbusterRatingMatrix = [[7, 8.5], [9.5, 9], [8, 7.5]];
for (let i = 0; i < blockbusterRatingMatrix.length; i++) {
    let genreSum = 0;
    let allGreaterThen = true;
    for (let j = 0; j < blockbusterRatingMatrix[i].length; j++) {
        if (blockbusterRatingMatrix[i][j] < 8.5) {
            allGreaterThen = false;
            break;
        }
        genreSum += blockbusterRatingMatrix[i][j];
    }
    if (allGreaterThen) {
        console.log(`Sum of ratings for genre ${i + 1}: ${genreSum}`);
    }
}
// < ----------------- Exercise 18 -------------- >
const directorRatingMatrix = [[7 ,8.5] ,[6 ,9] ,[8 ,7.5]] ;
for (let i = 0; i < directorRatingMatrix.length; i++) {
    let directorSumRating = 0;
    for (let j = 0; j < directorRatingMatrix[i].length; j++) {
        directorSumRating += directorRatingMatrix[i][j];
    }
    const directorAverageRating = directorSumRating / directorRatingMatrix[i].length;
    console.log(`director ${i + 1} average rating: ${directorAverageRating}`);
}
