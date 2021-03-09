import { actionType } from '../actions/actionType'
import intialState from '../state/state'
export const fetchImageOMovieReducer = (state = intialState, action) => {
    switch (action.type) {
        case actionType.GET_IMAGE:           
            return{
                ...state,
                getImage:action.payload
            }
    
        default:            
            return{
                ...state
            }
    }
}