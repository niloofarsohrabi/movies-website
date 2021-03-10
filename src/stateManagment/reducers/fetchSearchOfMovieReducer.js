import { actionType } from "../actions/actionType";
import intialState from "../state/state";

export const fetchSearchOfMovieReducer = (state = intialState, action) => {
    switch (action.type) {
        case actionType.GET_SEARCH:
            return{
                ...state,
                search:action.payload
            }
            
    
        default:
            return{
                ...state
            }
    }
}