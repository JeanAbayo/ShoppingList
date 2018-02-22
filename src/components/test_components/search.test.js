import React from "react";
import Enzyme, { mount } from "enzyme";
import { Provider } from "react-redux";
import Adapter from "enzyme-adapter-react-16";
import Search from "../search";

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
	const enzymeWrapper = mount(<Search />);

	return { enzymeWrapper };
};

describe("<Search/> component", () => {
	const { enzymeWrapper } = setup();

	it("should render without crashing", () => {
		expect(enzymeWrapper.length).toEqual(1);
	});
});
