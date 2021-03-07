
import { combineReducers } from 'redux';
import fetchListOfMovieReducer from './fetchListOfMovieReducer';
import fetchDetailOfMoieReducer  from './fetchDetailOfMovieReducer';
import { fetchFullUrlOfImageReducer } from './fetchFullUrlImageReducer';

const rootReducer = combineReducers({
    listOfMovieState: fetchListOfMovieReducer,
    detailOfMovieState:fetchDetailOfMoieReducer,
    fullUrlImageState:fetchFullUrlOfImageReducer
});
export default rootReducer;