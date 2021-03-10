
import { combineReducers } from 'redux';
import fetchListOfMovieReducer from './fetchListOfMovieReducer';
import fetchDetailOfMoieReducer  from './fetchDetailOfMovieReducer';
import { fetchFullUrlOfImageReducer } from './fetchFullUrlImageReducer';
import { fetchKeywordOfMovieReducer } from './fetchKeywordOfMovieReducer';
import { fetchTopCastOfMovieReducer } from './fetchTopCastOfMovieReducer';
import { fetchReviewsReducer } from './fetchReviewsReducer';
import { fetchImageOMovieReducer } from './fetchImageOfMovieReducer';
import { fetchRecommandMovieReducer } from './fetchRecommandMovieReducer';
import { fetchSearchOfMovieReducer } from './fetchSearchOfMovieReducer';

const rootReducer = combineReducers({
    listOfMovieState: fetchListOfMovieReducer,
    detailOfMovieState:fetchDetailOfMoieReducer,
    fullUrlImageState:fetchFullUrlOfImageReducer,
    keywordOfMovieState:fetchKeywordOfMovieReducer,
    topCastOMovieState:fetchTopCastOfMovieReducer,
    reviewsState:fetchReviewsReducer,
    getImageState:fetchImageOMovieReducer,
    getRecommandState:fetchRecommandMovieReducer,
    getSearchState:fetchSearchOfMovieReducer
});
export default rootReducer;