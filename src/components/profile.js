import React, { Component } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.showUpdateModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  showUpdateModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-md-center">
          <div className="col col-6 sl_hero_form">
            <div className="panel panel-default">
              <div className="col col-12 align-self-center">
                <h4>Account settings</h4>
                <p>Username: {this.props.user.username}</p>
                <p>Email: {this.props.user.email}</p>
                <button
                  type="button"
                  class="btn btn-outline-primary"
                  onClick={this.showUpdateModal}
                >
                  Update user info
                </button>
                <Modal
                  isOpen={this.state.modalIsOpen}
                  onAfterOpen={this.afterOpenModal}
                  onRequestClose={this.closeModal}
                  style={customStyles}
                  contentLabel="Example Modal"
                >
                  <div className="show_create_sl">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Update profile info
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={this.closeModal}
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <form
                          className="form-horizontal"
                          onSubmit={this.updateUserInfo}
                        >
                          <div className="modal-body">
                            <div className="form-group">
                              <input
                                className="form-control"
                                placeholder="Username"
                                type="text"
                                name="username"
                                minLength="6"
                                value={this.props.user.username}
                                onChange={this.handleInputChange}
                                required
                              />
                            </div>
                            <div className="form-group">
                              <input
                                className="form-control"
                                placeholder="User email"
                                type="email"
                                name="email"
                                value={this.props.user.email}
                                minLength="6"
                                onChange={this.handleInputChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button type="submit" className="btn btn-primary">
                              Save
                            </button>
                            <button
                              type="button"
                              className="btn btn-secondary"
                              onClick={this.closeModal}
                            >
                              Close
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
