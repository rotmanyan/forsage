import React, { useState } from 'react';
import styled from 'styled-components';
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl';

import { PurchaseContext } from '../../../contexts/purchaseContext';
import useCurrencies from '../../../hooks/useCurrencies';
import { MANUAL_PROGRESS } from '../../../constants/progress';

import ExchangeInput from '../../ExchangeInput/exchangeInput';
import Form from '../../Form/form';
import ExchangeButton from '../../ExchangeButton/exchangeButton';

import ArrowSrc from '../../../images/arrow-right2.svg';
import ArrowLeftIcon from '../../../images/arrow-left.svg';

const Amount = ({ nextHandler }) => {
  const {
    amount,
    setAmount,
    rValue,
    setRvalue,
    userCurrency,
    setUserCurrency,
    targetCurrency,
    setTargetCurrency,
    goToPaymentSelect
  } = React.useContext(PurchaseContext);
  console.log({ userCurrency })
  const intl = useIntl();
  const { loaded, currencies: { USER_CURRENCIES, CURRENCIES } } = useCurrencies();
  const [ isValid, setValidity ] = useState(true);

  const amountChangeHandler = value => {
    setValidity(true);
    setAmount(value);
  }

  const rValueChangeHandler = value => {
    setValidity(true);
    setRvalue(value);
  }

  const submitHandler = e => {
    e.preventDefault();
    const valid = amount > 0;
    setValidity(valid);
    if (valid) nextHandler(MANUAL_PROGRESS.ADDRESS);
  }

  return (
    <StyledForm submitHandler={submitHandler} title = {intl.formatMessage({ id: "buy.amount.title" })}>
      <InputsContainer>
        <InputWrapper>
          <Label color = 'red'>
            <FormattedMessage id='buy.amount.label1' />
          </Label>
          <ExchangeInput
            amount={amount}
            amountChangeHandler={amountChangeHandler}
            currency={userCurrency}
            currencies={USER_CURRENCIES}
            currencyChangeHandler={setUserCurrency}
            isValid={isValid} />
        </InputWrapper>
        <InputWrapper>
          <Label color = 'green'>
            <FormattedMessage id='buy.amount.label2' />
          </Label>
          <ExchangeInput
            amount={rValue}
            amountChangeHandler={rValueChangeHandler}
            currency={targetCurrency}
            currencies={CURRENCIES}
            currencyChangeHandler={setTargetCurrency}
            disabledInput={!userCurrency.rate}
            disabledSelect />
        </InputWrapper>
      </InputsContainer>
      <RateContainer>
        {
          userCurrency.rate && <>
            <span>{ +userCurrency.rate.toFixed(6) }</span>
            {userCurrency.label} = <span> 1 </span>
            {targetCurrency.label}
          </>
        }
      </RateContainer>
      <Buttons>
        <PrevButton onClick={goToPaymentSelect}>
          <ArrowLeft src={ArrowLeftIcon} />
          {intl.formatMessage({ id: 'back' })}
        </PrevButton>
        <StyledButton disabled={!loaded} type='submit'>
          {intl.formatMessage({ id: 'buy' })}
          <ArrowRight src={ArrowSrc} />
        </StyledButton>
      </Buttons>
    </StyledForm>
  );
};

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

const PrevButton = styled(ExchangeButton)`
  background-color: transparent;
  border: 1px solid #A2A7AE;
  border-radius: 4px;
`;

const ArrowLeft = styled.img`
  margin-right: 5px;
  margin-left: -5px;
`;
const RateContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    color: #A2A7AE;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: 1px;
    margin: 20px 0 40px;

    & span {
        margin: 0 2px;
        font-weight: bold;
    }
`;

const StyledForm = styled(Form)`
    max-width: 464px;
`;

const StyledButton = styled(ExchangeButton)`
    @media (max-width: 900px) {
        width: 100%;
        margin-top: 120px;
    }
    :disabled {
        background: #505463;
        opacity: 0.4;
        cursor: auto;
    }
`;

const InputsContainer = styled.div `
    display: flex;
    width: 100%;
    box-sizing: border-box;
    flex-direction: column;
`;

const InputWrapper = styled.div `
    padding: 10px;
    display: flex;
    flex-direction: column;
`;

const Label = styled.p `
    font-size: 10px;
    line-height: 10px;
    color: ${({ color }) => (color === 'green' ? '#1BB978' : '#EB5757' )}   ;
`;

const ArrowRight = styled.img `
    margin-left: 10px;
    margin-right: -5px;
`;

export default Amount;