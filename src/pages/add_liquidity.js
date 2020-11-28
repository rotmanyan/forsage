import React, { useReducer } from 'react';
import styled from 'styled-components';

import withWallet from '../hocs/withWallet';
import { METAMASK_PROGRESS, METAMASK_PROGRESS_TITLES } from '../constants/progress';
import useCurrencies from '../hooks/useCurrencies';
import { EXCHANGE_LINKS } from '../constants/links';
import { LiquidityContext } from '../contexts/liquidityContext';
import { PURCHASE_MODE } from '../constants/purchaseMode';
import { BuyTokenButton } from '../components/Header/buttons';

import Layout from '../components/layout';
import Progress from '../components/Progress/progress';
import ContentWrapper from '../components/ContentWrapper/contentWrapper';

import Amount from '../components/liquidity/Amount/Amount';
import Info from '../components/liquidity/Info/info';

const STEPS = {
  INFO: 1,
  AMOUNT: 2,
}

const Components = {
  [STEPS.INFO]: Info,
  [STEPS.AMOUNT]: Amount,
}

const ACTIONS = {
  SET_STEP: 'SET_STEP',
  SET_AMOUNT: 'SET_AMOUNT',
  SET_USER_CURRENCY: 'SET_USER_CURRENCY',
}

const setStepAction = step => ({ type: ACTIONS.SET_STEP, payload: step });
const setAmountAction = amount => ({ type: ACTIONS.SET_AMOUNT, payload: amount });
const setUserCurrencyAction = currency => ({ type: ACTIONS.SET_USER_CURRENCY, payload: currency });

const initialState = {
  step: STEPS.INFO,
  amount: 0,
  userCurrency: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_STEP: return {
      ...state,
      step: action.payload
    };
    case ACTIONS.SET_AMOUNT: return {
      ...state,
      amount: action.payload
    };
    case ACTIONS.SET_USER_CURRENCY: return {
      ...state,
      userCurrency: action.payload
    };
    default: return state;
  }
}

const Liquidity = () => {
  const { currencies: { USER_CURRENCIES } } = useCurrencies();
  const [ state, dispatch ] = useReducer(reducer, initialState, (initial) => {
    return {
      ...initial,
      userCurrency: USER_CURRENCIES[0],
    };
  });

  const nextHandler = () => {
    const next = state.step === STEPS.INFO
      ? STEPS.AMOUNT
      : null;

    if (next) dispatch(setStepAction(next));
  }

  const setAmount = value => dispatch(setAmountAction(value));
  const setUserCurrency = value => dispatch(setUserCurrencyAction(value));

  const Page = Components[state.step];

  return (
    <Layout
    hideFooter
    theme='dark'
    headerProps={{
      showBalance: true,
      links: EXCHANGE_LINKS,
      logo: 'black',
      buttons: (<BuyTokenButton $style='green' />)
    }}>
      <Container>
        <ContentWrapper alignItems='center' column>
          <Progress dots={[...Object.values(METAMASK_PROGRESS)]} titles={METAMASK_PROGRESS_TITLES} step={METAMASK_PROGRESS.AMOUNT} />
          <LiquidityContext.Provider value={{
            nextHandler,
            setAmount,
            setUserCurrency,
            ...state
          }}>
          { Page && <Page /> }
          </LiquidityContext.Provider>
        </ContentWrapper>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 80px;
    padding-bottom: 60px;
`;

export default withWallet(
  Liquidity,
  { only: [ PURCHASE_MODE.METAMASK ] }
);
