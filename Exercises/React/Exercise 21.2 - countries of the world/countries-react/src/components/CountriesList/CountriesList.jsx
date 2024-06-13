import React from "react";

import './CountriesList.css'

const CountriesList = ({ countries, error, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <div className='loader'>Loading ...</div>
      ) : error ? (
        <div className="error">Error: {error}</div>
      ) : (
        <div className="CountriesList">
          {countries.map(country => {
            return (
              <div className="country" key={country.name.official}>
                {country.name.common}
              </div>
            )
          })}
        </div>
      )}
    </>
  )
};

export default CountriesList;
