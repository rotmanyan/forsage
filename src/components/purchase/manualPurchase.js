import React, { useState, useEffect, useReducer } from 'react';
import styled from 'styled-components';

// import withWallet from '../../hocs/withWallet';
import { PurchaseContext } from '../../contexts/purchaseContext';
import { TRANSACTION_STATUS } from '../../constants/transactionStatus';
import { MANUAL_PROGRESS, MANUAL_PROGRESS_TITLES } from '../../constants/progress';
import { EXCHANGE_LINKS } from '../../constants/links';
import useCurrencies from '../../hooks/useCurrencies';

import Layout from '../layout';
import Progress from '../Progress/progress';
import ContentWrapper from '../ContentWrapper/contentWrapper';

import Amount from '../exchange/Amount/manualAmount';
import Address from '../exchange/Address/address';
import Confirmation from '../exchange/Confirmation/confirmation';
import Deposit from '../exchange/Deposit/deposit';
import Info from '../exchange/Info/info';
import { AddLiquidityButton } from '../Header/buttons';

import EmailIcon from  '../../images/support-email.svg';

function floor(value){
    const precision = 100_000_000;
    return Math.floor(value * precision) / precision;
}

const initialState = {
  amount: 0,
  rValue: 0,
  address: '',
  email: '',
  userCurrency: null,
  targetCurrency: null,
  transactionStatus: TRANSACTION_STATUS.OK
}

const ACTIONS = {
  SET_AMOUNT: 'SET_AMOUNT',
  SET_RVALUE: 'SET_RVALUE',
  SET_ADDRESS: 'SET_ADDRESS',
  SET_EMAIL: 'SET_EMAIL', 
  SET_USER_CURRENCY: 'SET_USER_CURRENCY',
  SET_TARGET_CURRENCY: 'SET_TARGET_CURRENCY',
  SET_TRANSACTION_STATUS: 'SET_TRANSACTION_STATUS',
  RESET: 'RESET',
};

const setAmount = (value) => ({ type: ACTIONS.SET_AMOUNT, payload: value });
const setRvalue = (value) => ({ type: ACTIONS.SET_RVALUE, payload: value });
const setAddress = (value) => ({ type: ACTIONS.SET_ADDRESS, payload: value });
const setEmail = (value) => ({ type: ACTIONS.SET_EMAIL, payload: value });
const setUserCurrency = (value) => ({ type: ACTIONS.SET_USER_CURRENCY, payload: value });
const setTargetCurrency = (value) => ({ type: ACTIONS.SET_TARGET_CURRENCY, payload: value });
const setTransactionStatus = (value) => ({ type: ACTIONS.SET_TRANSACTION_STATUS, payload: value });
const resetState = (payload = {}) => ({ type: ACTIONS.RESET, payload });

const reducer = (state, action) => {
  switch (action.type) {
    case (ACTIONS.SET_AMOUNT): return { ...state, amount: action.payload };
    case (ACTIONS.SET_RVALUE): return { ...state, rValue: action.payload };
    case (ACTIONS.SET_ADDRESS): return { ...state, address: action.payload };
    case (ACTIONS.SET_EMAIL): return { ...state, email: action.payload };
    case (ACTIONS.SET_USER_CURRENCY): return { ...state, userCurrency: action.payload };
    case (ACTIONS.SET_TARGET_CURRENCY): return { ...state, targetCurrency: action.payload };
    case (ACTIONS.SET_TRANSACTION_STATUS): return { ...state, transactionStatus: action.payload };
    case (ACTIONS.RESET): return { ...initialState, ...action.payload };
    default: return state;
  }
}

const Pages = {
  [MANUAL_PROGRESS.AMOUNT]: Amount,
  [MANUAL_PROGRESS.ADDRESS]: Address,
  [MANUAL_PROGRESS.CONFIRMATION]: Confirmation,
  [MANUAL_PROGRESS.DEPOSIT]: Deposit,
  [MANUAL_PROGRESS.INFO]: Info,
};

const ManualPurchase = ({ setMode }) => {
  const { currencies: { USER_CURRENCIES, CURRENCIES } } = useCurrencies();
  const [ progress, setProgress ] = useState(MANUAL_PROGRESS.AMOUNT);
  const [state, dispatch] = useReducer(reducer, initialState, (_initialState) => {
    return {
      ..._initialState,
      userCurrency: USER_CURRENCIES[0],
      targetCurrency: CURRENCIES[0],
    }
  });
  console.log({
    state,
    USER_CURRENCIES,
    CURRENCIES
  });
  useEffect(() => {
    if (progress < MANUAL_PROGRESS.DEPOSIT) {
      dispatch(setTransactionStatus(TRANSACTION_STATUS.NONE));
    }
  }, [progress]);

  useEffect(() => {
    if (!USER_CURRENCIES.includes(state.userCurrency)) {
      const newUserCurrency = USER_CURRENCIES.find(({ label }) => label === state.userCurrency.label);
      dispatch(setUserCurrency(newUserCurrency || USER_CURRENCIES[0]));
    }
    if (!CURRENCIES.includes(state.targetCurrency)) {
      const newTargetCurrency = CURRENCIES.find(({ label }) => label === state.targetCurrency.label);
      dispatch(setUserCurrency(newTargetCurrency || CURRENCIES[0]));
    }
  }, [USER_CURRENCIES, CURRENCIES]);

  useEffect(() => {
    valueChangeHandler(state.amount);
  }, [state.userCurrency]);

  const valueChangeHandler = (value) => {
    dispatch(setAmount(value));
    dispatch(setRvalue(floor(value / (state.userCurrency.rate || 1))));
  }

  const rValueChangeHandler = (value) => {
    dispatch(setRvalue(value));
    dispatch(setAmount(floor(value * (state.userCurrency.rate || 0))));
  }

  const nextHandler = (nextStep, reset) => {
    setProgress(nextStep);
    if (reset) {
      dispatch(resetState({
        userCurrency: USER_CURRENCIES[0],
        targetCurrency: CURRENCIES[0],
      }));
    }
  }

  const goToPaymentSelect = () => setMode(undefined);

  const Page = Pages[progress];

  return (
    <Layout
    hideFooter
    theme='dark'
    headerProps={{
      logo: 'black',
      links: EXCHANGE_LINKS,
      showBalance: false,
      buttons: (<AddLiquidityButton $style='blue' />)
    }}>
      <Container>
        <ContentWrapper alignItems='center' column>
          <Progress dots={[...Object.values(MANUAL_PROGRESS)]} titles={MANUAL_PROGRESS_TITLES} step={progress} setStep={nextHandler} />
          <PurchaseContext.Provider value={{
              ...state,
              setAmount: valueChangeHandler,
              setRvalue: rValueChangeHandler,
              setAddress: value => dispatch(setAddress(value)),
              setEmail: value => dispatch(setEmail(value)),
              setUserCurrency: value => dispatch(setUserCurrency(value)),
              setTargetCurrency: value => dispatch(setTargetCurrency(value)),
              setTransactionStatus: value => dispatch(setTransactionStatus(value)),
              goToPaymentSelect
            }}>
              <Page nextHandler={nextHandler} />
          </PurchaseContext.Provider>
        </ContentWrapper>
      </Container>
      <Email>
          <Icon src={EmailIcon} />
          support@forsage.fi
      </Email>
    </Layout>
  );
}

const Email = styled.p`
    font-weight: bold;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: 1px;
    text-decoration: underline;
    color: #1BB978;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0%;
    width: 100%;
`;

const Icon = styled.img`
    margin-right: 10px;
`;


const Container = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 80px;
    padding-bottom: 60px;
`;

export default ManualPurchase;