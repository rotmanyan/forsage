import React from 'react';
import styled from 'styled-components';

import Form from '../../Form/form';

import InputIcon from '../../../images/fox.svg';

const WalletConnect = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <StyledForm title='Connect to a wallet' submitHandler={submitHandler}>
      <InputWrapper>
        <WalletButton type='submit'>
          Meta Mask
        </WalletButton>
        <img src={InputIcon} />
      </InputWrapper>
    </StyledForm>
  );
};

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  img {
    position: absolute;
    margin-top: 10px;
    margin-right: 32px;
    right: 0;
  }
`;

const StyledForm = styled(Form)`
  max-width: 464px;
  > div {
    padding-top: 32px;
  }
`;

const WalletButton = styled.button`
    text-align: left;
    width: 100%;
    background-color: #383D4F;
    border: none;
    border-radius: 8px;
    outline: none;
    border-radius: 2px;
    font-size: 12px;
    line-height: 12px;
    height: 48px;
    padding: 0 16px;    
    box-sizing: border-box;
    color: #A2A7AE;
    cursor: pointer;
    transition: 0.3s;

    :hover {
      opacity: 0.8;
    }
    :active {
      opacity: 0.6;
    }
`;

export default WalletConnect;
