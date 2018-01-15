import React from "react";
import { Link } from "react-router-dom";

const HomeSidebar = () => (
	<div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 sl_hero_text">
		<h1>Keep track of your shopping</h1>
		<Link to="/join" className="btn btn-primary btn-large">
			Join
		</Link>
	</div>
);

export default HomeSidebar;
