import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

class ProtectedRoute extends Component {
	render() {
		const {
			isAuthenticated,
			component: Component,
			path,
			...props
		} = this.props;

		return (
			<Route
				{...props}
				render={props =>
					isAuthenticated ? (
						<Component {...props} />
					) : (
						<Redirect
							to={{
								pathname: "/login",
								state: { from: props.location }
							}}
						/>
					)
				}
			/>
		);
	}
}

function mapStateToProps(state) {
	const { isAuthenticated } = state.login;
	return {
		isAuthenticated
	};
}

export default connect(mapStateToProps, {})(ProtectedRoute);
