import React from 'react';
import styled from 'styled-components';

import { getEtherscanUrl } from '../../utils/getEtherscanUrl';

import doneIcon from '../../images/check2.svg'

const TransactionInfo = ({ info }) => {
  const { txId, currency, currencyAmount, tokensAmount } = info;

  const message = `Buy ${tokensAmount} FOI for ${currencyAmount} ${currency.toUpperCase()}`;

  const url = getEtherscanUrl(txId);

  return (
    <Root>
      <Link href={url} target='_blank'>
        { message }
      </Link>
      <img src={doneIcon} />
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Link = styled.a`
  overflow: hidden;
  margin-right: auto;
  text-overflow: ellipsis;
  font-size: 0.75rem;
  line-height: 0.75rem;
  color: #7795F8;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

export default TransactionInfo;
