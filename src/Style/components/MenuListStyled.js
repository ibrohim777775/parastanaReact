import styled from "styled-components";

export const StyledDiv = styled.div`
display: flex;
justify-content: space-between;
padding: 25px 60px 16px 0;
position: relative;
  & a{
    font-size: 23px;
    line-height: 28px;
    text-transform: uppercase;
    color: #4F4F4F;
    cursor: pointer;
  }
  & .arrow__right{
    position: absolute;
    right: 0;
    top: 23px;
    cursor: pointer;
    // z-index: 3;
    font-size: 30px;
    color: #00AC4E;
  }
`