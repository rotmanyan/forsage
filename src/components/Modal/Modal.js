import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes, css } from 'styled-components';

const ANIMATION_DURATION = 300;
export const ANIMATION_MODE = {
  OPEN: "OPEN",
  CLOSE: "CLOSE"
};

const Modal = ({ children: Children, isOpen, onClose, noWrapper }) => {
  const [ animationMode, setAnimationMode ] = useState(ANIMATION_MODE.OPEN);
  const [ root, setRoot ] = useState();

  useEffect(() => {
    const rootNode = document.getElementById('root');
    setRoot(rootNode);
  }, []);

  useEffect(() => {
    setAnimationMode(ANIMATION_MODE.OPEN)
  }, [isOpen])

  const closeHandler = () => {
    setAnimationMode(ANIMATION_MODE.CLOSE);
    setTimeout(onClose, ANIMATION_DURATION);
  }

  if (isOpen && root) {
    const renderedChildren = typeof Children === 'object'
      ? Children
      : Children({ animationMode, closeHandler });

    return ReactDOM.createPortal(
      <>
        <Backface onClick={closeHandler} $mode={animationMode} />
        {
          noWrapper
          ? renderedChildren
          : <Wrapper $mode={animationMode}>{ renderedChildren }</Wrapper>
        }
      </>,
      root
    );
  }

  return null;
}

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

const Backface = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  animation-duration: ${ANIMATION_DURATION}ms;
  animation-fill-mode: both;
  ${ ({ $mode }) => {
    if ($mode === ANIMATION_MODE.OPEN) return openAnimation;
    if ($mode === ANIMATION_MODE.CLOSE) return closeAnimation;
  }};
`;

const Wrapper = styled.div`
  z-index: 1200;
  position: fixed;
  left: 50%;
  top: 50%;
  display: flex;
  justify-content: center;
  width: 100%;
  transform: translateY(-50%) translateX(-50%);
  animation-duration: ${ANIMATION_DURATION}ms;
  animation-fill-mode: both;
  ${ ({ $mode }) => {
    if ($mode === ANIMATION_MODE.OPEN) return openAnimation;
    if ($mode === ANIMATION_MODE.CLOSE) return closeAnimation;
  }};
`;

export default Modal;
