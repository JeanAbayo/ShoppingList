// This script handles different micro components to be used by real components
import React from "react";
import * as Icon from "react-ionicons";
import styled from "styled-components";

const Div = styled.div`
  margin: 40px;
  border: 5px outset pink;
  &:hover {
    background-color: yellow;
  }
`;

const Paragraph = styled.p`
  font-size: 15px;
  text-align: center;
`;

const OutsetBox = () => (
  <Div>
    <Paragraph>Get started with styled-components </Paragraph>
  </Div>
);
class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Icon: this.props.icon,
      Type: this.props.type,
      Placeholder: this.props.placeholder,
      Name: this.props.name
    };
  }

  componentDidMount() {
    // sth I don't know
  }

  render() {
    return (
      <div className="input-group">
        <span className="input-group-addon" aria-hidden="true" />
        <Icon icon={this.state.Icon} fontSize="33px" color="#fff" />
        <input
          className="form-control"
          placeholder={this.state.Placeholder}
          type={this.state.Type}
          name={this.state.Name}
        />
      </div>
    );
  }
}

export { FormInput, OutsetBox };
