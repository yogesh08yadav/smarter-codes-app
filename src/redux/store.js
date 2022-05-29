import { combineReducers, createStore } from "redux";
import { reducer } from "./chatReducer";

const chatReducer = combineReducers({
    reducer: reducer
})

export const store = createStore(chatReducer)