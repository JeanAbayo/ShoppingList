import React, { Component } from "react";
import { Link } from "react-router-dom";

class SearchResults extends Component {
	constructor(props) {
		super(props);
		this.setId = this.setId.bind(this);
	}

	setId = event => {
		const toSearch = {
			title: event.currentTarget.dataset.title,
			description: event.currentTarget.dataset.description,
			id: event.currentTarget.dataset.id
		};
		this.props.selectedSearchId(toSearch);
	};

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
									key={result.title}
									data-title={result.title}
									data-description={result.description}
									data-id={result.id}
									onClick={this.setId}
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
