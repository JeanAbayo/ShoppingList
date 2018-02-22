import React from "react";
import Enzyme, { mount } from "enzyme";
import { Provider } from "react-redux";
import Adapter from "enzyme-adapter-react-16";
import Loader from "../loader";

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
    const enzymeWrapper = mount(<Loader />);

    return { enzymeWrapper };
};

describe("<Loader/> component", () => {
    const { enzymeWrapper } = setup();

    it("should render without crashing", () => {
        expect(enzymeWrapper.length).toEqual(1);
    });
});
