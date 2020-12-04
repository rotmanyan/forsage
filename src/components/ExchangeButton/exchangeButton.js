import React from 'react';
import styled from 'styled-components';

const ExchangeButton = (props) => <StyledButton {...props}/>;

const StyledButton = styled.button`
    outline: none;
    width: 100%;
    max-width: 160px;
    min-width: 117px;
    min-height: 36px;
    padding: 10px 16px;
    margin: 0;
    font-weight: bold;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.2s;
    justify-content: center;
    display: flex;
    align-items: center;

    border: ${({ outlined }) => (outlined ? '1px solid #A2A7AE' : 'none')};
    background-color: ${({ outlined, error }) => {
        if (error) return '#FF5454';
        if (outlined) return 'transparent';
        return '#1BB978';
    }};

    font-size: 10px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #FFFFFF;
    &:hover {
        opacity: 0.7;
    }
`;

export default ExchangeButton;
