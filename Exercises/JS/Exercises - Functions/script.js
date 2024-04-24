// Exercise 1 - initialize movie ratings
let movieRatings = [];
function initializeMovieRatings() {
    movieRatings = [];
}
console.log(initializeMovieRatings());

// Exercise 2 - add a movie ratings
function addRatings(movieTitle, rating) {
    movieRatings.push([movieTitle, rating]);
}
addRatings("Inception", 10);
addRatings("The Matrix", 11);
addRatings("Blade", 7);
console.log(movieRatings);

// Exercise 3 - find movie rating
function findRating(movieTitle) {
    for (let i = 0; i < movieRatings.length; i++) {
        const movieRating = movieRatings[i];
        if (movieRating.includes(movieTitle)) {
            console.log(`Rating for "${movieTitle}" is: ${movieRating[1]}`);
            return;
        }
    }
    console.log(`"${movieTitle}" was not found in movieRatings`);
}

findRating('Blade');

// Exercise 4 - update a movie rating
function updateRating(movieTitle, newRating) {
    for (let i = 0; i < movieRatings.length; i++) {
        const movieRating = movieRatings[i]
        if (movieRating.includes(movieTitle)) {
            movieRating[1] = newRating
        }
    }
    return `Movie was not found`
}
console.log(updateRating('Bade', 10));
updateRating('Blade', 10)
console.log(movieRatings);

// Exercise 5 - remove movie rating
function removeRating(movieTitle) {
    for (let i = 0; i < movieRatings.length; i++) {
        const movieRating = movieRatings[i]
        if (movieRating.includes(movieTitle)) {
            movieRatings.splice(i, 1);
        }
    }
    return `Movie was Not found`
}
console.log(removeRating('blade'));
removeRating('Blade');
console.log(movieRatings);

// Exercise 6 - list all movies and ratings
function listMovies() {
    for (let i = 0; i < movieRatings.length; i++) {
        const movieRating = movieRatings[i].join("-")
        console.log(`Movie ${movieRating}`);
    }
}
listMovies();

// Exercise 7 - find highest rated movie
function highestRatedMovie() {
    let highestRating = 0;
    let chosenMovie = undefined;
    for (let i = 0; i < movieRatings.length; i++) {
        const movieRating = movieRatings[i];
        if (movieRating[1] > highestRating) {
            highestRating = movieRating[1];
            chosenMovie = movieRating;
        }
    }
    if (!chosenMovie) {
        console.log(`no movies`);
    }
    return chosenMovie;
}
console.log(highestRatedMovie());

//  --------------------------------------------------- Pure Functions -------------------------------------------------//

// 1. Average Rating
// Example input: [3, 4, 5, 3, 5
function calculateAverageRating(arrayOfRatings) {
    let sum = 0;
    for (const movieRate of arrayOfRatings) {
        sum += movieRate
    }
    return sum / arrayOfRatings.length
}
const averageRating = calculateAverageRating([3, 4, 5, 3, 5])
console.log(averageRating);

// 2. Filter Movies by Rating
// Example input: ([3, 4, 5, 2, 1, 5], 4)
function filterByRating(arrayOfRatings, minRatingValue) {
    let minRateArray = []
    for (const rate of arrayOfRatings) {
        if (rate >= minRatingValue) {
            minRateArray.push(rate)
        }
    }
    return minRateArray
}
const filteredArr = filterByRating([3, 4, 5, 2, 1, 5], 4);
console.log(filteredArr);

// 3. Highest Rated Movie
// Example input: [3, 4, 5, 3, 5]
function findHighestRating(arrayOfRatings) {
    let highestRate = arrayOfRatings[0];
    for (const rate of arrayOfRatings) {
        if (highestRate < rate) {
            highestRate = rate
        }
    }
    return highestRate
}
const highestRate = findHighestRating([8, 1, 5, 22, 5])
console.log(highestRate);

// 4. Ratings Above Threshold
// Example input: ([3, 4, 5, 2, 1, 5], 3)
function ratingAboveThreshold(arrayOfRatings, threshold) {
    let thresholdArr = []
    for (const rate of arrayOfRatings) {
        if (rate > threshold) {
            thresholdArr.push(rate)
        }
    }
    return thresholdArr
}
console.log(ratingAboveThreshold([3, 4, 5, 2, 1, 5], 3));

// 5. Count Movies in Rating Range
// Example input: ([3, 4, 5, 2, 1, 5], 4, 5)
function countInRatingRange(arrayOfRatings, lower, higher) {
    let count = 0;
    for (const rate of arrayOfRatings) {
        if (rate >= lower && rate <= higher) {
            count++;
        }
    }
    return count
}
console.log(countInRatingRange([3, 4, 5, 2, 1, 5], 4, 5));

// 6. Filter Unique Ratings
// Example input: [5, 3, 4, 3, 5, 4, 5]
function uniqueRatings(arrayOfRatings) {
    const uniqueArray = []
    for (i = 0; i < arrayOfRatings.length; i++) {
        if (uniqueArray.indexOf(arrayOfRatings[i]) === -1) {
            uniqueArray.push(arrayOfRatings[i]);
        }
    }
    return uniqueArray;
}
console.log(uniqueRatings([5, 3, 4, 3, 5, 4, 5]));

// 7. Merge Ratings
// Example input: ([5, 3, 4], [2, 3, 5])
const exampleArr1 = [5, 3, 4]
const exampleArr2 = [2, 3, 5]
function mergeRatings(arr1, arr2) {
    const mergedArray = []
    for (let i = 0; i < arr1.length; i++) {
        if (mergedArray.indexOf(arr1[i]) === -1) {
            mergedArray.push(arr1[i]);
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (mergedArray.indexOf(arr2[i]) === -1) {
            mergedArray.push(arr2[i]);
        }
    }
    return mergedArray;
}
console.log(mergeRatings(exampleArr1, exampleArr2));
console.log(exampleArr1);
console.log(exampleArr2);

// 8. Ratings Differential
// Example input: ([4, 4, 4, 4, 5], [3, 3, 3, 3])
function ratingsDifferential(arrayOfRatings1, arrayOfRatings2) {
    let sum1 = 0;
    let sum2 = 0;
    for (const movieRate of arrayOfRatings1) {
        sum1 += movieRate
    }
    const averageRating1 = sum1 / arrayOfRatings1.length
    for (const movieRate of arrayOfRatings2) {
        sum2 += movieRate
    }
    const averageRating2 = sum2 / arrayOfRatings2.length
    const ratingDiff = Math.abs(averageRating1 - averageRating2)
    return ratingDiff
}

const result = ratingsDifferential([4, 4, 4, 4, 5], [3, 3, 3, 3])
console.log(result);

// 9. Filter Ratings by Multiple Criteria
// Example input: ([1, 2, 3, 4, 5], greaterThan=2, lessThan=5)
function filterRatingByCriteria(arrayOfRatings, greaterCriteria, lessCriteria) {
    const haveAllCriteria = []
    for (const rate of arrayOfRatings) {
        if (rate > greaterCriteria && rate < lessCriteria) {
            haveAllCriteria.push(rate)
        }
    }
    return haveAllCriteria
}
console.log(filterRatingByCriteria([1, 2, 3, 4, 5], 2, 5));

// Bonus Exercises

// 1. Sort Movie Ratings
// Example input: [5, 3, 4, 2, 1]
// const arrayOfRatings = [5, 3, 4, 2, 1]
function sortRatings(arrayOfRatings) {
    for (let i = 0; i < arrayOfRatings.length; i++) {
        for (let j = 0; j < arrayOfRatings.length - i - 1; j++) {
            if (arrayOfRatings[j] > arrayOfRatings[j + 1]) {
                let temp = arrayOfRatings[j]
                arrayOfRatings[j] = arrayOfRatings[j + 1]
                arrayOfRatings[j + 1] = temp
            }
        }
    }
    return arrayOfRatings

}
console.log(sortRatings([5, 3, 4, 2, 1]));


// 2. Average Rating of Top N Movies
// Example input: ([3, 1, 5, 4, 2], 3)
function averageOfTopN(arrayOfRatings, int) {
    const fixedArr = sortRatings(arrayOfRatings)
    const slicedArr = fixedArr.slice(-int)
    let sum = 0;
    for (const rate of slicedArr) {
        sum += rate
    }
    const averageOfTopN = sum / slicedArr.length
    return averageOfTopN
}
console.log(averageOfTopN([3, 1, 5, 4, 2], 3)
);

// 3. Create Rating Frequency Map
// Example input: [3, 4, 3, 5, 4, 5, 5]
function ratingFrequency(arrayOfRatings) {
    const obj = {}
    for (let i = 0; i < arrayOfRatings.length; i++) {
        if (!obj[arrayOfRatings[i]]) {
            obj[arrayOfRatings[i]] = 1
        } else {
            obj[arrayOfRatings[i]] += 1
        }
    }
    const freqArray = Object.entries(obj)
    return freqArray
}
console.log(ratingFrequency([3, 4, 3, 5, 4, 5, 5]));

// 4. Normalize Ratings
// Example input: ([1, 2, 3, 4, 5], 0, 10)
// normalizedValue = ((value - min) / range) * (new-max - new-min) + new-min - Formula for normalize
function normalizeRatings(arrayOfRatings) {
    let min = arrayOfRatings[0]; 
    let max = arrayOfRatings[0]; 

    for (let i = 1; i < arrayOfRatings.length; i++) {
        if (arrayOfRatings[i] < min) {
            min = arrayOfRatings[i];
        }
        if (arrayOfRatings[i] > max) {
            max = arrayOfRatings[i];
        }
    }
    const range = max - min; 
    const normalizedArray = [];
    for (let i = 0; i < arrayOfRatings.length; i++) {
        const normalizedValue = ((arrayOfRatings[i] - min) / range) * 10;
        normalizedArray.push(normalizedValue);
    }
    return normalizedArray;
}

const originalArray = [1, 2, 3, 4, 5];
const normalizedArray = normalizeRatings(originalArray);
console.log(normalizedArray);
