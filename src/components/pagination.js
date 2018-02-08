import React from "react";

export const Pagination = props => (
  <div className="col col-12 align-self-center">
    <nav aria-label="...">
      <ul className="pagination pagination-lg">
        <li className="page-item disabled">
          <a
            className="page-link"
            href="/"
            tabIndex="-1"
            onClick={this.switchPage}
          >
            Previous
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/">
            Next
          </a>
        </li>
      </ul>
    </nav>
  </div>
);
