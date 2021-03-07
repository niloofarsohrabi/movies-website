import mainUrl from "../../url/main-url";
import { actionType } from "./actionType";

export const fetchFullUrlOfImageAction = async (dispatch) => {
    const getImageUrl = await fetch(`${mainUrl.FETCH_URL}/configuration?api_key=${mainUrl.API_KEY}`);
    const result = await getImageUrl.json();
    return dispatch(updateStateOfImageUrlAction(result));
}

export const updateStateOfImageUrlAction = (result) => {
    return {
        type: actionType.UPDATE_STATE_OF_IMAGE_URL,
        payload: result
    }
}