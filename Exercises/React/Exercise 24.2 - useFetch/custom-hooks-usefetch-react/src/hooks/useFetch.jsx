import { useEffect } from "react";
import { useState } from "react";

import axios from "axios";

const useFetch = (url) => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null)

  useEffect(() => {
    if(!url){
      return;
    }

    const fetchData = async () => {
      setError(null);
      try {
        const response = await axios(url);
        setData(response.data);
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData();
    
  }, []);

  return {data, isLoading, error};
}

export default useFetch;