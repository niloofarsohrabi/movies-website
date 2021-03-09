import { actionType } from "../actions/actionType";
import intialState from "../state/state";

export const fetchReviewsReducer=(state=intialState,action)=>{
    switch (action.type) {
        case actionType.UPDATE_REVIEWS:
            return{
                ...state,
                getReviews:action.payload
            }
        
    
        default:
            return{
                ...state
            }
    }
}