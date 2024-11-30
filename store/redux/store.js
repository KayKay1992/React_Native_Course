import { configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "./favourites"


export const store = configureStore({
    reducer: {
        // Define your reducers here
        favouriteMeals: favouritesReducer
    }
})