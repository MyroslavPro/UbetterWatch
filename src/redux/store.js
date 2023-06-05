import { combineReducers, configureStore } from "@reduxjs/toolkit";
import clientSlice from "./slice";

const rootReducer = combineReducers({
    clientkit: clientSlice
})

export const store = configureStore({
    reducer:rootReducer
});