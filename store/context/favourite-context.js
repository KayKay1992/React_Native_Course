import { createContext } from "react";

// Create a new context for the meals data

export const FavouriteContext = createContext({
    ids: [],
    addFavourite: (id) => {},
    removeFavourite: (id) => {},
    clearFavourites: () => {},
})

function FavouritesContextProvider({children}) {
    return (
        <FavouriteContext.Provider >
            {children}
        </FavouriteContext.Provider>
    )
}

export default FavouritesContextProvider;