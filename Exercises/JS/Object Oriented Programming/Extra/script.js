// Exercise 1 - abstraction the movie class
class Movie {

    #title
    #releaseYear
    #genre
    #ratings

    constructor(title, releaseYear, genre) {
        this.#title = title
        this.#releaseYear = releaseYear
        this.#genre = genre
        this.#ratings = []
    }

    get getTitle() {
        return this.#title
    }

    set setTitle(newTitle) {
        if (typeof newTitle === 'string' || newTitle.length > 1 && newTitle.length < 100) {
            this.#title = newTitle;
        } else {
            console.error(`Title must be a string with length between 1 and 100 characters.`);
        }
    }

    get getYear() {
        return this.#releaseYear
    }

    set setYear(newYear) {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        if (newYear > 1900 && newYear <= currentYear) {
            this.#releaseYear = newYear
        } else {
            console.error(`Year must be above 1900 and less then the current year.`);
        }
    }

    get getGenre() {
        return this.#genre
    }

    set setGenre(newGenre) {
        if (typeof newGenre === 'string' && newGenre.trim().length > 0) {
            this.#genre = newGenre.trim();
        } else {
            console.error(`Genre must be a non-empty string.`);
        }
    }

    addRating(rating) {
        if (rating < 1 || rating > 5) {
            console.error('Rating must be between 1-5.');
        } else {
            this.#ratings.push(rating)
        }
    }

    getAverageRating() {
        return this.#ratings.reduce((sum, rating) => sum + rating, 0) / this.#ratings.length;
    }

    displayDetails() {
        console.log(`Movie Details - Title: ${this.#title}, Release Year: ${this.#releaseYear}, Genre: ${this.#genre}`);
    }

    typeOfMovie(){
        return "This is a standard movie."
    }
}

const movie1 = new Movie();
movie1.setTitle = 'movie1'
console.log(movie1.getTitle);
movie1.setYear = 1949
console.log(movie1.getYear);
movie1.setGenre = 'Drama'
console.log(movie1.getGenre);
movie1.addRating(4.3)
movie1.addRating(5)
movie1.addRating(3.8)
movie1.addRating(4.2)
movie1.addRating(4)
console.log(movie1.getAverageRating());
movie1.displayDetails()
console.log(movie1.typeOfMovie());

// Exercise 2 - inheritance - extended movie
class Series extends Movie {
    
    #numberOfEpisodes

    constructor(title, releaseYear, genre, numberOfEpisodes){
      super(title, releaseYear,genre)
      this.#numberOfEpisodes = numberOfEpisodes
    }

    get getNumOfEpisodes(){
        return this.#numberOfEpisodes
    }

    set setNumOfEpisodes(num){
        if (typeof num !== 'number' || num <= 0 ) {
            console.log('Number of episodes must be greater then 0.');
        } else {
            this.#numberOfEpisodes = num
        }
    }

    displayDetails() {
        console.log(`Movie Details - Title: ${this.getTitle}, Release Year: ${this.getYear}, Genre: ${this.getGenre}, Number of episodes: ${this.#numberOfEpisodes}`);
    }

    typeOfMovie() {
        return "This is a series."
    }
}

class Documentary extends Movie {

    #topic

    constructor(title, releaseYear, genre, topic) {
        super(title, releaseYear, genre)
        this.#topic = topic
    }

    get getTopic() {
        return this.#topic
    }

    set setTopic(topic) {
        if (topic.length <= 1 || topic.length >= 50) {
            console.log('Topic length must be greater then 1 and less then 50.');
        } else {
            this.#topic = topic
        }
    }

    displayDetails() {
        console.log(`Movie Details - Title: ${this.getTitle}, Release Year: ${this.getYear}, Genre: ${this.getGenre}, Number of episodes: ${this.getNumOfEpisodes}, Topic: ${this.#topic}`);
    }

    typeOfMovie() {
        return "This is a Documentary."
    }
}

const series = new Series();
series.setTitle = 'Movie1 -series'
series.setYear = 2000
series.setGenre = 'Drama'
series.setNumOfEpisodes = 8
console.log(series.getNumOfEpisodes);
series.displayDetails();


const documentary = new Documentary();
documentary.setTitle = 'Movie1 -documentary'
documentary.setYear = 2020
documentary.setGenre = 'Animals'
documentary.setNumOfEpisodes = 8
documentary.setTopic = 'The animals kingdom in the country of Nigeria'
documentary.displayDetails();

// Bonus - streaming platform 

class Streamer {

    #media
    static #streamerInstance

    constructor(){
        this.#media = []
        if (Streamer.#streamerInstance) {
            return Streamer.#streamerInstance
        }
        Streamer.#streamerInstance = this
    }

    static getStreamerInstance(){
        if (!Streamer.#streamerInstance) {
            Streamer.#streamerInstance = new Streamer();
        }
        return Streamer.#streamerInstance
    }

    addMedia(movie){
      if (!(movie instanceof Movie)) {
        console.error('Not an instance of Movie');
      } else {
        this.#media.push(movie)
      }
    }

    findMediaByTitle(title){
        return this.#media.filter(movie => movie.getTitle === title)
    }
}

const movie2 = new Movie();
movie2.setTitle = 'movie2'
console.log(movie1.getTitle);
movie2.setYear = 1999
console.log(movie1.getYear);
movie2.setGenre = 'Action'
console.log(movie1.getGenre);

const streamer = Streamer.getStreamerInstance();
streamer.addMedia(movie1);
streamer.addMedia(movie2);
const moviesFound = streamer.findMediaByTitle('movie2');
moviesFound.forEach(movie => {
    console.log(`Title: ${movie.getTitle}, Release Year: ${movie.getYear}, Genre: ${movie.getGenre}`);
});

