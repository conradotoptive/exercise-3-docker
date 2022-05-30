import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";

import cart from "./slices/cart/reducer";
import products from "./slices/products/reducer";
import user from "./slices/user/reducer";

const rootReducer = combineReducers({ cart, products, user });
const initialState = {};
const middleware = [thunk];

export const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)));

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);