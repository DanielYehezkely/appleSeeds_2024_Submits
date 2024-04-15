// --------------- Exercise -1 -----------------
let movieRating;
if (movieRating > 7) {
    console.log("Highly rated movie");
} else {
    console.log("This movie has room for improvement");
}
// --------------- Exercise -2 -----------------
let movieBudget;
if (movieBudget > 1000000 && movieBudget < 100000000) {
    console.log("Big-budget movie");
} else {
    console.log("Indie movie");
}
// --------------- Exercise -3 -----------------
let movieGenre;
let audienceAge;
if (movieGenre === "Horror" && audienceAge >= 18) {
    console.log("Suitable for the audience");
} else if (movieGenre === "Horror" && audienceAge < 18) {
    console.log("Not suitable for audience");
} else {
    console.log("Suitable for all audience");
}
// --------------- Exercise -4 -----------------
let firstMovieDuration ;
let secondMovieDuration ;
if (firstMovieDuration === secondMovieDuration) {
    console.log("movies have the same duration");
} else if (firstMovieDuration > secondMovieDuration) {
    console.log("first movie is longer");
} else{
    console.log("second movie is longer");
}
// --------------- Exercise -5 -----------------
let viewerAge;
if (viewerAge > 18) {
    console.log("Suitable for adults");
} else if(viewerAge > 13){
    console.log("Suitable for teens");
} else{
    console.log("Suitbale for kids");
}
// --------------- Exercise -6 -----------------
let popularityScore;
popularityScore >= 80 ? console.log("popular movie") : console.log("less known movie")
// --------------- Exercise -7 -----------------
let numOfAwards;
numOfAwards % 2 === 0 ? console.log("Even number of awards") : console.log("odd number of awards")
// --------------- Exercise -8 -----------------
let actorAge;
actorAge >= 25 ? console.log("adult actor"): actorAge >= 14 ? console.log("young actor") : console.log("child actor")
// --------------- Exercise -9 -----------------
let hasInvitation;
hasInvitation ? console.log("Welcome to the premier"): console.log("Please check your invitation");
// --------------- Exercise -10 -----------------
let screeningDuration;
if (screeningDuration >= 120) {
    console.log("Epic length movie");
} else if (screeningDuration >= 40 && screeningDuration < 120) {
    console.log("Feature film");
} else {
    console.log("Short film");
}
// --------------- Exercise -11 -----------------
let dayOfWeek;
if (dayOfWeek === "Saturday" || dayOfWeek === 'Sunday') {
    console.log('Spacial screening event');
} else {
    console.log('regular movie showtimes');
}
// --------------- Exercise -12 -----------------
let releaseYear;
if (releaseYear > 2000 && releaseYear <= 2100) {
    console.log("21st century movie");
} else {
    console.log("20th century movie");
}
// --------------- Exercise -13 -----------------
if (movieGenre === "action" && movieRating >= 7) {
    console.log("must watch");
} else {
    console.log("check reviews before watching");
}
// --------------- Exercise -14 -----------------
let ticketPrice;
if (ticketPrice <= 10) {
    console.log("Discounted ticket");
} else {
    console.log("regular ticket");
}
// --------------- Exercise -15 -----------------
let age;
let isAdult = false;
if (isAdult || age) {
    console.log("allowed to watch");
} else {
    console.log("Age-restricted content");
}
// --------------- Exercise -16 -----------------
let movieTitle = "spider-man 2";
if (movieTitle.includes("2") || movieTitle.includes("part") ) {
    console.log("this movie is sequel");
} else {
    console.log("this movie is not sequel");
}
