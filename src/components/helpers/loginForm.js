import React, { Component } from "react";
import * as Icon from "react-ionicons";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.setValueState = this.setValueState.bind(this);
  }
  setValueState(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <div className="panel-body">
        <form className="form-horizontal">
          <div className="input-group">
            <span className="input-group-addon" aria-hidden="true" />
            <Icon icon="ios-mail-outline" fontSize="33px" color="#fff" />
            <input
              className="form-control"
              placeholder="Email"
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.setValueState}
            />
          </div>
          <div className="input-group">
            <span className="input-group-addon" aria-hidden="true" />
            <Icon icon="ios-lock-outline" fontSize="33px" color="#fff" />
            <input
              className="form-control"
              placeholder="Password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.setValueState}
            />
          </div>
          <div className="form-group last">
            <div className="col-sm-12">
              <button type="submit" className="btn btn-success btn-sm">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
