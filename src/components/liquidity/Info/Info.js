import React from 'react';
import styled from 'styled-components';

import ContentWrapper from '../../ContentWrapper/contentWrapper';
import ExchangeButton from '../../ExchangeButton/exchangeButton';

import InfoIcon from '../../../images/info-green.svg';
import { LiquidityContext } from '../../../contexts/liquidityContext';

const Info = () => {
  const { nextHandler } = React.useContext(LiquidityContext);

  return (
    <StyledWrapper>
      <TextBlock>
          <h5>Liquid mining</h5>
          <p>
              ⁃ period of lock is 60 days<br />
              ⁃ refund to the wallet after 60 days minus 3% commission<br />
              ⁃ bonus accrual from mining in FOI tokens<br />
          </p>
      </TextBlock>
      <Button onClick={nextHandler}>ADD LIQUIDITY</Button>
    </StyledWrapper>
  );
};

const Button = styled(ExchangeButton)`
    color: #7795F8;
    background-color: #7795f81a;
    margin: 0 auto;
    width: 100%;
    max-width: 220px;
`;

const TextBlock = styled.div`
    max-width: 464px;
    background: #1bb9781a;
    border-radius: 8px;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 24px 24px 22px 82px;
    /* margin: 70px 0 200px; */
    margin: 60px auto 32px;
    box-sizing: border-box;
    @media (max-width: 600px) {
        margin-bottom: 100px;
    }

    :before {
        content: url(${InfoIcon});
        position: absolute;
        left: 24px;
    }

    h5 {
        font-weight: 600;
        font-size: 1.25rem;
        line-height: 1.25rem;
        color: #FFFFFF;
        margin: 0 0 0.625rem;
    }
    p {
        font-size: 0.875rem;
        line-height: 1.5rem;
        color: #FFFFFF;
        margin: 0;
    }
`;

const StyledWrapper = styled(ContentWrapper)`
    box-sizing: border-box;
    flex-direction: column;
`;
export default Info;
