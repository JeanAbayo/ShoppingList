import React from "react";

const Spinner = require("react-spinkit");

const Loader = () => (
  <div className="spinner">
    <Spinner name="ball-spin-fade-loader" color="#ce6d12" />
  </div>
);

export default Loader;
