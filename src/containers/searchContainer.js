import React, { Component } from "react";
import { connect } from "react-redux";
import Search from "../components/search";

import { search, searchItem } from "../actions/SearchActions";

class SearchContainer extends Component {
  doSearch = q => {
    if (q.length > 0) {
      this.props.page
        ? this.props.searchItem(q, this.props.page * 1)
        : this.props.search(q);
    }
    this.props.page
      ? this.props.itemData(this.props.results)
      : this.props.data(this.props.results);
  };

  render() {
    return (
      <Search
        searchq={this.doSearch}
        deepTriggerSearch={this.props.triggerSearch}
        deepHideSearch={this.props.hideSearch}
      />
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

export default connect(mapStateToProps, { search, searchItem })(
  SearchContainer
);
