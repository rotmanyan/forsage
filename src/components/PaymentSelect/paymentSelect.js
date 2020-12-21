import React, { useState } from 'react';
import styled from 'styled-components';
import Web3 from 'web3';
import { navigate, useIntl } from 'gatsby-plugin-intl';

import {initMetamask,initTokenService} from '../../vendors/TokenService';
import { PURCHASE_MODE } from '../../constants/purchaseMode';
import { EXCHANGE_LINKS } from '../../constants/links';
import { METAMASK_PROGRESS, METAMASK_PROGRESS_TITLES } from '../../constants/progress';
import { TokenServiceContext } from '../../contexts/tokenServiceContext';
import { BuyTokenButton, AddLiquidityButton } from '../Header/buttons';

import Layout from '../layout';
import Progress from '../Progress/progress';
import ContentWrapper from '../ContentWrapper/contentWrapper';
import Form from '../Form/form';
import InputIcon from '../../images/fox.svg';
import ExchangeButton from '../ExchangeButton/exchangeButton';
import ForsageIcon from '../../images/f-black.svg';
import PaymentOnIcon from '../../images/payment-on.svg';
import PaymentOffIcon from '../../images/payment-off.svg';
import ArrowLeftIcon from '../../images/arrow-left.svg';
import EmailIcon from  '../../images/support-email.svg';

const PaymentSelect = ({ setMode, options }) => {
  const [ localMode, setLocalMode ] = useState();
  const { setTokenService } = React.useContext(TokenServiceContext);
  const intl = useIntl();

  const installMetamask = () => window.open('https://metamask.io/download.html');

  // const initMetamask = async () =>{ 
  //   if (window.ethereum) {
  //     const web3Instance = new Web3(window.ethereum);
  //     const accounts = await window.ethereum.enable()
  //       .catch(() => {
  //         console.log('err')
  //         return [];
  //       });

  //     if (accounts.length) {
  //       web3Instance.eth.defaultAccount =  accounts[0];

  //       window.w = web3Instance;

  //       const newTokenService = new TokenService(web3Instance);
  //       setTokenService(newTokenService);
  //       return true;
  //     } else {
  //       // show message to user 'please enable...'
  //     }
  //   } else {
  //     //   alert("Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!");
  //   }
  //   return false;
  // }

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log('submit')
    if (localMode === PURCHASE_MODE.MANUAL) {
      setMode(localMode);
      // navigate('/manual_buy', { state: { mode }});
    } else if (localMode === PURCHASE_MODE.METAMASK) {
      if (window.ethereum) {
        const initialized = await initMetamask();
        if (initialized) {
          setMode(localMode);
        }
      } else {
        installMetamask();
      }
    }
  const initialized = initMetamask();
    
    initialized
      .then(data=>initTokenService(data))
      .catch(error=>console.log(error))
  }

  const backClickHandler = () => window.history.back();

  const preSubmitClickHandler = mode => () => setLocalMode(mode);

  return (
    <Layout
    hideFooter
    theme='dark'
    headerProps={{
        logo: 'black',
        links: EXCHANGE_LINKS,
        buttons: (<>
          <AddLiquidityButton $style='blue' />
            <BuyTokenButton $style='green' />
        </>)
      }}>
      <Container>
        <ContentWrapper alignItems='center' column>
          {/*<Progress dots={[...Object.values(METAMASK_PROGRESS)]} titles={METAMASK_PROGRESS_TITLES} step={METAMASK_PROGRESS.METHOD} />*/}
          <StyledForm title={intl.formatMessage({ id: 'buy.connect.title' })} submitHandler={submitHandler}>
            <InputWrapper>
              <WalletButton
                onClick={preSubmitClickHandler(PURCHASE_MODE.METAMASK)}
                disabled={!options.only.includes(PURCHASE_MODE.METAMASK)}
                $active={localMode === PURCHASE_MODE.METAMASK}
                type='button'>
                <img
                  className='checkbox'
                  src={
                    localMode === PURCHASE_MODE.METAMASK
                    ? PaymentOnIcon
                    : PaymentOffIcon
                  }
                />
                {
                  (typeof window !== "undefined" && !!window.ethereum)
                  ? intl.formatMessage({ id: 'buy.option.metamask' })
                  : 'Install MetaMask'
                }
                <img src={InputIcon} />
              </WalletButton>
              <WalletButton
                onClick={preSubmitClickHandler(PURCHASE_MODE.MANUAL)}
                disabled={!options.only.includes(PURCHASE_MODE.MANUAL)}
                $active={localMode === PURCHASE_MODE.MANUAL}
                type='button'>
                <img
                  className='checkbox'
                  src={
                    localMode === PURCHASE_MODE.MANUAL
                    ? PaymentOnIcon
                    : PaymentOffIcon
                  }
                />
                { intl.formatMessage({ id: 'buy.option.manual' }) }
                <img src={ForsageIcon} />
              </WalletButton>
            </InputWrapper>
            <Buttons>
              <PrevButton onClick={backClickHandler} type='button'>
                <ArrowLeft src={ArrowLeftIcon} />
                { intl.formatMessage({ id: 'back' }) }
              </PrevButton>
              <ExchangeButton type='submit'>
                { intl.formatMessage({ id: 'choose' }) }
              </ExchangeButton>
            </Buttons>
          </StyledForm>
        </ContentWrapper>
      </Container>
      <Email>
          <Icon src={EmailIcon} />
          support@forsage.fi
      </Email>
    </Layout>
  );
}

const ArrowLeft = styled.img`
  margin-right: 5px;
  margin-left: -5px;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-top: 32px;
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

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 80px;
    padding-bottom: 60px;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;

`;

const StyledForm = styled(Form)`
  max-width: 490px;
  > div {
    padding-top: 32px;
  }
`;

const WalletButton = styled.button`
    position: relative;
    text-align: left;
    width: 100%;
    background-color: #383D4F;
    border: 1px solid transparent;
    border-radius: 8px;
    outline: none;
    border-radius: 2px;
    font-size: 14px;
    line-height: 14px;
    color: #FFFFFF;
    height: 48px;
    padding: 0 16px 0 60px;    
    box-sizing: border-box;
    cursor: pointer;
    transition: 0.3s;
    padding-right: 60px;
    :hover:not(:disabled) {
      opacity: 0.8;
    }
    img {
      position: absolute;
      /* margin-top: 10px; */
      margin-right: 32px;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    img.checkbox {
        right: auto;
        left: 20px;
    }
    :not(:last-of-type) {
      margin-bottom: 20px;
    }
    :disabled {
      cursor: auto;
    }
    ${ ({ $active }) => $active && `
      border: 1px solid #505463;
      box-shadow: 0px 0px 4px #505463;
    `};
    /* .active {
    } */
`;

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

export default PaymentSelect;
