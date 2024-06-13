import axios from "axios";

const BASE_URL = 'https://restcountries.com/v3.1/all';

export const getCountries = async () => {
  try {
    const response = await axios(BASE_URL)
    return response.data
  } catch (error) {
    throw new Error(error.message)
  }
}