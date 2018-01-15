import React, { Component } from "react";
// import components
import LoginForm from "./helpers/loginForm";
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
              <LoginForm />
              <div className="panel-footer">
                Alredy have an account?{" "}
                <a href="login.html" className="">
                  Signin here
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
