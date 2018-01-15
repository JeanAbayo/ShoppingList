import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../../actions/RegisterActions";
import * as Icon from "react-ionicons";
// import { AlertList } from "react-bs-notifier";

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
      },
      errors: {
        usernameError: "",
        emailError: "",
        passwordError: "",
        confirm_passwordError: "",
        questionError: "",
        answerError: "",
        detailedErrors: ""
      }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.validateInput = this.validateInput.bind(this);
  }
  validateInput(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    if (value === "") {
      this.setState({
        errors: {
          ...this.state.errors,
          [name + "Error"]: name + " can not be empty"
        }
      });
    } else {
      if (value.length <= 6) {
        this.setState({
          errors: {
            ...this.state.errors,
            answerError: "Should be more than six characters"
          }
        });
      }
    }
    console.log(this.state);
  }
  // Will do front-end validations here
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
    return (
      <div className="panel-body">
        <form className="form-horizontal" onSubmit={this.registerUser}>
          <div className="input-group">
            <span className="input-group-addon" aria-hidden="true" />
            <Icon icon="ios-person-outline" fontSize="33px" color="#fff" />
            <input
              className="form-control"
              placeholder="Username"
              type="text"
              name="username"
              value={this.state.newUser.username}
              onChange={this.handleInputChange}
              onBlur={this.validateInput}
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
              value={this.state.newUser.email}
              onChange={this.handleInputChange}
              onBlur={this.validateInput}
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
              value={this.state.newUser.password}
              onChange={this.handleInputChange}
              onBlur={this.validateInput}
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
              value={this.state.newUser.confirm_password}
              onChange={this.handleInputChange}
              onBlur={this.validateInput}
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
              value={this.state.newUser.question}
              onChange={this.handleInputChange}
              onBlur={this.validateInput}
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
              value={this.state.newUser.answer}
              onChange={this.handleInputChange}
              onBlur={this.validateInput}
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
  return {
    userData: state.newUser
  };
}

export default connect(mapStateToProps, { register })(SignupForm);
