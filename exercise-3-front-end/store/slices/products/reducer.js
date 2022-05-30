import { actionTypes } from './action';

export const initialState = {
    product: null,
    productList: [],
}

function reducer (state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_PRODUCT_LIST: {
            let productList = action.payload;
            return {
                ...state,
                productList,
            };
        }
        case actionTypes.SET_PRODUCT:{
            let product = action.payload;
            return {
                ...state,
                product,
            };
        }
        case actionTypes.CLEAR_PRODUCT_LIST: {
            return {
                ...state,
                productList: [],
            };
        }
        default:
            return state;
    }
}

export default reducer;