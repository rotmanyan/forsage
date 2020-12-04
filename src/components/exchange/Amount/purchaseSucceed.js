import React from 'react';
import styled from 'styled-components';

import { getEtherscanUrl } from '../../../utils/getEtherscanUrl';

import Modal from '../../Modal/Modal';

const PurchaseSucceed = ({ isOpen, onClose, transaction }) => {
  console.log({ transaction });

  const url = (transaction && transaction.transactionHash)
    ? getEtherscanUrl(transaction.transactionHash)
    : null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {
        ({ closeHandler }) => (
          <Root>
            <Text>Transaction Submitted</Text>
            { url && <Link href={url} target='_blank'>View on Etherscan</Link> }
            <Button onClick={closeHandler}>Close</Button>
          </Root>
        )
      }
    </Modal>
  );
}

const Root = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: rgba(35,40,54,1);
`;

const Text = styled.p`
  margin: 0;
  margin-bottom: 20px;
`;

const Link = styled.a`
  margin: 0;
  margin-bottom: 20px;
  text-decoration: none;
  color: #5466a1;
  font-size: 0.875rem;
  line-height: 1.5rem;
  cursor: pointer;
`;

const Button = styled.button`
  padding: 8px;
  margin: 0 0 auto;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: white;
  background-color: #5b7be2;
  border-radius: 4px;
  transition: 0.3s;
  > svg {
    width: 16px;
    height: 16px;
    fill: ghostwhite;
  }
  :hover {
    opacity: 0.65;
  }
`;

export default PurchaseSucceed;
