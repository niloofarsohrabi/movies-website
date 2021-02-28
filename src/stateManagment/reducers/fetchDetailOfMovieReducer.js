import { actionType } from '../actions/actionType';
import intialState from "../state/state";

 const fetchDetailOfMoieReducer = (state = intialState, action) => {
    switch (action.type) {
       case actionType.START_FETCH_DETAIL_OF_MOVIE:
           return{
               ...state,
               isLoading:true
           }
        case actionType.FINISH_FETCH_DETAIL_OF_MOVIE:
            return {
                ...state,
                getDetailOfMovie: action.payload,
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
export default fetchDetailOfMoieReducer;