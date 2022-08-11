

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./rootReducer";
import thunk from "redux-thunk";


const initiallState = {};

export const store = createStore(reducer, initiallState, applyMiddleware(thunk));
