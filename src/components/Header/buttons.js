import React from 'react';
import styled from 'styled-components';
import { navigate, FormattedMessage } from 'gatsby-plugin-intl';
import ArrowRightSrc from '../../images/arrow-right2.svg';

export const AddLiquidityButton = (props) => {
  const clickHandler = () => navigate('/add_liquidity');

  return <Button onClick={clickHandler} {...props} disabled>
    <FormattedMessage id='addLiquidity' />
  </Button>;
}

// export const ConnectWalletButton = (props) => {
//   const clickHandler = () => navigate('/connect_wallet');

//   return <Button onClick={clickHandler} {...props}>
//     Connect Wallet
//     <ArrowRight src={ArrowRightSrc} />
//   </Button>;
// }

export const LiquidityMiningButton = (props) => {
  const clickHandler = () => navigate('/add_liquidity');

  return <Button onClick={clickHandler} {...props} disabled>
    <FormattedMessage id='liquidityMining' />
  </Button>
}

export const BuyTokenButton = (props) => {
  const clickHandler = () => navigate('/buy');

  return <Button onClick={clickHandler} {...props}>
    <FormattedMessage id='buyToken' />
    <ArrowRight src={ArrowRightSrc} />
  </Button>
}

const ArrowRight = styled.img`
    margin-left: 10px;
    margin-right: -5px;
`;

const Button = styled.button`
    outline: none;
    margin: 0;
    ${ ({ $withMargin }) => $withMargin && `
      margin-left: 20px;
    `}
    padding: 0 15px;
    min-width: 160px;
    min-height: 36px;
    border: none;
    border-radius: 4px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.625rem;
    line-height: 0.625rem;
    letter-spacing: 1px;
    cursor: pointer;
    transition: 0.3s;
    :hover {
        opacity: 0.8;
    }
    ${ ({ $style }) => {
        if ($style === 'green') return `
            color: white;
            background-color: #1BB978;
        `;
        if ($style === 'blue') return `
            color: #7795F8;
            background-color: #7795f81a;
        `;
    }}
    :disabled {
        background: #A2A7AE;
        opacity: 0.2;
        box-shadow: 0px 2px 4px rgba(100, 100, 100, 0.5);
        color: #FFFFFF;
        cursor: auto;
        user-select: none;
        :hover {
            opacity: 0.2;
        }
    }
    /* @media screen and (max-width: 800px) {
      display: none;
    } */
`;
