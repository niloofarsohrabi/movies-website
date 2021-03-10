import mainUrl from "../../url/main-url";
import { actionType } from "./actionType";

export const fetchSearchOfMovieAction = async (dispatch, movieName) => {
    const searchUrl = await fetch(`${mainUrl.FETCH_URL}/search/movie?api_key=${mainUrl.API_KEY}&language=en-US&query=${movieName}&page=1&include_adult=false`)
    let result = await searchUrl.json();
    return dispatch(searchAction(result));
}

export const searchAction = (result) => {
    return {
        type: actionType.GET_SEARCH,
        payload: result

    }
}

