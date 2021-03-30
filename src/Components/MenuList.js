import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { StyledDiv } from '../Style/components/MenuListStyled';
import { IoIosArrowForward } from 'react-icons/io';

class MenuList extends Component {
  state = {
    items: ['СУПЫ', 'ХАЧАПУРИ', 'ХАЧАПУРИ', 'ХАЧАПУРИ', 'ХАЧАПУРИ']
  }
  render() {
    const { items } = this.state;
    return (
      <StyledDiv>
        {items.map(item => (<a href='#'>{item}</a>))}
        <IoIosArrowForward className='arrow__right' />
      </StyledDiv>
    );
  }
}

export default MenuList;
