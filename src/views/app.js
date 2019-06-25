import React from "react";
import { Provider } from "react-redux";
import { store } from "../store/store";

import Kemu1 from "../components/kemu1";
import Kemu4 from "../components/kemu4";
// import Kemu from "../components/kemuModel";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../assets/css/app.css";
import { Nav, NavItem, PageHeader } from "react-bootstrap";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShow: 1, topic: { page: 1, size: 10 } };
  }
  componentWillMount() {
    if (window.location.pathname === "/kemu4") {
      this.setState({ isShow: 2 });
    } else {
      this.setState({ isShow: 1 });
    }
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <PageHeader>
            驾考宝典 <small>成功在此一步</small>
          </PageHeader>
          <Nav bsStyle="pills" activeKey={this.state.isShow}>
            <NavItem eventKey={1} href="/kemu1" title="科目一">
              科目一
            </NavItem>
            <NavItem eventKey={2} href="/kemu4" title="科目四">
              科目四
            </NavItem>
          </Nav>
          <Switch>
            <Route
              to="/kemu1"
              exact
              render={() => <Kemu1 topic={this.state.topic} />}
            />
            <Route to="/kemu4" render={() => <Kemu4 />} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
