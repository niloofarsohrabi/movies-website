import { actionType } from './actionType'
import mainUrl from '../../url/main-url'


export const startFetchDetailOfMovieAction = () => {
    return {
        type: actionType.START_FETCH_DETAIL_OF_MOVIE
    }
}

export const finishFetchDetailOfMovieAction = (movieDetail) => {
    return {
        type: actionType.FINISH_FETCH_DETAIL_OF_MOVIE,
        payload: movieDetail
    }
}

export const errorFetchData = () => {
    return {
        type: actionType.ERROR_FETCH_DATA,
        payload: "Fetch Data Error"
    }
}

export const fetchDetailMovieAction = async (dispatch, id) => {
    try {
        dispatch(startFetchDetailOfMovieAction());
        const urlGetAllMovie = await fetch(`${mainUrl.FETCH_URL}/movies/${id}`);
        let result = await urlGetAllMovie.json();
        return dispatch(finishFetchDetailOfMovieAction(result));
    }
    catch(e){
        dispatch(errorFetchData());
    }
        
    
}
