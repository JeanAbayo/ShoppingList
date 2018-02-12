import React, { Component } from "react";
import { connect } from "react-redux";
import Items from "../components/items";
// Import Error notifier
import Notifier from "../components/notifier";
import Loader from "../components/loader";
import Modal from "react-modal";

import { login } from "../actions/LoginActions";
import { updateItem, deleteItem, fetchAllItems } from "../actions/ItemsActions";

import * as Icon from "react-ionicons";

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

class ItemsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      action: null,
      toCreate: "",
      page: 1,
      per_page: 5,
      page_number: null,
      itemData: {
        item_title: "",
        item_description: ""
      }
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  componentDidMount() {
    this.props.fetchAllItems(this.props.shoppinglist[0].id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.loaded) {
      this.props.fetchAllItems(this.props.shoppinglist[0].id);
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      itemData: { ...this.state.itemData, [name]: value }
    });
  }

  updateItem = e => {
    e.preventDefault();
    this.closeModal;
    this.props.updateItem(this.state.itemData);
  };

  onDelete = item => {
    this.props.deleteItem({
      shoppinglist: this.props.shoppinglist[0].id,
      item
    });
  };

  onEdit = data => {
    this.openModal();
  };

  render() {
    const shoppinglist = this.props.shoppinglist[0];
    return (
      <div className="container-fluid">
        {this.props.loading ? <Loader /> : null}
        {this.props.notify.type ? (
          <Notifier message={this.props.notify} />
        ) : null}
        <div className="row">
          <div className="col col-12 align-self-center">
            <div className="card sl_display_card">
              <div className="row">
                <div className="col-8">
                  <h2 className="card-header">{shoppinglist.title}</h2>
                  <h5 className="card-header">{shoppinglist.description}</h5>
                </div>
              </div>
              <div className="card-block items-block">
                {this.props.empty ? (
                  <h2>No items found for now</h2>
                ) : (
                  <Items
                    data={this.props.items}
                    edit={this.onEdit}
                    delete={this.onDelete}
                  />
                )}
              </div>
              <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                ariaHideApp={false}
                tabIndex="0"
              >
                <div className="show_create_sl">
                  {this.props.processing ? <Loader /> : null}
                  <div>
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Add an item on your shoppinglist
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
                          onSubmit={this.updateItem}
                        >
                          <div className="modal-body">
                            <div className="form-group">
                              <input
                                className="form-control"
                                placeholder="Item title"
                                type="text"
                                name="item_title"
                                minLength="6"
                                value={this.state.itemData.item_title}
                                onChange={this.handleInputChange}
                                required
                              />
                            </div>
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                placeholder="Item description"
                                type="description"
                                name="item_description"
                                value={this.state.itemData.item_desription}
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
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { error, isAuthenticated } = state.login;
  const { loaded, payload, loading, empty, items } = state.items;
  const { notify } = state;
  return {
    error,
    payload,
    items,
    notify,
    empty,
    loaded,
    loading,
    isAuthenticated
  };
}

export default connect(mapStateToProps, {
  updateItem,
  deleteItem,
  fetchAllItems
})(ItemsContainer);
