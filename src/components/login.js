import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

// import container
import LoginContainer from "../containers/loginContainer";
// import components
import HomeSidebar from "./helpers/homeSidebar";

class Login extends Component {
  render() {
    return (
      <div className="container-fluid sl_hero_content">
        <div className="row">
          <HomeSidebar />
          <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 sl_hero_form">
            <div className="panel panel-default">
              <div className="panel-heading">
                <strong className="">Create a ShoppingList account</strong>
              </div>
              <LoginContainer history={this.props.history} />
              <div className="panel-footer">
                Alredy have an account?{" "}
                <Link to="/signup" className="">
                  Signin here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
