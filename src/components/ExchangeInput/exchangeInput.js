import React from 'react';
import styled from 'styled-components';
import Select, { components } from 'react-select';
import DownIcon from '../../images/dropdown.svg';

const DropdownIndicator = (props) => {
    return (
        <components.DropdownIndicator {...props}>
            <img src={DownIcon} />
        </components.DropdownIndicator>
    );
};

const Option = (props) => {
    const { label, options } = props;

    const option = options.find(option => option.label === label);

    const icon = (option && option.icon)
        ? <OptionIcon src={option.icon} />
        : null;

    return (
        <components.Option {...props}>
            {icon}
            { label }
        </components.Option>
    );
};

const OptionIcon = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 8px;
`;

const ExchangeInput = ({
    isValid = true,
    amount,
    amountChangeHandler,
    currency,
    currencies,
    currencyChangeHandler,
    disabledSelect,
    disabledInput
}) => {
    const pattern = new RegExp(/^[+]?([0-9]+(?:[.][0-9]*)?|\.[0-9]+)$/);
    // const pattern = new RegExp(/^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/);
    const pattern2 = new RegExp(/^0[0-9]+$/);

    const changeHandler = ({ target: { value }}) => {
        let newValue = value;
        let isValid = true;

        if (pattern2.test(value)) {
            newValue = '0.' + value.slice(1, value.length);
        }

        if (newValue) {
            isValid &= pattern.test(newValue);
        }

        if (isValid && amountChangeHandler) amountChangeHandler(newValue);
    }

    return (
        <Container isValid={isValid} isDisabled={disabledSelect}>
            <UserInput value={amount} onChange={changeHandler} disabled={disabledInput} />
            <Output>~${amount}</Output>
            <StyledSelect
                // menuIsOpen
                isDisabled={disabledSelect}
                value={currency}
                onChange={currencyChangeHandler}
                classNamePrefix='Select'
                options={currencies}
                components={{ Option, DropdownIndicator }}
            />

        </Container>
    );
};

const mediaThreshold = 500; //px

const Container = styled.div`
    background: #383D4F;
    box-sizing: border-box;
    border-radius: 2px;
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 36px;
    border: 1px solid ${({ isValid }) => (
        isValid
        ? 'transparent;'
        : '#ff0000a1;'
    )};
    transition: 0.2s;
    &:focus-within {
        /* box-shadow: 0px 0px 4px #505463;
        border-color: #505463; */
    }
    @media (max-width: ${mediaThreshold}px) {
        flex-direction: column;
        border: none;
        background-color: transparent;
        box-shadow: none;
        &:focus-within {
            background-color: transparent;
            box-shadow: none;
        }
    }
`;

const UserInput = styled.input`
    width: 100%;
    border: none;
    // border: 1px solid #505463;
    color: white;
    background-color: transparent;
    padding: 16px 4px 16px 16px;
    height: 36px;
    box-sizing: border-box;
    transition: 0.2s;
    &:focus {
        outline: none;
    }
    @media (max-width: ${mediaThreshold}px) {
        background: #383D4F;
        border: 1px solid transparent;
        box-sizing: border-box;
        border-radius: 2px;
        &:focus {
            border-color: #505463;
            box-shadow: 0px 0px 4px #505463;
        }
    }
`;

const Output = styled.output`
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 80px;
    padding-right: 10px;
    font-size: 10px;
    line-height: 14px;
    text-align: right;
    text-transform: uppercase;
    color: #A2A7AE;
    text-align: center;
    display: none;
`;

const StyledSelect = styled(Select)`
    min-width: 128px;
    outline: none !important;
    border: none !important;
    & .Select__control {
        background-color: #505463;
        border-radius: 0;
        border: none;
    };
    & .Select__indicator-separator {
        display: none
    };
    & .Select__menu-list {
        background-color: #505463;
    };
    & .Select__option {
        color: white;
        background-color: transparent;
        white-space: nowrap;
    }
    & .Select__option:hover, & .Select__option:focus  {
        background-color: #383D4F;
    }
    & .Select__single-value {
        text-overflow: clip;
        color: white;
    }
    & .Select__control--is-disabled .Select__single-value {
        color: #A2A7AE;
    }
    & .Select__option {
        display: flex;
        align-items: center;
        font-weight: bold;
        font-size: 12px;
        line-height: 12px;
        color: #A2A7AE;
    }
    & .Select__option:hover {
        color: #7795F8;
    }
    & .Select__value-container {
        font-weight: bold;
        font-size: 12px;
        line-height: 12px;
        /* identical to box height, or 100% */

        text-align: center;
        text-transform: uppercase;

        /* 07 */

        color: #FFFFFF;
    }
    & .Select__indicator {
        padding: 6px;
    }
    & .Select__control--is-disabled .Select__indicators {
        display: none;
    }
    /* & .Select__control--is-disabled .Select__value-container {
        justify-content: center;
    } */
    & .Select__menu-list {
        // margin-left: -10px;
        min-width: 110px;
        box-sizing: content-box;
        max-height: 200px;
    }
    & .Select__menu-list::-webkit-scrollbar {
        width: 5px;
    }
    & .Select__menu-list::-webkit-scrollbar-track {
        border-radius: 10px;
    }
    & .Select__menu-list::-webkit-scrollbar-thumb {
        background : rgba(255,255,255,0.5);
        border-radius: 10px;
        box-shadow:  0 0 6px rgba(0, 0, 0, 0.5);
    }
    @media (max-width: ${mediaThreshold}px) {
        width: 100%;
        margin-top: 20px;
        & .Select__menu-list {
            margin-left: 0;
        }
    }
`;

export default ExchangeInput;
