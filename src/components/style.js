import styled from "styled-components";


export const Button = styled.button`
    width: 342px;
    height: 68px;
    background: ${ props => props.isBack ? 'rgba(255, 255, 255, 0.14)' : '#D93856' };
    margin-top: ${props => props.isBack ? '70px' : '42px'};

    font-style: normal;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    color: #FFFFFF;
    border: none;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }
`
