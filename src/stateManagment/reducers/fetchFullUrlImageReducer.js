import { actionType } from "../actions/actionType";
import intialState from "../state/state";


export const fetchFullUrlOfImageReducer = (state = intialState, action) => {
    switch (action.type) {
        case actionType.UPDATE_STATE_OF_IMAGE_URL:
            return {
                ...state,
                getFullUrlOfImages: action.payload
            }

        default:
            return {
                ...state
            }

    }

}
