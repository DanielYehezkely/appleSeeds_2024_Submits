import axios from "axios";

import { USERS_URL, DELETE_USERS_ERROR_MESSAGE, GET_USERS_ERROR_MESSAGE, POST_USERS_ERROR_MESSAGE } from "../models/constants";

export interface UserObj {
    id: string;
    fullName: string;
    email: string;
    message: string;
}

export const addUserCall = async (userCall: UserObj): Promise<void> => {
  try {
    const response = await axios.post(USERS_URL, userCall)
  } catch (error) {
    throw new Error(POST_USERS_ERROR_MESSAGE)
  }
};

export const getUsersCalls = async (): Promise<UserObj[]> => {
  try {
    const response = await axios(USERS_URL);
    return response.data
  } catch (error) {
    throw new Error(GET_USERS_ERROR_MESSAGE);
  }
};

export const deleteUserCallObj = async (userId:string): Promise<void> => {
  try {
    const response = await axios.delete(`${USERS_URL}/${userId}`);
  } catch (error) {
    throw new Error(DELETE_USERS_ERROR_MESSAGE)
  }
};