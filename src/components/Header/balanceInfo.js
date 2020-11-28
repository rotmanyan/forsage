import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { TokenServiceContext } from '../../contexts/tokenServiceContext';

import AccountInfo from './accountInfo';

import mockAccIcon from '../../images/mock-account.svg';

const BalanceInfo = () => {
  const { state: { balance, currency, address } } = React.useContext(TokenServiceContext);
  const [ showAccInfo, setShowAccInfo ] = useState(false);

  const modalCloseHandler = () => setShowAccInfo(false);

  const openAccountInfo = () => setShowAccInfo(true);

  const shortAddress = address && `${address.slice(0, 6)}...${address.slice(-4)}`;

  return (
    <Root>
      {
        currency && 
        <CurrencyBlock>
          <img src={currency.icon} />
          <CurrencyName>{currency.name}</CurrencyName>
          <CurrencyAmount>{balance.toFixed(8)}</CurrencyAmount>
        </CurrencyBlock>
      }
      <AccBlock>
        <Address onClick={openAccountInfo}>{shortAddress}</Address>
        <img src={mockAccIcon} />
      </AccBlock>
      <AccountInfo isOpen={showAccInfo} onClose={modalCloseHandler} address={address} />
    </Root>
  )
}

const CurrencyBlock = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
  /* margin-right: 60px; */
  img {
    margin-right: 8px;
  }
`;

const CurrencyName = styled.p`
  margin-right: 8px;
  font-size: 0.75rem;
  line-height: 0.625rem;
  text-transform: uppercase;
  color: #A2A7AE;
`;

const CurrencyAmount = styled.p`
  font-size: 0.75rem;
  line-height: 0.625rem;
  text-transform: uppercase;
  color: #A2A7AE;
`;

const AccBlock = styled.div`
  display: flex;
  align-items: center;
  img {
    max-width: 24px;
    max-height: 24px;
  }
`;

const Address = styled.p`
  margin-right: 8px;
  font-size: 0.75rem;
  line-height: 0.625rem;
  text-transform: uppercase;
  color: #FFFFFF;
  cursor: pointer;
`;

const Root = styled.div`
  display: flex;
  align-items: center;
  /* button + & {
    margin-left: 60px;
  } */
  /* + div {
    margin-left: 16px;
  } */
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export default BalanceInfo;
