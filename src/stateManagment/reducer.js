import intialState from './state';

export const rootReducer = (state = intialState, action) => {
    switch (action.type) {
        case "CLICK_ON_SEARCH":
            return {
                ...state,
                ClickSearchIconOnHeader: true
            }
        case "CLICK_ON_CLOSE_ICON":
            return {
                ...state,
                ClickSearchIconOnHeader: false
            }
        default:
            return {
                ...state
            }
    }

}