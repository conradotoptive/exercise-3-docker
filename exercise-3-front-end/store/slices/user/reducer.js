import { actionTypes } from './action';

export const initialState = {
    user: null,
    token: null,
    isLogged: false,
}

function reducer (state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_USER: {
            let user = action.payload;
            return {
                ...state,
                user,
            }
        }
        case actionTypes.LOG_USER_IN: {
            return {
                ...state,
                isLogged: true,
            }
        }
        case actionTypes.LOG_USER_OUT: {
            return {
                ...state,
                isLogged: false,
                token: null,
                user: null,
            }
        }
        case actionTypes.SET_TOKEN: {
            let token = action.payload
            return {
                ...state,
                token,
            }
        }
        default:
            return state;
    }
}

export default reducer;