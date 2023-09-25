import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userReducer";

const rootReducer: any = combineReducers({
    users: userReducer
});

export default rootReducer;