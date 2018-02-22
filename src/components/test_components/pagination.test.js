import React from "react";
import Enzyme, { mount } from "enzyme";
import { Provider } from "react-redux";
import Adapter from "enzyme-adapter-react-16";
import Pagination from "../pagination";

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
	const props = {
		paginate: {
			has_next: true,
			has_prev: true,
			prev_page_number: 2,
			next_page_number: 3,
			total_items: 6,
			number_of_pages: 7
		}
	};
	const enzymeWrapper = mount(<Pagination {...props} />);

	return { enzymeWrapper };
};

describe("<Pagination/> component", () => {
	const { enzymeWrapper } = setup();

	it("should render without crashing", () => {
		expect(enzymeWrapper.length).toEqual(1);
	});
});
