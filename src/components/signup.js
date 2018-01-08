import React, { Component } from "react";
import { FormInput } from "./utils";

class Signup extends Component {
  render() {
    return (
      <div className="panel-body">
        <form className="form-horizontal">
          <FormInput
            icon="ios-person"
            type="text"
            placeholder="Username"
            name="username"
          />
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
          <FormInput
            icon="ios-lock"
            type="password"
            placeholder="Confirm Password"
            name="confirm_password"
          />
          <div className="form-group last">
            <div className="col-sm-12">
              <button type="submit" className="btn btn-success btn-sm">
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
