import React, { Component } from "react";
import { connect } from "react-redux";
import Items from "../components/items";
// Import Error notifier
import Notifier from "../components/notifier";
import Loader from "../components/loader";
import Modal from "react-modal";
import Pagination from "../components/pagination";
import * as Icon from "react-ionicons";

import { updateItem, deleteItem, fetchAllItems } from "../actions/ItemsActions";
import { getShoppinglist } from "../actions/ShoppingListsActions";
import SearchContainer from "./searchContainer";

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
    this.id = this.props.match.params.shoppinglistId;
    this.state = {
      modalIsOpen: false,
      action: null,
      toCreate: "",
      page: 1,
      per_page: 5,
      page_number: null,
      nowPage: null,
      results: [],
      itemData: {
        item_title: "",
        item_description: ""
      },
      item: ""
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
    const id = this.id * 1;
    this.props.getShoppinglist(id);
    this.props.fetchAllItems(id, this.state.page, this.state.per_page);
  }

  componentDidUpdate() {
    const id = this.id * 1;
    if (this.props.loaded) {
      this.props.fetchAllItems(id, this.state.page, this.state.per_page);
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

  updateItem = item => {
    this.closeModal();
    this.props.updateItem({
      shoppinglist: this.id * 1,
      item: this.state.item,
      data: this.state.itemData
    });
  };

  onDelete = item => {
    this.props.deleteItem({
      shoppinglist: this.id * 1,
      item
    });
  };

  changePage = page => {
    const id = this.id * 1;
    this.props.fetchAllItems(id, page, this.state.per_page);
  };

  onEdit = item => {
    const data = JSON.parse(item);
    this.setState({
      item: data.item_id,
      itemData: {
        ...this.state.itemData,
        item_description: data.item_description,
        item_title: data.item_title
      }
    });
    this.openModal();
  };

  displaySearchResults = () => {
    this.setState({
      nowPage: true
    });
  };

  generateSearch = data => {
    this.setState({
      search: true,
      searchData: data
    });
  };

  hideResultsDisplay = () => {
    setTimeout(() => {
      this.setState({
        nowPage: null
      });
    }, 1000);
  };

  searchResults = results => {
    this.setState({
      results
    });
  };

  render() {
    const shoppinglist = this.props.shoppinglist;
    return (
      <div className="container-fluid">
        {this.props.processing ? <Loader /> : null}
        {this.props.notify.type ? (
          <Notifier message={this.props.notify} />
        ) : null}
        <div className="row">
          <div className="col col-12 align-self-center">
            <div className="card sl_display_card">
              <div className="row">
                <div className="col-8">
                  {shoppinglist ? (
                    <div>
                      <h2 className="card-header">{shoppinglist.title}</h2>
                      <h5 className="card-header">
                        {shoppinglist.description}
                      </h5>
                    </div>
                  ) : (
                    <Loader />
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
                                  value={this.state.itemData.item_description}
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
              <div className="row justify-content-end">
                <div className="col-4">
                  <SearchContainer
                    items={this.props.items}
                    page={this.id}
                    itemData={this.searchResults}
                    triggerSearch={this.displaySearchResults}
                    hideSearch={this.hideResultsDisplay}
                  />
                  <Icon
                    icon="ios-search-outline"
                    fontSize="43px"
                    color="#fff"
                    className="search_icon"
                  />
                </div>
              </div>
              <div className="card-block items-block">
                {this.props.empty ? (
                  <div className="list-group">
                    <div className="d-flex w-100 justify-content-between">
                      <h4>{this.props.payload.message}</h4>
                    </div>
                  </div>
                ) : (
                  <Items
                    page={this.state.nowPage}
                    results={this.state.results}
                    data={this.props.items}
                    edit={this.onEdit}
                    delete={this.onDelete}
                  />
                )}
              </div>
              <div className="row pagination_container">
                {this.props.items[1] ? (
                  <Pagination
                    paginate={this.props.items[1].pagination}
                    onPageChange={this.changePage}
                  />
                ) : null}
              </div>
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
  const { shoppinglist } = state.shoppinglist;
  const { notify } = state;
  return {
    error,
    payload,
    items,
    shoppinglist,
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
  fetchAllItems,
  getShoppinglist
})(ItemsContainer);
