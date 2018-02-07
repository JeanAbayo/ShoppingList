import React from "react";

export const PaginationNav = () => (
  <div class="col col-12 align-self-center">
    <nav aria-label="...">
      <ul class="pagination pagination-lg">
        <li class="page-item disabled">
          <a class="page-link" href="#" tabindex="-1">
            Previous
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            1
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            2
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            3
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  </div>
);
