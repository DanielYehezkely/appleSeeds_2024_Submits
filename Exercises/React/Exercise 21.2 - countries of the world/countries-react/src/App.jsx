import { useEffect, useState } from "react";
import InputComponent from "./components/InputComponent/InputComponent";
import CountriesList from "./components/CountriesList/CountriesList";
import { getCountries } from "../api/api";

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const countries = await getCountries();
        setCountries(countries);
        setFilteredCountries(countries);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    const results = countries.filter(country =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCountries(results);
  }, [searchTerm, countries]);

  return (
    <div className="hero-container">
      <h1>Countries Of The World</h1>
      <InputComponent searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CountriesList countries={filteredCountries} error={error} isLoading={isLoading} />
    </div>
  );
}

export default App;
