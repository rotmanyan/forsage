import React, { useState } from 'react';
import styled from 'styled-components';
import { validate } from 'wallet-address-validator';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';

import { PurchaseContext } from '../../../contexts/purchaseContext';
import { MANUAL_PROGRESS } from '../../../constants/progress';

import Form from '../../Form/form';
import ExchangeButton from '../../ExchangeButton/exchangeButton';

import NextIconSrc from '../../../images/arrow-right2.svg';
import PrevIconSrc from '../../../images/arrow-left.svg';

const Address = ({ nextHandler }) => {
    const { address, setAddress } = React.useContext(PurchaseContext);
    const [ isValid, setValidity ] = useState(true);
    const intl = useIntl();

    const submitHandler = (e) => {
        e.preventDefault();
        const isValid = address && validate(address, 'ETH');
        setValidity(isValid);
        if (isValid) nextHandler(MANUAL_PROGRESS.CONFIRMATION);
    }

    const prevHandler = () => nextHandler(MANUAL_PROGRESS.AMOUNT);

    const changeHandler = ({ target: { value }}) => {
        setAddress(value);
        setValidity(true);
    }

    return (
        <Form submitHandler={submitHandler} title={<FormattedMessage id='buy.step.address' />}>
            <Labels>
                <Label1>
                    <FormattedMessage id='buy.address.label' />
                </Label1>
                <Label2>
                    <Span><FormattedMessage id='buy.address.network' /></Span>
                    {/* <Span>Network ERC 20</Span> */}
                    {/* <Span>Network</Span>
                    <Span nowrap>ERC 20</Span> */}
                </Label2>
            </Labels>
            <AddressInput
                valid={isValid}
                value={address}
                onChange={changeHandler}
                placeholder={intl.formatMessage({ id: 'buy.address.placeholder' })}
            />
            <Buttons>
                <ExchangeButton onClick={prevHandler} type='button' outlined>
                    <ArrowLeft src={PrevIconSrc} />
                    <FormattedMessage id='back' />
                </ExchangeButton>
                <ExchangeButton type='submit'>
                    <FormattedMessage id='next' />
                    <ArrowRight src={NextIconSrc} />
                </ExchangeButton>
            </Buttons>
        </Form>
    );
}

const Span = styled.span`
    ${({ nowrap }) => (nowrap && 'white-space: nowrap;')};
    &:first-child {
        margin-right: 2px;
    }
`;

const Labels = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 6px;
`;

const Label1 = styled.p`
    font-size: 10px;
    line-height: 10px;
    color: #A2A7AE;
    margin: 0;
`;

const Label2 = styled.p`
    font-size: 10px;
    line-height: 10px;
    color: #7795F8;
    margin: 0;
`;

const AddressInput = styled.input`
    width: 100%;
    background-color: #383D4F;
    outline: none;
    border-radius: 2px;
    font-size: 12px;
    line-height: 12px;
    height: 36px;
    padding: 0 16px;    
    box-sizing: border-box;
    color: #FFFFFF;
    margin-bottom: 30px;
    transition: 0.2s;
    border: 1px solid ${({ valid }) => (
        valid
        ? 'transparent;'
        : '#ff0000a1;'
    )};
    &:focus {
        box-shadow: 0px 0px 4px #505463;
        border-color: #505463;
    }
`;

const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    flex-direction: column;
    button {
        max-width: none;
        margin-top: 20px;
    }
    @media screen and (min-width: 600px) {
        flex-direction: row;
        button {
            max-width: 160px;
            margin-top: 0;
            :first-of-type {
                margin-right: 10px;
            }
            :last-of-type {
                margin-left: 10px;
            }
        }
    }
`;

const ArrowRight = styled.img`
    margin-left: 10px;
    margin-right: -5px;
`;

const ArrowLeft = styled.img`
    margin-left: -5px;
    margin-right: 10px;
`;

export default Address;
