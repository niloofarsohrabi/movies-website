import { actionType } from './actionType'
import mainUrl from '../../url/main-url'


export const startFetchListOfMovieAction = () => {
    return {
        type: actionType.START_FETCH_LIST_OF_MOVIE
    }
}

export const finishFetchListOfMovieAction = (movieData) => {
    return {
        type: actionType.FINISH_FETCH_LIST_OF_MOVIE,
        payload: movieData
    }
}

export const errorFetchData = () => {
    return {
        type: actionType.ERROR_FETCH_DATA,
        payload: "Fetch Data Error"
    }
}

export const fetchMovieAction = async (dispatch) => {
    try {
        dispatch(startFetchListOfMovieAction());
        const urlGetAllMovie = await fetch(`${mainUrl.FETCH_URL}/movies`);
        let result = await urlGetAllMovie.json();
        return dispatch(finishFetchListOfMovieAction(result));
    } catch (e) {
        dispatch(errorFetchData());
    }
}
