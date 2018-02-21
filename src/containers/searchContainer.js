import React, { Component } from "react";
import { connect } from "react-redux";
import Search from "../components/search";

import { search } from "../actions/SearchActions";

class SearchContainer extends Component {
  doSearch = q => {
    if (q.length > 0) {
      this.props.search(q);
    }
    this.props.data(this.props.results);
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

export default connect(mapStateToProps, { search })(SearchContainer);
