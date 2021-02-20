import intialState from './state';

export const rootReducer = (state = intialState, action) => {
    switch (action.type) {
        case "CLICK_ON_SEARCH":
            return {
                ...state,
                ClickSearchIconOnHeader: action.payload
            }
        case "CLICK_ON_CLOSE_ICON":
            return {
                ...state,
                ClickSearchIconOnHeader: action.payload
            }
        default:
            return {
                ...state
            }
    }

}