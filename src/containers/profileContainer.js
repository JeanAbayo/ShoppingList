import React, { Component } from "react";
import { connect } from "react-redux";
// Import Error notifier
import Notifier from "../components/notifier";
import Loader from "../components/loader";
import Profile from "../components/profile";

import { getUserProfile, updateUserProfile } from "../actions/ProfileActions";

import * as Icon from "react-ionicons";

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUserProfile();
  }

  render() {
    return (
      <div className="container-fluid">
        {this.props.loading_info ? <Loader /> : null}
        {this.props.notify.type ? (
          <Notifier message={this.props.notify} />
        ) : null}
        {this.props.loaded ? <Profile user={this.props.payload} /> : <Loader />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loading_info, payload, loaded } = state.profile;
  const { notify } = state;
  return {
    loading_info,
    payload,
    loaded,
    notify
  };
}

export default connect(mapStateToProps, {
  getUserProfile,
  updateUserProfile
})(ProfileContainer);
