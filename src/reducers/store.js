import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import { catsReducer } from "./catsReducer.ts";

const rootReducer = combineReducers({
    cats: catsReducer
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
