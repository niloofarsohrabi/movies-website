
import { combineReducers } from 'redux';
import fetchListOfMovieReducer from './fetchListOfMovieReducer';
import fetchDetailOfMoieReducer  from './fetchDetailOfMovieReducer';
import { fetchFullUrlOfImageReducer } from './fetchFullUrlImageReducer';
import { fetchKeywordOfMovieReducer } from './fetchKeywordOfMovieReducer';
import { fetchTopCastOfMovieReducer } from './fetchTopCastOfMovieReducer';

const rootReducer = combineReducers({
    listOfMovieState: fetchListOfMovieReducer,
    detailOfMovieState:fetchDetailOfMoieReducer,
    fullUrlImageState:fetchFullUrlOfImageReducer,
    keywordOfMovieState:fetchKeywordOfMovieReducer,
    topCastOMovieState:fetchTopCastOfMovieReducer
});
export default rootReducer;