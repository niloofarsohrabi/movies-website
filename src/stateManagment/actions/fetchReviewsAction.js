import mainUrl from "../../url/main-url"
import { actionType } from "./actionType";

export const fetchReviewsAction = async (dispatch, movieId) => {
    const urlReviews = await fetch(`${mainUrl.FETCH_URL}/movie/${movieId}/reviews?api_key=${mainUrl.API_KEY}&language=en-US&page=1`);
    let result = await urlReviews.json();
    return dispatch(updateReviewsAction(result));
}

export const updateReviewsAction =(result)=>{
    return{
        type:actionType.UPDATE_REVIEWS,
        payload:result
    }
}