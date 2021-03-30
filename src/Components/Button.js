import React, { Component } from 'react';
import '../Style/components/Button.css';
import { StyledButton } from '../Style/components/StyledButton';

class Button extends Component {
  render() {
    const { text } = this.props;
    return (
      <StyledButton {...this.props}>
        {text}
      </StyledButton>
    );
  }
}

export default Button;
