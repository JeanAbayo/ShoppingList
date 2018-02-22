import React from "react";
import Enzyme, { mount } from "enzyme";
import { Provider } from "react-redux";
import Adapter from "enzyme-adapter-react-16";
import Notifier from "../notifier";

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
	const props = {
		message: "Success"
	};
	const enzymeWrapper = mount(<Notifier {...props} />);

	return { enzymeWrapper };
};

describe("<Notifier/> component", () => {
	const { enzymeWrapper } = setup();

	it("should render without crashing", () => {
		expect(enzymeWrapper.length).toEqual(1);
	});
});
