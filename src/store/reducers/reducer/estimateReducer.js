import * as Action from "../actions/estimateAction";
import { answer } from "../stateData/answer";

export const estimateReducer = (state = answer, action) => {
  switch (action.type) {
    case Action.Answer_ok:
      state.isAnswer = true;
      return { ...state };
    case Action.Answer_err:
      state.isAnswer = false;
      return state;
    default:
      return { ...state };
  }
};
