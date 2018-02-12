import React, { Component } from "react";
import { connect } from "react-redux";
import Items from "../components/items";
// Import Error notifier
import Notifier from "../components/notifier";
import Loader from "../components/loader";

import { login } from "../actions/LoginActions";
import { updateItem, deleteItem, fetchAllItems } from "../actions/ItemsActions";

import * as Icon from "react-ionicons";

class ItemsContainer extends Component {
  constructor(props) {
    super(props);
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
    this.props.fetchAllItems(this.props.shoppinglist);
  }

  componentDidUpdate(prevProps) {
    if (this.props.processed) {
      // this.props.fetchShoppinglists(this.state.page, this.state.per_page);
    }
  }

  render() {
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
                  <h2 className="card-header">Items on shoppinglist</h2>
                </div>
              </div>
              <div className="card-block">
                {console.log("Is it empty ", this.props.empty)}
                {this.props.empty ? (
                  <h2>There are no items for now</h2>
                ) : (
                  <Items data={this.props.items} />
                )}
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
  const { processed, payload, processing, empty, items } = state.items;
  const { notify } = state;
  return {
    error,
    payload,
    items,
    notify,
    empty,
    processed,
    processing,
    isAuthenticated
  };
}

export default connect(mapStateToProps, {
  updateItem,
  deleteItem,
  fetchAllItems
})(ItemsContainer);
