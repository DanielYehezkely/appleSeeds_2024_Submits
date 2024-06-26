import { configureStore } from "@reduxjs/toolkit";
import showCartReducer from "../features/showCartSlice";


export const store = configureStore({

  reducer: { 
    showCart: showCartReducer
   },

})