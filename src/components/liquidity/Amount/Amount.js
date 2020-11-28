import React from 'react';
import styled from 'styled-components';

import useCurrencies from '../../../hooks/useCurrencies';
import { LiquidityContext } from '../../../contexts/liquidityContext';

import Form from '../../Form/form';
import ExchangeInput from '../../ExchangeInput/exchangeInput';
import ExchangeButton from '../../ExchangeButton/exchangeButton';
import ArrowRightSrc from '../../../images/arrow-right2.svg';
import { navigate } from 'gatsby-plugin-intl';

const Amount = () => {
  const { currencies: { USER_CURRENCIES } } = useCurrencies();

  const {
    amount,
    setAmount,
    setUserCurrency,
    userCurrency,
    targetCurrency = {}
  } = React.useContext(LiquidityContext);

  const walletConnected = false;

  const submitHandler = (e) => {
    e.preventDefault();
    if (walletConnected) {

    } else {
      navigate('/connect_wallet', { state: { from: 'liquidity' } });
    }
  }

  return (
    <StyledForm
      title='Add liqudity'
      submitHandler={submitHandler}>
      <InputWrapper>
        <Label color='green'>You send</Label>
        <ExchangeInput
          amount={amount}
          amountChangeHandler={setAmount}
          currency={userCurrency}
          currencies={USER_CURRENCIES}
          currencyChangeHandler={setUserCurrency}
        />
      </InputWrapper>
      <Rate>
        {
            userCurrency.rate &&
            <>
                <span>{ userCurrency.rate }</span>
                {userCurrency.label} =
                <span> 1 </span>
                {targetCurrency.label}
            </>
        }
      </Rate>
      <ExchangeButton type='submit'>
          {
            walletConnected
            ? 'Enter an amount'
            : <>
              Connect wallet
              <ArrowRight src={ArrowRightSrc} />
            </>
          }
      </ExchangeButton>
    </StyledForm>
  );
};

const ArrowRight = styled.img`
    margin-left: 10px;
    margin-right: -5px;
`;

const StyledForm = styled(Form)`
  max-width: 464px;
  > div {
    padding-top: 20px;
  }
`;

const InputWrapper = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
`;

const Label = styled.p`
    font-size: 10px;
    line-height: 10px;
    color: ${({ color }) => (color === 'green' ? '#1BB978' : '#EB5757' )}   ;
`;

const Rate = styled.p`
    margin: 20px 0 32px;
    font-size: 0.75rem;
    line-height: 0.625rem;
    color: #A2A7AE;

    & span {
        margin: 0 2px;
        font-weight: bold;
    }
`;

export default Amount;
