import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Link, useIntl, navigate } from "gatsby-plugin-intl";

import { TokenServiceContext } from '../../contexts/tokenServiceContext';
import useScrollTo from '../../hooks/useScrollTo';
import {LANGS} from '../../constants/languages';

import ContentWrapper from '../ContentWrapper/contentWrapper';
import MobileMenu from '../mobileMenu/mobileMenu';
import BalanceInfo from './balanceInfo';
import BaseLangs from './langs';

import ArrowRightSrc from '../../images/arrow-right2.svg';
import LogoSrcDefault from '../../images/logo-white.svg';
import LogoSrcBlack from '../../images/logo2.svg';

import zhWhitepaper from '../../../static/whitepaper_cc.pdf';
import enWhitepaper from '../../../static/whitepaper_en.pdf';

const whitepapers = {
    [LANGS.CH]: zhWhitepaper,
    [LANGS.EN]: enWhitepaper,
}

const LOGO = {
    'default': LogoSrcDefault,
    'black': LogoSrcBlack
};

const Header = ({
    animate,
    links,
    buttons,
    showBalance,
    logo = 'default'
}) => {
    const min = 140; // px
    const max = 220; // px
    const [ alpha, setAlpha ] = useState(animate ? 0 : 1);
    const scrollTo = useScrollTo();
    const { tokenService } = React.useContext(TokenServiceContext);
    const intl = useIntl();

    useEffect(() => {
        function scrollListener() {
            const value = window.pageYOffset > min
            ? (window.pageYOffset - min) / (max - min)
            : 0;
            const newAlpha = value > 1
                ? 1
                : value;
            setAlpha(newAlpha);
        }
        if (animate) document.addEventListener('scroll', scrollListener);
        return () => document.removeEventListener('scroll', scrollListener);
    }, [animate]);

    const linkClickHandler = e => {
        const { target: { href }} = e;
        if (href.includes('#')) {
            e.preventDefault();
            const [, elemId] = href.split('#');
            console.log(href)
            const element = elemId && document.getElementById(elemId);
            if (element) scrollTo(element);
        }
    }

    const logoClickHandler = () => navigate('/');

    return (
        <Container
            id='header'
            alpha={alpha}>
            <StyledContentWrapper padding='narrow' alignItems='center'>
                <Block onClick={logoClickHandler}>
                    {/* <Title to='/'> */}
                        <Logo src={LOGO[logo]} />
                    {/* </Title> */}
                </Block>
                <Links>
                    {
                        links.map(({ href, title, icon }) => (
                            href.includes('whitepaper')
                            ? <RawLink
                                key={href}
                                href={whitepapers[intl.locale]}
                                animation='line'
                                target='_blank'>
                                { icon && <img src={icon} /> }
                                { intl.formatMessage({ id: title.toLowerCase() })}
                            </RawLink>
                            : <StyledLink
                                key={href}
                                onClick={linkClickHandler}
                                animation='line'
                                to={href}>
                                { icon && <img src={icon} /> }
                                { intl.formatMessage({ id: title.toLowerCase() })}
                            </StyledLink>
                        ))
                    }
                </Links>
                <Block>
                    <Buttons>
                        { buttons}
                    </Buttons>
                    { !!showBalance && !!tokenService && <BalanceInfo /> }
                    <Langs />
                    <MobileMenu links={links} buttons={buttons} showBalance={showBalance} />
                </Block>
            </StyledContentWrapper>
        </Container>
    );
};

const Links = styled.div`
    display: flex;
`;

const Block = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    :last-of-type {
        justify-content: flex-end;
    }
`;

const Buttons = styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width: 800px) {
        display: none;
    }
    button {
        margin-left: 20px;
    }
`;

const StyledContentWrapper = styled(ContentWrapper)``;

const Container = styled.header`
    position: fixed; 
    background-color: rgba(35, 40, 54, ${({ alpha }) => alpha});
    width: 100%;
    height: 80px;
    top: 0;
    display: flex;
    justify-content: center;
    z-index: 300;
    overflow: hidden;
`;

const Logo = styled.img``;

const Title = styled(Link)`
    text-decoration: none;
    color: white;
    white-space: nowrap;
    font-weight: 800;
    font-size: 20px;
    line-height: 20px;
    margin-right: auto;
    display: flex;
    align-items: center;
`;

const linkStyles = css`
    white-space: nowrap;
    margin: 0 10px;
    display: flex;
    text-decoration: none;
    justify-content: center;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 24px;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    position: relative;
    transition: 0.2s;
    color: ${({ color }) => {
        // if (color === 'active') return '#ffffff';
        if (color === 'info') return '#7795f8';
        return '#a2a7ae';
    }};
    :after {
        transition: 0.2s;
        content: '';
        position: absolute;
        top: -32px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: white;
        opacity: 0;
    };
    img {
        margin-right: 4px;
    }
    ${({ animation }) => {
        if (animation === 'color') {
            return `
                &:hover {
                    opacity: 0.65;
                }
            `;
        } else if (animation === 'line') {
            return `
                &:hover {
                    color: #fff;
                    &:after {
                        opacity: 1;
                    }
                };
            `;
        }
    }};
    @media (max-width: 800px) {
        display: none;
    };
`;

const StyledLink = styled(Link)`${linkStyles}`;
const RawLink = styled.a`${linkStyles}`;

const Langs = styled(BaseLangs)`
    padding-left: 20px;
    border-left: 1px solid #474A55;
    @media (max-width: 800px) {
        border-left: none;
    };
`;

export default Header;
