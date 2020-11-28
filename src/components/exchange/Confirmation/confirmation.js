import React, { useState } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { PurchaseContext } from '../../../contexts/purchaseContext';
import { MANUAL_PROGRESS } from '../../../constants/progress';

import Form from '../../Form/form';
import ExchangeButton from '../../ExchangeButton/exchangeButton';
import NextIconSrc from '../../../images/arrow-right2.svg';

import PrevIconSrc from '../../../images/arrow-left.svg';
import MessageIconSrc from '../../../images/message2.svg';

const emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Confirmation = ({ nextHandler }) => {
    const {
        userCurrency,
        targetCurrency,
        rValue,
        address,
        email,
        setEmail
    } = React.useContext(PurchaseContext);
    const [isValid, setValidity] = useState(true);
    const submitHandler = (e) => {
        e.preventDefault();

        const isEmailValid = email
        ? emailRegexp.test(email)
        : true;

        setValidity(isEmailValid);

        if (isEmailValid) nextHandler(MANUAL_PROGRESS.DEPOSIT);
    }
    const backHandler = () => nextHandler(MANUAL_PROGRESS.ADDRESS);

    const emailChangeHandler = ({ target: { value }}) => {
        setValidity(true);
        setEmail(value);
    }

    const rateValue = userCurrency.rate 
        ? `1 ${targetCurrency.label} ≈ ${userCurrency.rate} ${userCurrency.label}`
        // ? `1 ${userCurrency.label} ≈ ${userCurrency.rate} ${targetCurrency.label}`
        : '';

    const totalValue = `${rValue} ${targetCurrency.label}`;
    // const totalValue = userCurrency.rate
    //     ? `${amount * userCurrency.rate} ${targetCurrency.label}`
    //     : '';

    return (
        <Form submitHandler={submitHandler} title={<FormattedMessage id='buy.confirmation.title' />}>
            <FlexWrapper adaptive>
                <InputWrapper>
                    <Label>
                        <FormattedMessage id='buy.confirmation.label1' />
                    </Label>
                    <StyledInput readOnly disabled value={rateValue} />
                </InputWrapper>
                <InputWrapper>
                    <Label>
                        <FormattedMessage id='buy.confirmation.label2' />
                    </Label>
                    <StyledInput readOnly disabled value={totalValue} />
                </InputWrapper>
            </FlexWrapper>
            <InputWrapper fullWidth>
                <Label>
                    <FormattedMessage id='buy.confirmation.label3' />
                </Label>
                <StyledInput readOnly disabled value={address} />
            </InputWrapper>
            <Extra>
                <span>
                    <FormattedMessage id='buy.confirmation.text1' />
                </span>
            </Extra>
            <FlexWrapper adaptive margin='10px 0 0'>
                <FlexWrapper justify='normal'>
                    <MessageIcon src={MessageIconSrc} />
                    <Text>
                        <FormattedMessage id='buy.confirmation.text2' />
                    </Text>
                </FlexWrapper>
                <InputWrapper fullWidth>
                    <Label>
                        <FormattedMessage id='buy.confirmation.label4' />
                    </Label>
                    <StyledInput valid={isValid} value={email} onChange={emailChangeHandler}/>
                </InputWrapper>
            </FlexWrapper>
            <Buttons>
                <StyledButton onClick={backHandler} type='button' outlined>
                    <ArrowLeft src={PrevIconSrc} />
                    <FormattedMessage id='back' />
                </StyledButton>
                <StyledButton type='submit'>
                    <FormattedMessage id='next' />
                    <ArrowRight src={NextIconSrc} />
                </StyledButton>
            </Buttons>
        </Form>
    );
};

const StyledButton = styled(ExchangeButton)`
    @media (max-width: 650px) {
        &:first-of-type {
            margin-right: 10px
        }
        &:left-of-type {
            margin-left: 10px
        }
    }
`;

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: ${({ fullWidth }) => (fullWidth ? '100%' : '50%')};
    @media (max-width: 800px) {
        width: 100%;
    }
`;

const Label = styled.p`
    font-size: 10px;
    line-height: 10px;
    color: #A2A7AE;
    margin: 0 0 8px;
`;

const StyledInput = styled.input`
    width: 100%;
    outline: none;
    background-color: #383D4F;
    border-radius: 2px;
    font-size: 12px;
    line-height: 12px;
    height: 36px;
    padding: 0 16px;    
    box-sizing: border-box;
    color: #FFFFFF;
    margin-bottom: 30px;
    transition: 0.2s;
    border: 1px solid ${({ valid = true }) => (
        valid
        ? 'transparent;'
        : '#ff0000a1;'
    )};
    &:focus {
        box-shadow: 0px 0px 4px #505463;
        border-color: #505463;
    }
`;

const Extra = styled.p`
    width: 100%;
    text-align: center;
    margin: 0;
    font-size: 10px;
    line-height: 10px;
    text-align: center;
    color: #A2A7AE;
    position: relative;
    z-index: 10;
    &:before {
        position: absolute;
        content: '';
        width: 33%;
        height: 1px;
        background-color: #A2A7AE;
        left: 0;
        top: 50%;
        z-index: -1;
    }
    &:after {
        position: absolute;
        content: '';
        width: 33%;
        height: 1px;
        background-color: #A2A7AE;
        right: 0;
        top: 50%;
        z-index: -1;
    }
    & > span {
        background: #282D40;
        padding: 0 10px;
    }
`;

const FlexWrapper = styled.div`
    display: flex;
    justify-content: ${({ justify = 'space-between' }) => justify};
    width: 100%;
    margin: ${({ margin = '0' }) => margin};
    & > div:first-of-type {
        margin-right: 10px;
    }
    & > div:last-of-type {
        margin-left: 10px;
    }
    @media (max-width: 800px) {
        & > div:first-of-type {
            margin-right: 0;
        }
        & > div:last-of-type {
            margin-left: 0;
        }
        ${({ adaptive }) => (
            adaptive
            ? 'flex-direction: column;'
            : ''
        )}
    }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  button {
    max-width: none;
    margin-top: 20px;
  }
  @media screen and (min-width: 600px) {
    flex-direction: row;
    button {
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

const MessageIcon = styled.img`
    margin-right: 10px;
    width: 16px;
    height: 16px;
    @media (max-width: 800px) {
        margin-top: auto;
        margin-bottom: auto;
    }
`;

const Text = styled.p`
    font-size: 12px;
    line-height: 20px;
    color: #A2A7AE;
`;

export default Confirmation;
