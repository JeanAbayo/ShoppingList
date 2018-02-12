import React, { Component } from "react";
import { Link } from "react-router-dom";

import * as Icon from "react-ionicons";

class Items extends Component {
  render() {
    {
      console.log("=========", this.props);
    }
    return this.props.data.map(item => (
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
                data-id={item.id}
                onClick={this.edititem}
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
                data-id={item.id}
                onClick={this.deleteitem}
              >
                <Icon icon="ios-trash-outline" fontSize="23px" color="#fff" />
              </button>
            </div>
          </div>
        </div>
      </div>
    ));
  }
}

export default Items;
