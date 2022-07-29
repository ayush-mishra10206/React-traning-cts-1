import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "redux";

const reducer = combineReducers({});

export default function configureStore(preloadedState: any) {
  const middlewareEnhancer = applyMiddleware(thunk);

  const enhancer = composeWithDevTools(middlewareEnhancer);

  const store = createStore(reducer, preloadedState, enhancer);
  return store;
}   

export interface AppState {}

export const initialAppState: AppState = {};

export const store = configureStore(initialAppState);