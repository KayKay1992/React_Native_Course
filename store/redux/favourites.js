import {createSlice} from "@reduxjs/toolkit"

const favouritesSlice = createSlice({
    name: 'favourites',
    initialState: {
        ids: [],
    },
    reducers: {
        addFavourite: (state, action) => {
            if (!state.ids.includes(action.payload.id)) {
                state.ids.push(action.payload.id)
            }
        },
        removeFavourite: (state, action) => {
            const index = state.ids.indexOf(action.payload.id)
            if (index !== -1) {
                state.ids.splice(index, 1)
            }
        },
        clearFavourites: (state) => {
            state.ids = []
        },
    },
})
export const addFavourite = favouritesSlice.actions.addFavourite
export const removeFavourite = favouritesSlice.actions.removeFavourite
export const {clearFavourites} = favouritesSlice.actions;
export default favouritesSlice.reducer;