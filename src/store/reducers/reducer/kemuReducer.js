import * as Action from "../actions/kemuAction";
import { kemuData } from "../stateData/kemuState";
function reducer(state = kemuData, action) {
  switch (action.type) {
    case [Action.Kemu1]:
      return { ...state };
    case [Action.Kemu4]:
      return { ...state };
    default:
      return { ...state };
  }
}

export default reducer;
