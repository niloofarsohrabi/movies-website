import { actionType } from "../actions/actionType";
import intialState from "../state/state";

export const fetchTopCastOfMovieReducer=(state=intialState,action)=>{
    switch (action.type) {
        case actionType.UPDATE_TOP_CAST:
            return{
                ...state,
                getTopCastOfMovie:action.payload
            }
            
            
    
        default:
            return{
                ...state
            }
    }
}