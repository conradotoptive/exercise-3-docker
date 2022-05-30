import { logIn, register, updateWallet } from "../../services/userService";

export const actionTypes = {
    SET_USER: 'SET_USER',
    SET_TOKEN: 'SET_TOKEN',
    LOG_USER_IN: 'LOG_USER_IN',
    LOG_USER_OUT: 'LOG_USER_OUT',
};

export function logInUser(mail, password) {
    return async (dispatch, store) => {
        try {
            const res = await logIn(mail, password);
            if (res === 404) {
                return 404
            }
            if (res === 401) {
                return 401
            }
            const user = res.data.user;
            const token = res.data.token;
            await dispatch(setUser(user));
            await dispatch(setToken(token));
            await dispatch(logUserIn());
        } catch (err) {
            console.log(err);
        }
    }
}

export function registerUser(userName, mail, password) {
    return async (dispatch, store) => {
        try {
            const res = await register(userName, mail, password);
            if (res === 404) {
                return 404
            }
            const user = res.data.user;
            const token = res.data.token;
            await dispatch(setUser(user));
            await dispatch(setToken(token));
            await dispatch(logUserIn());
        } catch (err) {
            console.log(err);
        }
    }
}

export function walletUpdate(id, userr, quantity) {
    return async (dispatch, store) => {
        try {
            const res = await updateWallet(id, userr, quantity);
            if (res === 404) {
                return 404
            }
            const user = res.data;
            await dispatch(setUser(user));
        } catch (err) {
            console.log(err);
        }
    }
}

export function setUser(payload) {
    return {
        type: actionTypes.SET_USER,
        payload,
    }
}

export function logUserIn() {
    return {
        type: actionTypes.LOG_USER_IN,
    }
}

export function logUserOut() {
    return {
        type: actionTypes.LOG_USER_OUT,
    }
}

export function setToken(payload) {
    return {
        type: actionTypes.SET_TOKEN,
        payload,
    }
}