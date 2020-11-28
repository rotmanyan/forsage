import React, { useState, useEffect, useReducer } from 'react';
import { USER_CURRENCIES } from '../constants/currencies';

export const TokenServiceContext = React.createContext(null);

const initialState = {
  currency: null,
  address: null,
  balance: null
};

const ACTIONS = {
  SET_CURRENCY: 'SET_CURRENCY',
  SET_ADDRESS: 'SET_ADDRESS',
  SET_BALANCE: 'SET_BALANCE',
  RESET: 'RESET'
}

const setCurrency = payload => ({ type: ACTIONS.SET_CURRENCY, payload }); 
const setAddress = payload => ({ type: ACTIONS.SET_ADDRESS, payload }); 
const setBalance = payload => ({ type: ACTIONS.SET_BALANCE, payload }); 
const reset = () => ({ type: ACTIONS.RESET });

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_CURRENCY: return {
      ...state,
      currency: action.payload
    };
    case ACTIONS.SET_ADDRESS: return {
      ...state,
      address: action.payload
    };
    case ACTIONS.SET_BALANCE: return {
      ...state,
      balance: action.payload
    };
    case ACTIONS.RESET: return initialState;
    default: return state;
  }
}

export const TokenServiceWrapper = ({ children }) => {
  const [ tokenService, setTokenService ] = useState(null);
  const [ state, dispatch ] = useReducer(reducer, initialState);

  useEffect(() => {
    async function initState() {
      const promises = [
        tokenService.getDefaultAccount(),
        tokenService.getEthBalance()
      ];

      const [ defaultAcc, balance ] = await Promise.all(promises).catch(() => []);

      dispatch(setAddress(defaultAcc));
      dispatch(setBalance(balance));
      dispatch(setCurrency(USER_CURRENCIES.find(x => x.name === 'ETH')));
    }

    if (tokenService) initState();
    else dispatch(reset());
  }, [tokenService]);

  return (
    <TokenServiceContext.Provider value={{ tokenService, setTokenService, state }}>
      { children }
    </TokenServiceContext.Provider>
  )
} 
