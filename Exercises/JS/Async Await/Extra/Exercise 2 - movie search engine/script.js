const OMDB_URL = 'http://www.omdbapi.com/?apikey=ce2475fa&t=';

const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const movieContainer = document.getElementById('movieContainer');
const spinner = document.getElementById('spinner');


const handleSearch = () => {
  const searchValue = searchInput.value.trim();
  if (searchValue === '') {
    displayError('Movie title can not be empty');
  } else {
    displaySpinner(true);
    searchMovie(searchValue);
  }
  searchInput.value = '';
}

searchButton.addEventListener('click', handleSearch);
searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    handleSearch();
  }
});

const searchMovie = async (title) => {
  try {
    const response = await fetch(`${OMDB_URL}${title}`);
    if (!response.ok) {
      throw new Error('An error occurred trying to fetch the API');
    }
    const movie = await response.json();
    displayMovie(movie);
  }
   catch (error) {
    displayError(error.message);
  } 
  finally {
    displaySpinner(false);
  }
};

const displayMovie = (movie) => {
  const template = `
    <div class="movie-content">
      <img src="${movie.Poster}" alt="Movie Poster" class="poster">
      <div class="movie-details">
        <h1>${movie.Title}</h1>
        <p>${movie.Plot}</p>
        <div class="info">
          <div class="info-label">Genre:</div>
          <div>${movie.Genre}</div>
        </div>
        <div class="info">
          <div class="info-label">Year:</div>
          <div>${movie.Year}</div>
        </div>
        <div class="info">
          <div class="info-label">Director:</div>
          <div>${movie.Director}</div>
        </div>
        <div class="info">
          <div class="info-label">Actors:</div>
          <div>${movie.Actors}</div>
        </div>
        <div class="info">
          <div class="info-label">Ratings:</div>
          <div id="movieRatings"></div>
        </div>
      </div>
    </div>
  `;
  movieContainer.innerHTML = template;
  const movieRatingsContainer = document.getElementById('movieRatings')
  handleRating(movie.Ratings, movieRatingsContainer);
};

const handleRating = (ratings, targetDiv) => {
  if (!ratings) {
    return;
  }
  targetDiv.innerHTML = '';
  ratings.forEach(rating => {
    if (["Internet Movie Database", "Rotten Tomatoes", "Metacritic"].includes(rating.Source)) {
      const ratingDiv = document.createElement('div');
      const sourceSpan = document.createElement('span');
      const valueSpan = document.createElement('span');

      sourceSpan.style.fontWeight = 'bold';
      sourceSpan.innerText = `${rating.Source}: `;
      valueSpan.innerText = rating.Value;

      ratingDiv.appendChild(sourceSpan);
      ratingDiv.appendChild(valueSpan);
      targetDiv.appendChild(ratingDiv);
    }
  });
};

const displayError = (message) => {
  const errorEl = document.createElement('div');
  errorEl.className = 'error';
  errorEl.textContent = message;
  movieContainer.innerHTML = '';
  movieContainer.appendChild(errorEl);
};

const displaySpinner = (isVisible) => {
  spinner.style.display = isVisible ? 'block' : 'none';
};



