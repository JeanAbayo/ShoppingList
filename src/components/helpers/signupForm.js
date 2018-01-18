import React, { Component } from "react";
import { connect } from "react-redux";
import * as Icon from "react-ionicons";

import { register } from "../../actions/RegisterActions";

// Import Error notifier
import Notifier from "../../containers/notifier";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: {
        username: "",
        email: "",
        password: "",
        confirm_password: "",
        question: "",
        answer: ""
      }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      newUser: { ...this.state.newUser, [name]: value }
    });
  }

  registerUser = event => {
    event.preventDefault();
    this.props.register(this.state.newUser);
  };

  render() {
    let notificationType = "";
    if (this.props.error) {
      notificationType = "danger";
    } else if (this.props.registered) {
      notificationType = "success";
    } else {
      notificationType = null;
    }
    return (
      <div className="panel-body">
        {this.props.payload ? (
          <Notifier
            message={this.props.payload.message}
            type={notificationType}
          />
        ) : null}
        <form className="form-horizontal" onSubmit={this.registerUser}>
          <div className="input-group">
            <span className="input-group-addon" aria-hidden="true" />
            <Icon icon="ios-person-outline" fontSize="33px" color="#fff" />
            <input
              className="form-control"
              placeholder="Username"
              type="text"
              minLength="6"
              name="username"
              value={this.state.newUser.username}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <span className="input-group-addon" aria-hidden="true" />
            <Icon icon="ios-mail-outline" fontSize="33px" color="#fff" />
            <input
              className="form-control"
              placeholder="Email"
              type="email"
              name="email"
              minLength="6"
              value={this.state.newUser.email}
              onChange={this.handleInputChange}
              required
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
              minLength="6"
              value={this.state.newUser.password}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <span className="input-group-addon" aria-hidden="true" />
            <Icon icon="ios-lock-outline" fontSize="33px" color="#fff" />
            <input
              className="form-control"
              placeholder="Confirm Password"
              type="password"
              name="confirm_password"
              minLength="6"
              value={this.state.newUser.confirm_password}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <span className="input-group-addon" aria-hidden="true" />
            <Icon icon="ios-help-circle-outline" fontSize="33px" color="#fff" />
            <input
              className="form-control"
              placeholder="Security question"
              type="text"
              name="question"
              minLength="6"
              value={this.state.newUser.question}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <span className="input-group-addon" aria-hidden="true" />
            <Icon
              icon="ios-information-circle-outline"
              fontSize="33px"
              color="#fff"
            />
            <input
              className="form-control"
              placeholder="Security Answer"
              type="text"
              name="answer"
              minLength="6"
              value={this.state.newUser.answer}
              onChange={this.handleInputChange}
              required
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

function mapStateToProps(state) {
  const { error, payload, registered } = state.register;
  return {
    error,
    payload,
    registered
  };
}

export default connect(mapStateToProps, { register })(SignupForm);
