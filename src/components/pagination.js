import React, { Component } from "react";

class Pagination extends Component {
  switchPage = e => {
    e.preventDefault();
    const { page } = e.currentTarget.dataset;
    this.props.onPageChange(page);
  };
  render() {
    const paginate = this.props.paginate;
    var renderedPages = [];
    for (var i = 1; i <= paginate.number_of_pages; i++) {
      renderedPages.push(
        <li className="page-item" key={i}>
          <button className="page-link" data-page={i} onClick={this.switchPage}>
            {i}
          </button>
        </li>
      );
    }
    return (
      <div className="col col-12 align-self-center">
        <nav aria-label="...">
          <ul className="pagination pagination-lg">
            <li
              className={
                !paginate.has_prev ? "page-item disabled" : "page-item"
              }
            >
              <button
                className="page-link"
                data-page={paginate.prev_page_number}
                tabIndex="-1"
                onClick={this.switchPage}
              >
                Previous
              </button>
            </li>
            {renderedPages}
            <li
              className={
                !paginate.has_next ? "page-item disabled" : "page-item"
              }
            >
              <button
                className="page-link"
                data-page={paginate.next_page_number}
                onClick={this.switchPage}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Pagination;
