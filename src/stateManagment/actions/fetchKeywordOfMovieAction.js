import mainUrl from "../../url/main-url"
import { actionType } from "./actionType";

export const fetchKeywordOfMovieAction = async (dispatch,id) => {
    const url = await fetch(`${mainUrl.FETCH_URL}/movie/${id}/keywords?api_key=${mainUrl.API_KEY}`)
    let result = await url.json();
    return dispatch(updateKeywordAcion(result));

}

export const updateKeywordAcion =(result)=>{
    return{
        type:actionType.UPDATE_KEYWORD,
        payload:result
    }
}