
import { combineReducers } from 'redux';
import fetchListOfMovieReducer from './fetchListOfMovieReducer';
import fetchListOfFreeMovieReducer from './fetchListOfFreeMovieReducer';

const rootReducer = combineReducers({
    listOfMovieState: fetchListOfMovieReducer,
    listOfFreeMovieState: fetchListOfFreeMovieReducer,
});
export default rootReducer;