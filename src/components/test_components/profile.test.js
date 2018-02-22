import React from "react";
import Enzyme, { mount } from "enzyme";
import { Provider } from "react-redux";
import Adapter from "enzyme-adapter-react-16";
import Profile from "../profile";

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const props = {
    user: { username: "John" },
    email: { email: "johndoe@test.com" }
  };
  const enzymeWrapper = mount(<Profile {...props} />);

  return { enzymeWrapper };
};

describe("<Profile/> component", () => {
  const { enzymeWrapper } = setup();

  it("should render without crashing", () => {
    expect(enzymeWrapper.length).toEqual(1);
  });
});
