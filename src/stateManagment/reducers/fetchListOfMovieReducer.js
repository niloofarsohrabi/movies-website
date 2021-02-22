import { actionType } from "../actions/actionType";
import intialState from '../state/state'

const fetchListOfMovieReducer = (state = intialState, action) => {
    switch (action.type) {
        case actionType.START_FETCH_LIST_OF_MOVIE:
            return {
                ...state,
                isLoading: true
            }
        case actionType.FINISH_FETCH_LIST_OF_MOVIE:
            return {
                ...state,
                getAllMovie: action.payload,
                isLoading: false
            }

        case actionType.ERROR_FETCH_DATA:
              return {
                  ...state,
                  errorFetchData:true,
                  errorFetchData_Msg:action.payload
              }

        default:
            return {
                ...state
            }
    }
}



export default fetchListOfMovieReducer;
