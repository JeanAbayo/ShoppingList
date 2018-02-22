import React from "react";
import Enzyme, { mount } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Adapter from "enzyme-adapter-react-16";
import SearchResults from "../searchResults";

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
	const props = {
		display: true,
		results: {
			search_results: [{ title: "Tomato" }]
		}
	};
	const enzymeWrapper = mount(
		<BrowserRouter>
			<SearchResults {...props} />
		</BrowserRouter>
	);

	return { enzymeWrapper };
};

describe("<SearchResults/> component", () => {
	const { enzymeWrapper } = setup();

	it("should render without crashing", () => {
		expect(enzymeWrapper.length).toEqual(1);
	});
});
