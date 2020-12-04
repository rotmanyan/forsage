import React, { useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import { TokenServiceContext } from '../../contexts/tokenServiceContext';

import BaseForm from '../Form/form';
import Modal, { ANIMATION_MODE } from '../Modal/Modal';

import currencyIcon from '../../images/metamask_currency.svg';
import copyIcon from '../../images/copy-green.svg';
import { FormattedMessage } from 'gatsby-plugin-intl';
import TransactionInfo from './transactionInfo';

const ANIMATION_DURATION = 300;
const ID = 'account-info-form';
const MAX_ITEMS_COUNT = 3;

const AccountInfo = ({ isOpen, address, onClose }) => {
  const { tokenService } = React.useContext(TokenServiceContext);
  const [ formTop, setTop ] = useState();
  const [ copied, setCopied ] = useState(false);
  const [ history, setHistory ] = useState([]);
  const [ isLoading, setLoading ] = useState(false);

  useEffect(() => {
    async function getTransactionsHistory() {
      if (!tokenService) return;
      setLoading(true);
      const res = await tokenService.getPastTokenBoughtEvents();
      const lastItems = (Array.isArray(res) && res.length)
        ? res.slice(0, MAX_ITEMS_COUNT)
        : [];
      console.log({ lastItems });
      setHistory(lastItems);
      setLoading(false);
    }

    if (isOpen) {
      getTransactionsHistory();
    } else {
      setCopied(false);
    }
  }, [isOpen])

  useEffect(() => {
    // set form position
    const formsList = document.querySelectorAll('form');
    const [ targetForm ] = [...formsList].filter(x => x.id !== ID);

    if (targetForm) {
      const { top } = targetForm.getBoundingClientRect();
      setTop(top);
    }
  }, []);

  const copyHandler = () => setCopied(true);

  const shortAddress = address && `${address.slice(0, 6)}...${address.slice(-4)}`;

  return (
    <Modal isOpen={isOpen} onClose={onClose} noWrapper>
      {
        ({ animationMode }) => (
          <Form id={ID} title='Acount' $mode={animationMode} $top={formTop}>
            <InfoBlock>
              <Block>
                <Label>
                  <FormattedMessage id='connectWithMetaMask' />
                </Label>
              </Block>
              <Block $adaptive>
                <Block>
                  <img src={currencyIcon} />
                  <Address>{shortAddress}</Address>
                </Block>
                <CopyToClipboard text={address} onCopy={copyHandler}>
                  <Button type='button'>
                    {
                      copied
                      ? 'Copied!'
                      : <FormattedMessage id='copyAddress' />
                    }
                  </Button>
                  {/* <CopyBlock>
                    <img src={copyIcon} />
                    <Copy>
                      {
                        copied
                        ? 'Copied!'
                        : <FormattedMessage id='copyAddress' />
                      }
                    </Copy>
                  </CopyBlock> */}
                </CopyToClipboard>
              </Block>
            </InfoBlock>
            <Extra>
              <span>
                Information
              </span>
            </Extra>
            <History>
              {
                history.length
                ? <>
                  <HistoryHeader>
                    Recent Tansaction
                    {/* <Button type='button'>clear all</Button> */}
                  </HistoryHeader>
                  {
                    history.map(transaction => (
                      <TransactionInfo key={transaction.txId} info={transaction} />
                    ))
                  }
                </>
                : <PlaceholderText>
                  {
                    isLoading
                    ? 'loading...'
                    : <FormattedMessage id='transactionHistoryPlaceholder' />
                  }
                </PlaceholderText>
              }
            </History>
          </Form>
        )
      }
    </Modal>
  );
}

const HistoryHeader = styled.p`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  line-height: 0.875rem;
  color: white;
`;

const Button = styled.button`
  margin-left: auto;
  border: none;
  outline: none;
  color: #7795F8;
  background: #7795f81a;
  min-width: 100px;
  min-height: 32px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 0.625rem;
  line-height: 0.625rem;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 400px) {
    margin: 0;
    width: 100%;
    margin-top: 10px;
  }
`;

const History = styled.div`
  display: flex;
  flex-direction: column;
  background: #383D4F;
  border-radius: 4px;
  padding: 10px 20px 20px;
  width: 100%;
  box-sizing: border-box;
`;

const Address = styled.p`
  margin: 0;
  font-size: 0.75rem;
  line-height: 0.625rem;
  text-transform: uppercase;
  color: #FFFFFF;
`;

const Copy = styled.p`
  margin: 0;
  text-decoration: underline;
  font-weight: bold;
  font-size: 0.75rem;
  line-height: 0.75rem;
  letter-spacing: 1px;
  color: #1BB978;
`;

const InfoBlock = styled.div`
  width: 100%;
  border: 1px solid #505463;
  border-radius: 4px;
  padding: 18px 45px;
  box-sizing: border-box;
`;

const Label = styled.p`
  font-size: 0.625rem;
  line-height: 0.625rem;
  color: #1BB978;
  margin: 0 0 10px;
`;

const Block = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  img {
    margin-right: 16px;
  }
  ${ ({ $adaptive }) => $adaptive && `
      @media screen and (max-width: 400px) {
        flex-direction: column;
        // margin: 0;
        // width: 100%;
        // margin-top: 10px;
      }
  `}
`;

const CopyBlock = styled(Block)`
  cursor: pointer;
`;

const PlaceholderText = styled.p`
  font-size: 0.875rem;
  line-height: 0.875rem;
  color: #FFFFFF;
  padding: 0;
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const openAnimation = css`animation-name: ${fadeIn};`;

const closeAnimation = css`animation-name: ${fadeOut};`;

const Form = styled(BaseForm)`
    max-width: 464px;
    z-index: 1200;
    position: fixed;
    top: ${ ({ $top }) => $top ? `${$top}px` : '200px'};
    margin-top: 0;
    /* padding: 38px; */
    box-sizing: border-box;

    left: 50%;
    transform: translateX(-50%);
    animation-duration: ${ANIMATION_DURATION}ms;
    animation-fill-mode: both;
    ${ ({ $mode }) => {
      if ($mode === ANIMATION_MODE.OPEN) return openAnimation;
      if ($mode === ANIMATION_MODE.CLOSE) return closeAnimation;
      return '';
    }};
    h2 {
      text-align: left;
      padding-left: 32px;
    }
    > div {
      padding: 32px 46px 60px 38px;
    }
`;

const Extra = styled.p`
    width: 100%;
    text-align: center;
    margin: 20px 0;
    font-size: 10px;
    line-height: 10px;
    text-align: center;
    color: #A2A7AE;
    position: relative;
    z-index: 10;
    &:before {
        position: absolute;
        content: '';
        width: 33%;
        height: 1px;
        background-color: #A2A7AE;
        left: 0;
        top: 50%;
        z-index: -1;
    }
    &:after {
        position: absolute;
        content: '';
        width: 33%;
        height: 1px;
        background-color: #A2A7AE;
        right: 0;
        top: 50%;
        z-index: -1;
    }
    & > span {
        background: #282D40;
        padding: 0 10px;
    }
`;

export default AccountInfo;
