import React, { useEffect, createRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { FormattedMessage, Link, useIntl } from 'gatsby-plugin-intl';

import { TokenServiceContext } from '../../contexts/tokenServiceContext';
import UseScrollTo from '../../hooks/useScrollTo'; 
import { LANGS } from '../../constants/languages';

import BaseLangs from '../Header/langs';
import AccountInfo from '../Header/accountInfo';

import mockAccIcon from '../../images/mock-account.svg';
import ArrowRightSrc from '../../images/arrow-right2.svg';

import zhWhitepaper from '../../../static/whitepaper_cc.pdf';
import enWhitepaper from '../../../static/whitepaper_en.pdf';

const whitepapers = {
    [LANGS.CH]: zhWhitepaper,
    [LANGS.EN]: enWhitepaper,
}

const Nav = ({ open, setOpen, links, showBalance, buttons }) => {
    const { state: { balance, currency, address } } = React.useContext(TokenServiceContext);
    const [ showAccInfo, setShowAccInfo ] = useState(false);
    const targetRef = createRef();
    const scrollTo = UseScrollTo();
    const { locale } = useIntl();

    useEffect(() => {
        if (open) {
            document.addEventListener('click', closeNav);
            disableBodyScroll(targetRef.current, {
                reserveScrollBarGap: true,
              });
        } else {
            document.removeEventListener('click', closeNav);
            enableBodyScroll(targetRef.current);
        }

        return () => {
            document.removeEventListener('click', closeNav);
            clearAllBodyScrollLocks();
        }
    }, [open]);

    const closeNav = () => {
        setOpen(false)
    };

    const menuClickHandler = (e) => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
    }

    const linkClickHandler = (e) => {
        const { target: { href }} = e;

        if (href.includes('#')) {
            e.preventDefault();
            const [, elemId] = href.split('#');
            const element = elemId && document.getElementById(elemId);
            if (element) {
                scrollTo(element);
            }
        }

        closeNav();
    }

    const modalCloseHandler = () => setShowAccInfo(false);

    const openAccountInfo = () => {
        setOpen(false);
        setShowAccInfo(true);
    }
  
    const shortAddress = address && `${address.slice(0, 6)}...${address.slice(-4)}`;
  
    return (
        <>
            <Backface className={open && 'open'} />
            <Menu
                ref={targetRef}
                onClick={menuClickHandler}
                className={open && 'open'}>
                    <HideButton onClick={closeNav}>
                        <Icon src={ArrowRightSrc} />
                    </HideButton>
                    {
                        showBalance && <>
                            <Block $justify='center'>
                                <Address onClick={openAccountInfo}>{shortAddress}</Address>
                                <img src={mockAccIcon} />
                            </Block>
                            {
                                currency && 
                                <CurrencyWrapper $justify='center' $column>
                                    <NameWrapper $justify='center'>
                                        <CurrencyName>{currency.name}</CurrencyName>
                                        <img src={currency.icon} />
                                    </NameWrapper>
                                    <CurrencyAmount>{balance.toFixed(8)}</CurrencyAmount>
                                </CurrencyWrapper>
                            }
                        </>
                    }
                    {
                        links.map(({ href, title }) => (
                                href.includes('whitepaper')
                                ? <RawLink key={href} href={whitepapers[locale]} target='_blank'>
                                    <FormattedMessage id={title} />
                                </RawLink>
                                : <StyledLink key={href} onClick={linkClickHandler} to={href}>
                                    <FormattedMessage id={title} />
                                </StyledLink>

                        ))
                    }
                    {
                        buttons && <Block $column>
                            {buttons}
                        </Block>
                    }
                    {/* <Langs /> */}
                    <AccountInfo isOpen={showAccInfo} onClose={modalCloseHandler} address={address} />
            </Menu>
        </>
    );
};

const CurrencyAmount = styled.p`
    margin: 0;
    font-size: 12px;
    line-height: 16px;
`;

const CurrencyName = styled.p`
    margin: 0;
    margin-right: 8px;
    font-size: 12px;
    line-height: 16px;
    button {
        margin-left: 0;
    }
`;

const Block = styled.div`
    width: 100%;
    display: flex;
    ${ ({ $align = 'center'}) => `align-items: ${$align};` }
    ${ ({ $justify }) => $justify && `
        justify-content: ${$justify};
    `};
    ${ ({ $column }) => $column && `
        flex-direction: column;
    `}
    > img {
        width: 24px;
        height: 24px;
    }
    button {
        margin-bottom: 20px;
    }
`;

const CurrencyWrapper = styled(Block)`
    margin: 20px 0;
`;

const NameWrapper = styled(Block)`
    margin-bottom: 10px
`;

const Address = styled.p`
    margin-right: 8px;
    font-size: 0.75rem;
    line-height: 0.625rem;
    text-transform: uppercase;
    color: #FFFFFF;
    cursor: pointer;
`;

const linkStyles = css`
    text-decoration: none;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
    min-width: 40px;
    text-align: center;
    color: #fff;
    margin-bottom: 20px;
    position: relative;

    &:after {
        content: '';
        transition: transform 0.3s;
        position: absolute;
        height: 2px;
        bottom: 0;
        left: 0;
        background: white;
        width: 100%;
        transform: scaleX(0);
    }
    &:hover {
        &:after {
            transform: scaleX(1);
        }
    }
`;

const StyledLink = styled(Link)`${linkStyles}`;

const RawLink = styled.a`${linkStyles}`;

const HideButton = styled.button`
    border: none;
    // background-color: red;
    cursor: pointer;
    background: none;
    width: 20px;
    height: 20px;
    padding: 20px;
    outline: none;
    margin: 10px;
    // margin: 10px 10px 10px auto;
    box-sizing: content-box;
    transition: box-shadow 0.3s;
    box-shadow: 0px 0px 0px #101010;

    &:hover {
        opacity: 0.8;
        box-shadow: 1px 1px 5px #101010;
    }

    &:active, &:focus {
        outline: none;
    }
`;

const Icon = styled.img`
    width: 16px;
    height: 16px;
    margin-right: -4px;
`;

const Backface = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 390;
    background-color: black;
    opacity: 0;
    transition: 0.5s;
    &.open {
        transition: 0.5s;
        width: 100%;
        height: 100%;
        opacity: 0.5;
    }
`;

const Menu = styled.nav`
    background-color: #232836;
    position: fixed;
    height: 100vh;
    right: 0;
    min-width: 300px;
    z-index: 400;
    display: flex;
    flex-direction: column;
    align-items: center;
    right: -100%;
    transition: right 0.5s;

    & > * {
        transition: opacity 1s;
        opacity: 0;
    }

    &.open {
        right: 0;
        & > * {
            opacity: 1;
        }
    }

    @media screen and (max-width: 400px) {
        min-width: unset;
        width: 100%;
    }
`;

const Langs = styled(BaseLangs)`
    margin-left: 0;
`;

export default Nav;
