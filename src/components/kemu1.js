/* eslint-disable no-useless-constructor */
import KemuModel from "./kemuModel";

import { connect } from "react-redux";
import { anyRequestKemu1 } from "../store/reducers/actions/requestAction";
class Kemu1 extends KemuModel {
  constructor(props) {
    super(props);
    this.state = { topic: props.topic };
  }
  componentDidMount() {
    // let topic = this.state.topic;
    // this.axios(topic);
  }
}

function mapStateToProps(state) {
  return { state };
}

function mapDispatchToProps(dispatch) {
  return {
    kemu1: (...argument) => dispatch(anyRequestKemu1(...argument))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Kemu1);
