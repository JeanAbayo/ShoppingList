import React, { Component } from "react";
import { connect } from "react-redux";
// Import Error notifier
import Notifier from "../components/notifier";
import Loader from "../components/loader";
import Profile from "../components/profile";

import { getUserProfile, updateUserProfile } from "../actions/ProfileActions";

class ProfileContainer extends Component {

  componentDidMount() {
    this.props.getUserProfile();
  }

  updateProfile = data => {
    this.props.updateUserProfile(data);
  };

  render() {
    return (
      <div className="container-fluid">
        {this.props.notify.type ? (
          <Notifier message={this.props.notify} />
        ) : null}
        {this.props.loading_info ? (
          <Loader />
        ) : (
          <div>
            {this.props.loaded ? (
              <Profile user={this.props.user} update={this.updateProfile} />
            ) : (
              <div>
                <Profile user={this.props.user} update={this.updateProfile} />
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loading_info, payload, loaded, user } = state.profile;
  const { notify } = state;
  return {
    loading_info,
    payload,
    loaded,
    notify,
    user
  };
}

export default connect(mapStateToProps, {
  getUserProfile,
  updateUserProfile
})(ProfileContainer);
