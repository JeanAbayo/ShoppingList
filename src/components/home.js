import React, { Component } from "react";
import Signup from "./signup";

class Home extends Component {
  render() {
    return (
      <div className="container-fluid sl_hero_content">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 sl_hero_text">
            <h1>Keep track of your shopping</h1>
            <a href="/join" className=  "btn btn-primary btn-large">
              Join
              <span
                className="glyphicon glyphicon-menu-right"
                aria-hidden="true"
              />
            </a>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 sl_hero_form">
            <div className="panel panel-default">
              <div className="panel-heading">
                <strong className="">Create a ShoppingList account</strong>
              </div>
              <Signup />
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

export default Home;
