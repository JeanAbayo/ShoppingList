import React, { Component } from "react";
import { Link } from "react-router-dom";

class SearchResults extends Component {
	render() {
		return (
			<div
				className="display_results"
				style={
					!this.props.display
						? { display: "none" }
						: { display: "block" }
				}
			>
				{this.props.results ? (
					<div className="list-group">
						{this.props.results.length === 0 ||
						this.props.results.message ? (
							<p>No shoppinglists found...</p>
						) : (
							this.props.results["search_results"].map(result => (
								<Link
									to={`/shoppinglists/${result.id}`}
									className="list-group-item list-group-item-action"
									key={result.id}
								>
									{result.title}
								</Link>
							))
						)}
					</div>
				) : (
					<p>Start typing to search...</p>
				)}
			</div>
		);
	}
}

export default SearchResults;
