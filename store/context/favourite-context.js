import { createContext, useState } from "react";

// Create a new context for the meals data

export const FavouriteContext = createContext({
    ids: [],
    addFavourite: (id) => {},
    removeFavourite: (id) => {},
    clearFavourite: () => {},
})

function FavouritesContextProvider({children}) {
    const [favouriteMealIds, setFavouriteMealIds] = useState([]);
    
    const addFavourite = (id) => {
        setFavouriteMealIds((currentFavIds) => [...currentFavIds, id]);
    }
    
    const removeFavourite = (id) => {
        setFavouriteMealIds((currentFavIds) => currentFavIds.filter((mealId) => mealId !== id));
    }
    
    const clearFavourite = () => {
        setFavouriteMealIds([]);
    }
    const value = {
        ids: favouriteMealIds,
        addFavourite: addFavourite,
        removeFavourite : removeFavourite,
        clearFavourite : clearFavourite  
    }
       
    return (
        <FavouriteContext.Provider value={value} >
            {children}
        </FavouriteContext.Provider>
    )
}

export default FavouritesContextProvider;