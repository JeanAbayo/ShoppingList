import React, { Component } from "react";
import { connect } from "react-redux";
import jquery from "jquery";

// Import Error notifier
import Notifier from "./notifier";

import Loader from "../components/loader";
import { createShoppinglist } from "../actions/ShoppingListsActions";

const $ = (window.jQuery = jquery);

class CreateShoppinglist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppinglistData: {
        title: "",
        description: ""
      }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
  }
  componentDidMount() {
    const { handleModalCloseClick } = this.props;
    $(this.modal).modal("show");
    $(this.modal).on("hidden.bs.modal", handleModalCloseClick);

    if (this.props.created && this.props.processing) {
      this.props.history.push("/shoppinglists");
    }
  }

  handleCloseClick() {
    const { handleModalCloseClick } = this.props;
    $(this.modal).modal("hide");
    handleModalCloseClick();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      shoppinglistData: { ...this.state.shoppinglistData, [name]: value }
    });
  }

  submitShoppinglist = event => {
    event.preventDefault();
    this.props.createShoppinglist(this.state.shoppinglistData);
  };

  render() {
    return (
      <div className="show_create_sl">
        {this.props.processing ? <Loader /> : null}
        <div
          className="modal fade"
          ref={modal => (this.modal = modal)}
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Create a Shoppinglist
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form
                className="form-horizontal"
                onSubmit={this.submitShoppinglist}
              >
                <div className="modal-body">
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="Title"
                      type="text"
                      name="title"
                      minLength="6"
                      value={this.state.shoppinglistData.title}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Description"
                      type="description"
                      name="description"
                      minLength="6"
                      value={this.state.shoppinglistData.description}
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
                    onClick={this.handleCloseClick}
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { payload, processing, created } = state.shoppinglist;
  return {
    processing,
    payload,
    created
  };
}

export default connect(mapStateToProps, { createShoppinglist })(
  CreateShoppinglist
);
