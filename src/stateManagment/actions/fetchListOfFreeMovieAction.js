import { actionType } from './actionType'
import mainUrl from '../../url/main-url'


export const startFetchListOfFreeMovieAction = () => {
    return {
        type: actionType.START_FETCH_LIST_OF_FREE_MOVIE
    }
}

export const finishFetchListOfFreeMovieAction = (movieData) => {
    return {
        type: actionType.FINISH_FETCH_LIST_OF_FREE_MOVIE,
        payload: movieData
    }
}

export const errorFetchData = () => {
    return {
        type: actionType.ERROR_FETCH_DATA,
        payload: "Fetch Data Error"
    }
}

export const fetchFreeMovieAction = async (dispatch) => {
    try {
        dispatch(startFetchListOfFreeMovieAction());
        const urlGetAllMovie = await fetch(`${mainUrl.FETCH_URL}/movies?page=2`);
        let result = await urlGetAllMovie.json();
        return dispatch(finishFetchListOfFreeMovieAction(result));
    } catch (e) {
        dispatch(errorFetchData());
    }
}
