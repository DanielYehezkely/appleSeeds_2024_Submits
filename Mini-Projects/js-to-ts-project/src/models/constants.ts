export const ADMIN = {
  username: import.meta.env.VITE_ADMIN_USERNAME, 
  password: import.meta.env.VITE_ADMIN_PASSWORD  
};

export const BASE_URL = import.meta.env.VITE_BASE_URL;
export const USERS_URL = import.meta.env.VITE_USERS_URL; 

// Links
export const GITHUB_LINK: string = 'https://github.com/DanielYehezkely';
export const LINKEDIN_LINK: string = 'https://www.linkedin.com/in/daniel-yehezkely/';
export const GMAIL: string = 'kegezgaming@gmail.com';

// Error Messages for Shoes
export const GET_SHOES_ERROR_MESSAGE: string = "Unable to fetch shoes details.";
export const GET_SHOE_ERROR_MESSAGE: string = "Unable to fetch shoe details.";
export const POST_SHOE_ERROR_MESSAGE: string = "Unable to add shoe.";
export const PUT_SHOE_ERROR_MESSAGE: string = "Unable to update shoe.";
export const DELETE_SHOE_ERROR_MESSAGE: string = "Unable to delete shoe.";

// Form Messages
export const FORM_INPUTS_EMPTY_MESSAGE: string = "All fields are required.";

// Error Messages for Users
export const GET_USERS_ERROR_MESSAGE: string = "Unable to fetch users details.";
export const POST_USERS_ERROR_MESSAGE: string = "Unable to add user call.";
export const DELETE_USERS_ERROR_MESSAGE: string = "Unable to delete user call.";