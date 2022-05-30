import { actionTypes } from "./action";

export const initialState = {
    item: null,
    list: [],
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_CART_LIST: {
            let list = action.payload;
            return {
                ...state,
                list,
            }
        }
        case actionTypes.SET_CART_ITEM: {
            let item = action.payload;
            return {
                ...state,
                item,
            };
        }
        case actionTypes.CLEAR_CART_LIST: {
            return {
                ...state,
                list: [],
            }
        }
        default:
            return state;
    }
}

export default reducer;