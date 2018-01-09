import React, { Component } from "react";
import { FormInput } from "./utils";

class LoginForm extends Component {
  render() {
    return (
      <div className="panel-body">
        <form className="form-horizontal">
          <FormInput
            icon="ios-mail"
            type="text"
            placeholder="Email"
            name="email"
          />
          <FormInput
            icon="ios-lock"
            type="password"
            placeholder="Password"
            name="password"
          />
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
