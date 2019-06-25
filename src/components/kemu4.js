import KemuModel from "./kemuModel";

import { connect } from "react-redux";
import { anyRequestKemu4 } from "../store/reducers/actions/requestAction";
class Kemu4 extends KemuModel {}

function mapStateToProps(state) {
  return { state };
}

function mapDispatchToProps(dispatch) {
  return {
    kemu4: data => dispatch(anyRequestKemu4(data))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Kemu4);
