
import { combineReducers } from 'redux'
import fetchListOfMovieReducer from './fetchListOfMovieReducer';


const rootReducer = combineReducers({
    listOfMovieState: fetchListOfMovieReducer
});
export default rootReducer;