import mainUrl from "../../url/main-url"
import { actionType } from "./actionType";

export const fetchImageOMovieAction = async (dispatch, id) => {
    const url = await fetch(`${mainUrl.FETCH_URL}/movie/${id}/images?api_key=${mainUrl.API_KEY}&include_image_language=en,null`)
    const result = await url.json();
    return dispatch(getImageAction(result));
}
export const getImageAction = (result) => {
    return {
        type: actionType.GET_IMAGE,
        payload: result
    }
}