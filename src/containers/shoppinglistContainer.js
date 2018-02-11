import React, { Component } from "react";
import { connect } from "react-redux";
import jquery from "jquery";

import Loader from "../components/loader";
import {
  createShoppinglist,
  updateShoppinglist
} from "../actions/ShoppingListsActions";

const $ = (window.jQuery = jquery);
const initialState = {
  shoppinglistData: {
    title: "",
    description: ""
  }
};

class ShoppinglistContainer extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
  }
  componentDidMount() {
    const { handleModalCloseClick } = this.props;
    $(this.modal).modal("show");
    $(this.modal).on("hidden.bs.modal", handleModalCloseClick);

    if (this.props.processed && this.props.processing) {
      this.props.history.push("/shoppinglists");
    }
    if (this.props.action === "edit") {
      this.setState({
        shoppinglistData: {
          title: this.props.editData.title,
          description: this.props.editData.description
        }
      });
    } else if (this.props.action === "create") {
      this.setState(initialState);
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

  updateShoppinglist = e => {
    e.preventDefault();
    this.props.updateShoppinglist({
      data: this.state.shoppinglistData,
      id: this.props.editData.id
    });
    this.handleCloseClick();
  };

  submitShoppinglist = e => {
    this.props.createShoppinglist(this.state.shoppinglistData);
    this.handleCloseClick();
    e.preventDefault();
  };

  render() {
    if (this.props.action === "edit") {
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
                    Edit a shoppinglist
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
                  onSubmit={this.updateShoppinglist}
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
    } else if (this.props.action === "create") {
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
}

function mapStateToProps(state) {
  const { payload, processing, processed } = state.shoppinglist;
  return {
    processing,
    payload,
    processed
  };
}

export default connect(mapStateToProps, {
  createShoppinglist,
  updateShoppinglist
})(ShoppinglistContainer);
