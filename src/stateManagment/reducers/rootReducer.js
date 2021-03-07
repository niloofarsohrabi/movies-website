
import { combineReducers } from 'redux';
import fetchListOfMovieReducer from './fetchListOfMovieReducer';
import fetchListOfFreeMovieReducer from './fetchListOfFreeMovieReducer';
import fetchDetailOfMoieReducer  from './fetchDetailOfMovieReducer';
import { fetchFullUrlOfImageReducer } from './fetchFullUrlImageReducer';

const rootReducer = combineReducers({
    listOfMovieState: fetchListOfMovieReducer,
    listOfFreeMovieState: fetchListOfFreeMovieReducer,
    detailOfMovieState:fetchDetailOfMoieReducer,
    fullUrlImageState:fetchFullUrlOfImageReducer
});
export default rootReducer;