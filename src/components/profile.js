import React, { Component } from "react";

class Profile extends Component {
  render() {
    return (
      <div className="row">
        <div className="col col-12 align-self-center">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 sl_hero_form">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <div className="row">
                      <div>Username: </div>
                      <div>
                        <p> {this.props.user.username}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div>Email: </div>
                      <div>
                        <p> {this.props.user.email}</p>
                      </div>
                    </div>
                    <button type="button" class="btn btn-outline-primary">
                      Update user info
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
