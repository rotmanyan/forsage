import React, { useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

import successIcon from '../../images/check.svg';
import CloseIcon from '../../images/cancel.inline.svg';

const ANIMATION_DURATION = 350; //ms;
const AUTOCLOSE_TIME = 7000;

const Notification = ({ payload, onClose }) => {
  const [ shouldClose, setStatus ] = useState(false);

  useEffect(() => {
    setTimeout(closeHandler, AUTOCLOSE_TIME);
  }, []);

  const closeHandler = () => {
    setStatus(true);
    setTimeout(onClose, ANIMATION_DURATION);
  }

  return (
    <Root $shouldClose={shouldClose}>
      <img src={successIcon} />
      <TextBlock>
        <MainText>Transaction succeeded</MainText>
        <Link>View on Etherscan</Link>
      </TextBlock>
      <Button onClick={closeHandler}>
        <CloseIcon />
      </Button>
    </Root>    
  );
}

const openAnimation = keyframes`
 from {
   transform: translateX(500px) scale(0.7);
 }
 to {
  transform: translateX(0) scale(1);
 }
`;

const closeAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(500px);
  }
`;

const onOpenAnimation = css` animation-name: ${openAnimation}; `;
const onCloseAnimation = css` animation-name: ${closeAnimation}; `;

const Root = styled.div`
  display: flex;
  width: 100%;
  max-width: 300px;
  border-radius: 4px;
  align-items: center;
  background-color: red;
  position: fixed;
  top: 150px;
  right: 20px;
  padding: 15px;
  box-sizing: border-box;
  z-index: 900;
  animation-fill-mode: both;
  animation-duration: ${ANIMATION_DURATION}ms;
  ${({ $shouldClose }) => (
    $shouldClose
    ? onCloseAnimation
    : onOpenAnimation
  ) }
  background-color: rgba(35,40,54,1);
  > img {
    width: 24px;
    height: 24px;
  }
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MainText = styled.h5`
  margin: 0;
  padding: 0 10px 0 20px;
  line-height: 32px;
`;

const Link = styled.a`
  margin: 0;
  padding: 0 10px 0 20px;
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
  background-color: rgba(35,40,54,1);
  border-radius: 50%;
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

export default Notification;
