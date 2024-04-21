
// 1. Movie Title Capitalization
const movieTitle = 'the dark knight';
const words = movieTitle.split(" ");
for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
}
console.log( words.join(" "));

// 2. Search Bar
const movieTitles = ['Inception','The Dark Knight', 'Interstellar'];
const query = 'In';
const newArrWithQuerry = []
for (let i = 0; i < movieTitles.length; i++) {
   if (movieTitles[i].includes(query)) {
    newArrWithQuerry.push(movieTitles[i])
   }
}
console.log(newArrWithQuerry);

// 3. Director's Name Format
const directorName = 'Nolan, Christopher';
const split = directorName.split(', ');
const directorFixedName = `${split[1]} ${split[0]}`; 
console.log(directorFixedName);

// 4. Movie Length
const movieLength = '2h 30min';
const splitMovieLength = movieLength.split(" ");
console.log(`${parseInt(splitMovieLength[0])} hours and ${parseInt(splitMovieLength[1])} minutes`);

// 5. Movie Initials
const titleForInitials = 'The Dark Knight';
const initials = movieTitle.split(" ");
for (let i = 0; i < initials.length; i++) {
    initials[i] = initials[i][0].toUpperCase();
}
console.log(initials.join(""));

// 6. Format Movie Information String
const movieDetails = 'Inception|Christopher Nolan|Sci-Fi';
const newArr = movieDetails.split("|")
console.log(`${newArr[0]}, Directed by ${newArr[1]}, genre: ${newArr[2]}`);

// 7. Movie Slug
const titleForSlug = 'The Dark Knight';
const newTitleForSlug = titleForSlug.replaceAll(" ", "-").toLowerCase();
console.log(newTitleForSlug);

// 8. Synopsis Trimming
const synopsis =
    'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO. But his tragic past may doom the project and his team to disaster.';
const maxSynopsisLength = 100;
synopsis.substring(0, maxSynopsisLength);
console.log(synopsis);

// 9. Genre List
const genres = 'Action,Adventure,Sci-Fi';
const newGenres = genres.split(',')
console.log(newGenres);