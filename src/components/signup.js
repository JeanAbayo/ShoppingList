import React, { Component } from "react";

class Signup extends Component {
  render() {
    return (
      <div className="panel-body">
        <form className="form-horizontal">
          <div className="input-group">
            <span
              className="input-group-addon glyphicon glyphicon-user"
              aria-hidden="true"
            />
            <input className="form-control" placeholder="Username" />
          </div>
          <div className="input-group">
            <span
              className="input-group-addon glyphicon glyphicon-envelope"
              aria-hidden="true"
            />
            <input className="form-control" placeholder="Email" />
          </div>
          <div className="input-group">
            <span
              className="input-group-addon glyphicon glyphicon-lock"
              aria-hidden="true"
            />
            <input className="form-control" placeholder="Password" />
          </div>
          <div className="input-group">
            <span
              className="input-group-addon glyphicon glyphicon-lock"
              aria-hidden="true"
            />
            <input
              className="form-control"
              placeholder="Confirm Password ..."
            />
          </div>
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
