// Exercise 1 -- The media superclass
class Media {

    #title;
    #duration;
    #ratings;

    constructor(title, duration) {
        this.#title = title
        this.#duration = duration
        this.#ratings = []
    }

    get getTitle() {
        return this.#title
    }

    get getDuration() {
        return this.#duration
    }

    addRating(rating) {
        this.#ratings.push(rating)
    }

    #calculateAverageRating() {
        if (this.#ratings.length === 0) {
            return 'No ratings added yet.'
        } else {
            return this.#ratings.reduce((acc, rate) => acc + rate, 0) / this.#ratings.length;
        }
    }

    get getAverageRating() {
        return this.#calculateAverageRating();
    }

    displayDetails() {
        return `Media title: ${this.getTitle}, Duration: ${this.getDuration}, Average Ratings: ${this.getAverageRating}`
    }
}

const newMedia = new Media('title', 132);
console.log(newMedia.getTitle);
console.log(newMedia.getDuration);
newMedia.addRating(8.7)
newMedia.addRating(9)
newMedia.addRating(7)
console.log(newMedia.getAverageRating);
console.log(newMedia.displayDetails());

// Exercise 2 -- The movie and series subclasses
class Movie extends Media {

    #director;
    #genre;

    constructor(title, duration, director, genre) {
        super(title, duration);
        this.#director = director
        this.#genre = genre
    }

    get getDirector() {
        return this.#director
    }

    get getGenre() {
        return this.#genre
    }

    displayDetails() {
        return `Media title: ${this.getTitle}, Duration: ${this.getDuration}, Average Ratings: ${this.getAverageRating}, Director: ${this.getDirector}, Genre: ${this.getGenre}`
    }
}

class Series extends Movie {

    #seasons

    constructor(title, duration, director, genre, seasons) {
        super(title, duration, director, genre)
        this.#seasons = seasons
    }

    get getSeasons() {
        return this.#seasons
    }

    displayDetails() {
        return `Media title: ${this.getTitle}, Duration: ${this.getDuration}, Average Ratings: ${this.getAverageRating}, Director: ${this.getDirector}, Genre: ${this.getGenre} Seasons: ${this.getSeasons}`
    }
}

const newMovie = new Movie("Inception", 120, "Hans Zimmer", "Drama")

console.log(newMovie.getTitle);
console.log(newMovie.getDuration);
console.log(newMovie.getDirector);
console.log(newMovie.getGenre);
newMovie.addRating(8.9)
newMovie.addRating(10)
newMovie.addRating(9.3)
console.log(newMovie.getAverageRating);
console.log(newMovie.displayDetails());

const newSeries = new Series("Inception 2", 123, "Hans Zimmer", "Drama", 2)
newSeries.displayDetails();

// Exercise 3 -- The user class
class User {

    #userName
    #watchedMedia

    constructor(userName){
       this.#userName = userName
       this.#watchedMedia = []
    }

    get getUserName(){
        return this.#userName
    }
    
    addMedia(media){
        this.#watchedMedia.push(media)
    }

    rateMedia(media, rating) {
        if (!this.#watchedMedia.includes(media)) {
            return 'The user can only rate watched media.';
        }
        media.addRating(rating);
    }

    displayAllWatchedMedia() {
        for (const media of this.#watchedMedia) {
            console.log(media.displayDetails());
        }
    }
}

const user = new User('John Doe');

const movie1 = new Movie("Inception", 120, "Christopher Nolan", "Sci-Fi");
movie1.addRating(8.9);
user.addMedia(movie1);

const series1 = new Series("Breaking Bad", 45, "Vince Gilligan", "Drama", 5);
series1.addRating(9.5);
user.addMedia(series1);

console.log('---------------------------------------------');
user.displayAllWatchedMedia();