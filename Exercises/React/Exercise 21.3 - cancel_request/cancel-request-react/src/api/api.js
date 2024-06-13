import axios from "axios"

const BASE_URL = 'https://6666a2a7a2f8516ff7a42302.mockapi.io/poekmons'

 export const fetchApi = async () => {
  try {
    const response = await axios(BASE_URL);
    const data = response.data
    return data
  } catch (error) {
    throw new Error(error);
  }
}