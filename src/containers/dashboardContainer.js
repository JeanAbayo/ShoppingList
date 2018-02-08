import React, { Component } from "react";
import { connect } from "react-redux";
import Shoppinglist from "../components/shoppinglist";
import { Pagination } from "../components/pagination";
import { Search } from "../components/search";
import ShoppinglistContainer from "./shoppinglistContainer";
// Import Error notifier
import Notifier from "../components/notifier";
import Loader from "../components/loader";

import { login } from "../actions/LoginActions";
import {
  createShoppinglist,
  fetchShoppinglists,
  editShoppinglist,
  deleteShoppinglist
} from "../actions/ShoppingListsActions";

import * as Icon from "react-ionicons";

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.handleModalShowClick = this.handleModalShowClick.bind(this);
    this.handleModalCloseClick = this.handleModalCloseClick.bind(this);
    this.state = {
      showModal: false,
      delete: null,
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

  changePage = (page, per_page) => {
    this.setState({ page, per_page });
  };

  handleModalCloseClick = () => {
    this.setState({
      showModal: false
    });
  };

  handleModalShowClick = e => {
    e.preventDefault();
    this.setState({
      showModal: true
    });
  };

  onDelete = shoppinglist => {
    this.props.deleteShoppinglist(shoppinglist);
  };

  onEdit = data => {
    this.props.editShoppinglist(data);
  };

  render() {
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
                    onClick={this.handleModalShowClick}
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
                      />
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="card-block">
                <Shoppinglist
                  shoppinglists={this.props.payload}
                  delete={this.onDelete}
                />
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
  const { processed, payload, processing } = state.shoppinglist;
  const { notify } = state;
  return {
    error,
    payload,
    notify,
    processed,
    processing,
    isAuthenticated
  };
}

export default connect(mapStateToProps, {
  login,
  createShoppinglist,
  fetchShoppinglists,
  editShoppinglist,
  deleteShoppinglist
})(DashboardContainer);
