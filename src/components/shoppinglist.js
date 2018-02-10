import React, { Component } from "react";

import * as Icon from "react-ionicons";

class Shoppinglist extends Component {
  editShoppinglist = event => {
    const toEdit = event.currentTarget.dataset.id;
    this.props.edit(toEdit);
  };
  deleteShoppinglist = event => {
    const toDelete = event.currentTarget.dataset.id;
    this.props.delete(toDelete);
  };
  render() {
    return (
      <div>
        {this.props.data.map(shoppinglist => (
          <div className="list-group" key={shoppinglist.id}>
            <a className="list-group-item list-group-item-action flex-column align-items-start">
              <div className="d-flex w-100 justify-content-between">
                <h4 className="mb-1">{shoppinglist.title}</h4>
                <small>{shoppinglist.date_created.slice(0, 16)}</small>
              </div>
              <p className="mb-1">{shoppinglist.description}</p>
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
                    data-id={shoppinglist.id}
                    onClick={this.editShoppinglist}
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
                    data-id={shoppinglist.id}
                    onClick={this.deleteShoppinglist}
                  >
                    <Icon
                      icon="ios-trash-outline"
                      fontSize="23px"
                      color="#fff"
                    />
                  </button>
                </div>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Third group"
                >
                  <button type="button" className="btn btn-info">
                    <Icon
                      icon="ios-open-outline"
                      fontSize="23px"
                      color="#fff"
                    />
                  </button>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    );
  }
}

export default Shoppinglist;
