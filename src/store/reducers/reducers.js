// import { estimateReducer } from "./reducer/estimateReducer";
import { combineReducers } from "redux";
import { requestReducer } from "./reducer/requestReducer";
export const rootReducers = combineReducers({ requestReducer });
