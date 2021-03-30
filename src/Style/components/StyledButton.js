import styled from "styled-components";


export const StyledButton = styled.button`
padding: ${props => props.pad || '10px 28px 11px 27px'};
width: ${props => props.width || '140px'};
height: ${props => props.height || '38px'};
font-size: ${props => props.fontSize || '18px'}

`