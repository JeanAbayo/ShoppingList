import React, { Component } from "react";
import { connect } from "react-redux";
import { Search } from "../components/search";

import { search } from "../actions/SearchActions";

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const value = event.target.value;
    this.props.search(value);
  }

  render() {
    return (
      <div className="searchBar">
        <Search />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { searching, results, complete } = state.search;
  const { notify } = state;
  return {
    searching,
    results,
    complete,
    notify
  };
}

export default connect(mapStateToProps, { search })(SearchContainer);
