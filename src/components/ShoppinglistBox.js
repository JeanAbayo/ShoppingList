import React from "react";
import * as Icon from "react-ionicons";

export const ShoppinglistBox = () => (
  <div className="list-group">
    <a
      href="/"
      className="list-group-item list-group-item-action flex-column align-items-start"
    >
      <div className="d-flex w-100 justify-content-between">
        <h4 className="mb-1">List group item heading</h4>
        <small>3 days ago</small>
      </div>
      <p className="mb-1">
        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget
        risus varius blandit.
      </p>
      <div
        className="btn-toolbar"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <div className="btn-group mr-3" role="group" aria-label="First group">
          <button type="button" className="btn btn-primary">
            <Icon icon="ios-clipboard-outline" fontSize="23px" color="#fff" />
          </button>
        </div>
        <div className="btn-group mr-3" role="group" aria-label="Second group">
          <button type="button" className="btn btn-danger">
            <Icon icon="ios-trash-outline" fontSize="23px" color="#fff" />
          </button>
        </div>
        <div className="btn-group" role="group" aria-label="Third group">
          <button type="button" className="btn btn-info">
            <Icon icon="ios-open-outline" fontSize="23px" color="#fff" />
          </button>
        </div>
      </div>
    </a>
  </div>
);
