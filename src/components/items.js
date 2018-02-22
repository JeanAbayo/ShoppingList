import React, { Component } from "react";

import * as Icon from "react-ionicons";
import Loader from "../components/loader";

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: ""
    };
  }

  editItem = event => {
    event.preventDefault();
    const toEdit = event.currentTarget.dataset.item;
    this.props.edit(toEdit);
  };

  deleteItem = event => {
    event.preventDefault();
    const toDelete = event.currentTarget.dataset.id;
    this.props.delete(toDelete);
  };

  render() {
    let dataObject = [];
    let items = [];
    if (this.props.data.length > 0) {
      if (this.props.page) {
        dataObject = this.props.results;
        items = dataObject["search_results"];
      } else {
        dataObject = this.props.data;
        items = this.props.data[0].items;
      }
      if (this.props.page && this.props.results.length === 0) {
        return <h2>Start typing to search items ....</h2>;
      }
      if (this.props.page && this.props.results.message) {
        return <h2>{this.props.results.message}</h2>;
      }
      return items.map(item => (
        <div className="list-group" key={item.item_id}>
          <div className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
              <h4 className="mb-1">{item.item_title}</h4>
              <small>{item.date_created.slice(0, 16)}</small>
            </div>
            <p className="mb-1">{item.item_description}</p>
            <div
              className="btn-toolbar"
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
              <div
                className="btn-group mr-3"
                role="group"
                aria-label="First group"
              >
                <button
                  type="button"
                  className="btn btn-primary"
                  data-item={JSON.stringify(item)}
                  onClick={this.editItem}
                >
                  <Icon
                    icon="ios-clipboard-outline"
                    fontSize="23px"
                    color="#fff"
                  />
                </button>
              </div>
              <div
                className="btn-group mr-3"
                role="group"
                aria-label="Second group"
              >
                <button
                  type="button"
                  className="btn btn-danger"
                  data-id={item.item_id}
                  onClick={this.deleteItem}
                >
                  <Icon icon="ios-trash-outline" fontSize="23px" color="#fff" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ));
    } else {
      return <Loader />;
    }
  }
}

export default Items;
