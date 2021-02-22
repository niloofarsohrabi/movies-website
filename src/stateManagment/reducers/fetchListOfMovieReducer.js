import { actionType } from "../actions/actionType";
import  intialState  from '../state/state'

const fetchListOfMovieReducer = (state = intialState, action) => {
    switch (action.type) {
        case actionType.START_FETCH_LIST_OF_MOVIE:
            return{
                ...state,
                getAllMovie:action.payload
            }

        default:
           return{
               ...state
           }
    }
}



export default fetchListOfMovieReducer;
