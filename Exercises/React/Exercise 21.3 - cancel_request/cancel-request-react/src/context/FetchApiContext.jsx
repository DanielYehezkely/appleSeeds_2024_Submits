import { createContext, useState, useContext, useEffect } from "react";
import { fetchApi } from "../api/api";

const FetchApiContext = createContext();

export const FetchApiProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true; 

    const fetchData = async () => {
      try {
        const pokemonsData = await fetchApi();
        if (isMounted) {
          setData(pokemonsData);
        }
      } catch (error) {
        if (isMounted) {
          setError(error.message);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []); 

  return (
    <FetchApiContext.Provider value={{ data, error, isLoading }}>
      {children}
    </FetchApiContext.Provider>
  );
};

export const useFetchApi = () => {
  return useContext(FetchApiContext);
};