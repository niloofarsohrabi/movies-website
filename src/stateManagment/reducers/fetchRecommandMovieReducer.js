import { actionType } from "../actions/actionType"
import intialState from '../state/state'
export const fetchRecommandMovieReducer = (state=intialState,action)=>{
    switch (action.type) {
        case actionType.UPDATE_RECOMMAND:
            return{
                ...state,
                getRecommand:action.payload
            }
            
    
        default:
            return{
                ...state,

            }
    }
}