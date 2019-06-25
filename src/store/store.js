import { rootReducers } from "./reducers/reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { requestReducer } from "./reducers/reducer/requestReducer";
export let store = createStore(requestReducer, applyMiddleware(thunk));
