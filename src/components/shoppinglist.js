import React, { Component } from "react";
import { Link } from "react-router-dom";

import * as Icon from "react-ionicons";

class Shoppinglist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  editShoppinglist = event => {
    event.preventDefault();

    const toEdit = {
      title: event.currentTarget.dataset.title,
      description: event.currentTarget.dataset.description,
      id: event.currentTarget.dataset.id
    };
    this.props.edit(toEdit);
  };
  deleteShoppinglist = event => {
    event.preventDefault();
    const toDelete = event.currentTarget.dataset.id;
    this.props.delete(toDelete);
  };
  addItem = event => {
    event.preventDefault();
    const item = event.currentTarget.dataset.id;
    this.props.toAddOn(item);
  };

  render() {
    const content = this.props.data[0].shoppinglists;
    return (
      <div>
        {content.map(shoppinglist => (
          <div className="list-group" key={shoppinglist.id}>
            <Link
              to={`/shoppinglists/${shoppinglist.id}`}
              className="list-group-item list-group-item-action flex-column align-items-start"
            >
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
                    data-title={shoppinglist.title}
                    data-description={shoppinglist.description}
                    data-id={shoppinglist.id}
                    onClick={this.editShoppinglist}
                  >
                    <Icon
                      icon="ios-create-outline"
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
                  <button
                    type="button"
                    className="btn btn-info"
                    data-id={shoppinglist.id}
                    onClick={this.addItem}
                  >
                    <Icon
                      icon="ios-open-outline"
                      fontSize="23px"
                      color="#fff"
                    />
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Shoppinglist;
