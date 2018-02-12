import React, { Component } from "react";
import { connect } from "react-redux";
import Shoppinglist from "../components/shoppinglist";
import { Pagination } from "../components/pagination";
import { Search } from "../components/search";
import ShoppinglistContainer from "./shoppinglistContainer";
import ItemsContainer from "./itemsContainer";
// Import Error notifier
import Notifier from "../components/notifier";
import Loader from "../components/loader";

import { login } from "../actions/LoginActions";
import {
  createShoppinglist,
  fetchShoppinglists,
  updateShoppinglist,
  deleteShoppinglist,
  getShoppinglist
} from "../actions/ShoppingListsActions";

import { fetchAllItems } from "../actions/ItemsActions";

import * as Icon from "react-ionicons";

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.handleModalShowClick = this.handleModalShowClick.bind(this);
    this.handleModalCloseClick = this.handleModalCloseClick.bind(this);
    this.state = {
      showModal: false,
      action: null,
      toCreate: "",
      page: 1,
      per_page: 5,
      page_number: null
    };
  }

  componentDidMount() {
    this.props.fetchShoppinglists(this.state.page, this.state.per_page);
    this.setState({
      page_number: this.props.payload.length / this.state.per_page
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.processed) {
      this.props.fetchShoppinglists(this.state.page, this.state.per_page);
    }
  }

  changePage = (page, per_page) => {
    this.setState({ page, per_page });
  };

  handleModalCloseClick = () => {
    this.setState({
      showModal: false
    });
  };

  handleModalShowClick = () => {
    this.setState({
      showModal: true
    });
  };

  onCreate = () => {
    this.handleModalShowClick();
    this.setState({
      action: "create"
    });
  };

  onDelete = shoppinglist => {
    this.setState({
      action: "delete"
    });
    this.props.deleteShoppinglist(shoppinglist);
  };

  addItem = shoppinglist => {
    this.handleModalShowClick();
    this.setState({
      action: "addItem",
      toCreate: shoppinglist
    });
  };

  onEdit = data => {
    this.handleModalShowClick();
    this.setState({
      action: "edit"
    });
    this.props.getShoppinglist(data);
    // this.props.editShoppinglist(data);
  };

  render() {
    let itemShoppinglist = this.props.shoppinglists.filter(
      shoppinglist =>
        shoppinglist["id"] === this.props.match.params.shoppinglistId * 1
    );
    const { showModal } = this.state;
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
                  <h2 className="card-header">Your Shopping Lists</h2>
                </div>
                <div className="col-4">
                  <Search />
                  <Icon
                    icon="ios-create-outline"
                    fontSize="43px"
                    color="#fff"
                    className="create_sl"
                    onClick={this.onCreate}
                  />
                  <Icon
                    icon="ios-search-outline"
                    fontSize="43px"
                    color="#fff"
                    className="search_icon"
                  />
                  <Icon icon="ios-apps-outline" fontSize="43px" color="#fff" />
                </div>
                <div className="container">
                  <div className="row">
                    {showModal ? (
                      <ShoppinglistContainer
                        handleModalCloseClick={this.handleModalCloseClick}
                        history={this.props.history}
                        action={this.state.action}
                        editData={this.props.payload}
                        toCreate={this.state.toCreate}
                      />
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="card-block">
                {this.props.empty ? (
                  <div className="list-group">
                    <div className="d-flex w-100 justify-content-between">
                      <h4>{this.props.payload.message}</h4>
                    </div>
                  </div>
                ) : (
                  <div>
                    {this.props.match.params.shoppinglistId ? (
                      <ItemsContainer shoppinglist={itemShoppinglist} />
                    ) : (
                      <Shoppinglist
                        data={this.props.shoppinglists}
                        delete={this.onDelete}
                        edit={this.onEdit}
                        toAddOn={this.addItem}
                        payload={this.props.payload}
                      />
                    )}
                  </div>
                )}
              </div>
              <div className="row pagination_container">
                <Pagination
                  onPageChange={this.changePage}
                  numberOfPages={this.state.page_number}
                />
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
  const {
    processed,
    payload,
    processing,
    empty,
    shoppinglists
  } = state.shoppinglist;
  const { items } = state.items;
  const { notify } = state;
  return {
    error,
    payload,
    shoppinglists,
    notify,
    empty,
    items,
    processed,
    processing,
    isAuthenticated
  };
}

export default connect(mapStateToProps, {
  login,
  createShoppinglist,
  fetchShoppinglists,
  updateShoppinglist,
  deleteShoppinglist,
  getShoppinglist,
  fetchAllItems
})(DashboardContainer);
