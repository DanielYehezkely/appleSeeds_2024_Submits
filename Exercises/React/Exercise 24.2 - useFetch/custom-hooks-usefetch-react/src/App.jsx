import React from 'react';
import useFetch from "./hooks/useFetch";

const POKEMONS_URL = 'https://6666a2a7a2f8516ff7a42302.mockapi.io/poekmons';
const COUNTRIES_URL = 'https://restcountries.com/v3.1/all';

function App() {
  
  const { data: pokemons, error: pokemonError, isLoading: pokemonLoading } = useFetch(POKEMONS_URL);
  const { data: countries, error: countriesError, isLoading: countriesLoading } = useFetch(COUNTRIES_URL);

  return (
    <>
      <div className="hero-container">
        <h1>useFetch - Hook</h1>
        <div className="showcase-container">
          <h2>Countries</h2>
          <div className="countries-container container">
            {countriesLoading && <p>Loading countries...</p>}
            {countriesError && <p>Error loading countries: {countriesError}</p>}
            {!countriesLoading && !countriesError && countries.length > 0 &&
              countries.map((country) => (
                <div key={country.cca3} className="card">
                  <h3>{country.name.common}</h3>
                  <p>Population: {country.population}</p>
                  <p>Region: {country.region}</p>
                </div>
              ))
            }
          </div>
          <h2>Pokemons</h2>
          <div className="pokemons-container container">
            {pokemonLoading && <p>Loading pokemons...</p>}
            {pokemonError && <p>Error loading pokemons: {pokemonError}</p>}
            {!pokemonLoading && !pokemonError && pokemons.length > 0 &&
              pokemons.map((pokemon) => (
                <div key={pokemon.id} className="card">
                  <h3>{pokemon.name}</h3>
                  <p>{pokemon.type}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;