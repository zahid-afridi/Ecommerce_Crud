import { combineReducers } from "@reduxjs/toolkit";
import AuthSlice from "../slices/AuthSlice";


const rootReducer=combineReducers({
    auth:AuthSlice
})

export {rootReducer}