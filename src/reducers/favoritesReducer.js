import { types } from "../types/types";

export function favoritesReducer(state, action) {
    console.log(state);

    switch (action.type) {
        
        case types.addFavorite:
            const { id } = action.payload;

            return {  
                ...state, 
                [id]: action.payload,
            }

        case types.removeFavorite: 
            delete state[action.payload]
            return {...state}

        default:
            return state;
    }
}
