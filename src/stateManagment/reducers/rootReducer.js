
import { combineReducers } from 'redux';
import fetchListOfMovieReducer from './fetchListOfMovieReducer';
import fetchListOfFreeMovieReducer from './fetchListOfFreeMovieReducer';
import fetchDetailOfMoieReducer  from './fetchDetailOfMovieReducer';

const rootReducer = combineReducers({
    listOfMovieState: fetchListOfMovieReducer,
    listOfFreeMovieState: fetchListOfFreeMovieReducer,
    detailOfMovieState:fetchDetailOfMoieReducer
});
export default rootReducer;