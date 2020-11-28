import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import BurgerMenuIcon from '../../images/burger-icon.svg';
import Nav from './nav';

const MobileMenu = ({ links, buttons, showBalance }) => {
  const [ root, setRoot ] = useState(null);
  const [ isOpen, setOpen ] = useState(false);

  const toggleMenu = () => {
    setOpen(prev => !prev);
  }

  useEffect(() => {
    setRoot(document.getElementById('root'));
  }, [])

  return (
    <MenuButton onClick={toggleMenu}>
      <Icon src={BurgerMenuIcon} />
      { 
        root && ReactDOM.createPortal(
          <Nav
            open={isOpen}
            links={links}
            setOpen={setOpen}
            showBalance={showBalance}
            buttons={buttons}
          />,
          root
        )
      }
    </MenuButton>
  );
}

const MenuButton = styled.button`
  margin-left: 16px;
  background: none;
  border: none;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s;
  outline: none;
  &:active, &:focus {
    outline: none;
  }
  &:hover {
    opacity: 0.8;
    box-shadow: 1px 1px 5px black;
  }
  @media (min-width: 800px) {
    display: none;
  }
`;

const Icon = styled.img`
  width: 15px;
  height: 15px;
`;



export default MobileMenu;
