import React from "react";
import Enzyme, { mount } from "enzyme";
import { Provider } from "react-redux";
import Adapter from "enzyme-adapter-react-16";
import Items from "../items";

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
	const props = {
		page: true,
		results: { item_title: "Tomatoes" },
		data: { item_title: "Tomatoes" }
	};
	const enzymeWrapper = mount(<Items {...props} />);

	return { enzymeWrapper };
};

describe("<Items/> component", () => {
	const { enzymeWrapper } = setup();

	it("should render without crashing", () => {
		expect(enzymeWrapper.length).toEqual(1);
	});
});
