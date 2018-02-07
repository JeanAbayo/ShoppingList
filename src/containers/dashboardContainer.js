import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { ShoppinglistBox } from "../components/shoppinglistBox";
import { PaginationNav } from "../components/paginationNav";
import { SearchBox } from "../components/searchBox";
import CreateShoppinglist from "./createShoppinglist";

import { login } from "../actions/LoginActions";
import { createShoppinglist } from "../actions/ShoppingListsActions";
// Import Error notifier
import Notifier from "./notifier";
import * as Icon from "react-ionicons";

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.handleModalShowClick = this.handleModalShowClick.bind(this);
    this.handleModalCloseClick = this.handleModalCloseClick.bind(this);
    this.state = {
      showModal: false
    };
  }

  handleModalShowClick(e) {
    e.preventDefault();
    this.setState({
      showModal: true
    });
  }

  handleModalCloseClick() {
    this.setState({
      showModal: false
    });
  }

  render() {
    const { showModal } = this.state;
    return (
      <div className="container-fluid">
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
                  <SearchBox />
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
                      <CreateShoppinglist
                        handleModalCloseClick={this.handleModalCloseClick}
                        history={this.props.history}
                      />
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="card-block">
                <ShoppinglistBox />
              </div>
              <div className="row pagination_container">
                <PaginationNav />
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
  const { created, payload, processing } = state.shoppinglist;
  const { notify } = state;
  return {
    error,
    payload,
    notify,
    created,
    processing,
    isAuthenticated
  };
}

export default withRouter(
  connect(mapStateToProps, { login, createShoppinglist })(DashboardContainer)
);
