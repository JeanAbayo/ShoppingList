import React, { Component } from "react";

class Search extends Component {
	searchQuery = event => {
		const value = event.target.value;
		this.props.searchq(value);
	};
	render() {
		return (
			<div className="form-group row search_box">
				<div className="col-8">
					<input
						className="form-control"
						type="search"
						placeholder="Search ..."
						id="example-search-input"
						name="search"
						onChange={this.searchQuery}
					/>
				</div>
			</div>
		);
	}
}

export default Search;
