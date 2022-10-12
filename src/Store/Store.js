import {  applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { MiddlewareReducer } from "../Reducers/MiddlewareReducer";

export const Store = createStore(MiddlewareReducer,applyMiddleware(thunk));
