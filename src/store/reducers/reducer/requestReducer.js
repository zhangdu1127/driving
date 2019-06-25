import * as Type from "../type";
import { requestData } from "../stateData/requestData";
export const requestReducer = (state = requestData, action) => {
  switch (action.type) {
    case Type.REQUEST_KEMU1_FETCHING:
      state.isFetching = false;
      return { ...state };
    case Type.REQUEST_KEMU1_FETCHED:
      state.isFetching = true;
      state.kemu1Data = action.data;
      return { ...state };
    case Type.REQUEST_KEMU4_FETCHING:
      state.isFetching = false;
      return { ...state };
    case Type.REQUEST_KEMU4_FETCHED:
      state.isFetching = true;
      state.kemu1Data = action.data;
      return { ...state };
    default:
      return { ...state };
  }
};
