import mainUrl from "../../url/main-url"
import { actionType } from "./actionType";

export const fetchRecommandMovieAction = async (dispatch, id) => {
    const url = await fetch(`${mainUrl.FETCH_URL}/movie/${id}/recommendations?api_key=${mainUrl.API_KEY}&language=en-US&page=1`);
    const result =await url.json();
    return dispatch(updateRecommandeMovieAction(result));
}

export const updateRecommandeMovieAction=(result)=>{
    return{
        type:actionType.UPDATE_RECOMMAND,
        payload:result
    }
}