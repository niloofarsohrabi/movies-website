import mainUrl from "../../url/main-url"
import { actionType } from "./actionType";

export const fetchTopCastOFMovieAction = async (dispatch, movieId) => {
    const urlTopCast = await fetch(`${mainUrl.FETCH_URL}/movie/${movieId}/credits?api_key=${mainUrl.API_KEY}&language=en-US`)
    let result = await urlTopCast.json();
    return dispatch(updateTopCastAction(result));
}
export const updateTopCastAction = (result) => {
    return {
        type: actionType.UPDATE_TOP_CAST,
        payload: result
    }
}