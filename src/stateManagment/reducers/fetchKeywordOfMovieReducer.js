import { actionType } from "../actions/actionType";
import intialState from "../state/state";

export const fetchKeywordOfMovieReducer =(state=intialState,action)=>{
    switch (action.type) {
        case actionType.UPDATE_KEYWORD:
            return{
                ...state,
                getKeyWordOfMovie:action.payload
            }
    
        default:
            return{
                ...state
            }
    }
}