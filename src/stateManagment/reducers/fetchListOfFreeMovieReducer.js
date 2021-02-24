import { actionType } from "../actions/actionType";
import intialState from "../state/state";

const fetchListOfFreeMovieReducer = (state=intialState,action)=>{
    switch (action.type) {
        case actionType.START_FETCH_LIST_OF_FREE_MOVIE:
            return {
                ...state,
                isLoading: true
            }
        case actionType.FINISH_FETCH_LIST_OF_FREE_MOVIE:
            return {
                ...state,
                getFreeWatchMovie: action.payload,
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
export default fetchListOfFreeMovieReducer;