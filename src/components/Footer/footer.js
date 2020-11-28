import React from 'react';
import styled, { css } from 'styled-components';
import { FormattedMessage, Link as BaseLink, useIntl } from 'gatsby-plugin-intl';

import {LANGS} from '../../constants/languages';

import ContentWrapper from '../ContentWrapper/contentWrapper';

import TwitterIcon from '../../images/twitter.svg';
import MessageIcon from '../../images/message.svg';
import MediumIcon from '../../images/medium.svg';
import CloudIcon from '../../images/cloud.svg';
import FacebookIcon from '../../images/facebook.svg';
import LinkedinIcon from '../../images/linkedin.svg';
import Particles from './particles';
import ExchangeButton from '../ExchangeButton/exchangeButton';


import zhWhitepaper from '../../../static/whitepaper_cc.pdf';
import enWhitepaper from '../../../static/whitepaper_en.pdf';

const whitepapers = {
    [LANGS.CH]: zhWhitepaper,
    [LANGS.EN]: enWhitepaper,
}

const Footer = () => {
    const { locale } = useIntl();

    return (
        <Container>
            <Particles />
            <StyledContentWrapper padding='narrow' alignItems='center'>
                <Block>
                    <Text>
                        &copy;Forsage 2020
                    </Text>
                </Block>
                <Block justify='center' withMargin>
                    <SocialButton disabled><img alt='' src={TwitterIcon} /></SocialButton>
                    <SocialButton disabled><img alt='' src={MessageIcon} /></SocialButton>
                    <SocialButton disabled><img alt='' src={MediumIcon} /></SocialButton>
                    <SocialButton disabled><img alt='' src={CloudIcon} /></SocialButton>
                    <SocialButton disabled><img alt='' src={FacebookIcon} /></SocialButton>
                    <SocialButton disabled><img alt='' src={LinkedinIcon} /></SocialButton>
                </Block>
                <Block>
                    {/* <ExchangeButton>whitepaper</ExchangeButton>
                    <ExchangeButton>buy</ExchangeButton> */}
                    <RawLink href={whitepapers[locale]} target='_blank' marginLeft='auto'><FormattedMessage id='whitepaper' /></RawLink>
                    <Link to='/buy'><FormattedMessage id='buyToken' /></Link>
                    {/* <Text marginLeft='auto'><FormattedMessage id='exchange' /></Text> */}
                </Block>
            </StyledContentWrapper>
        </Container>
    );
}

const StyledContentWrapper = styled(ContentWrapper)`
    @media (max-width: 860px) {
        flex-direction: column;
    }
`;

const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    min-height: 124px;
    background-color: #1D212F;
`;

const Block = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: nowrap;
    justify-content: ${({ justify = 'normal'}) => justify};
    @media (max-width: 860px) {
        justify-content: center;
        ${
            ({ withMargin }) => (
                withMargin
                ? 'margin: 30px 0 40px;'
                : ''
            )
        }
    }
    @media (max-width: 540px) {
        justify-content: space-around;
    }
`;

const SocialButton = styled.button`
    border-radius: 50%;
    width: 48px;
    height: 48px;
    border: none;
    margin: 0 5px;
    padding: 0;
    display: flex;
    justify-content: center;
`;

const Text = styled.p`
    font-size: 12px;
    line-height: 12px;
    color: #A2A7AE;
    margin-left: ${({ marginLeft = 0 }) => marginLeft};
    @media (max-width: 860px) {
        margin: 12px 10px;
        min-width: 80px;    
        text-align: center;
        // margin: 0 auto;
    }
`;

const linkStyles = css`
    line-height: 12px;
    font-size: 10px;
    line-height: 24px;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: bold;
    text-decoration: none;
    color: #A2A7AE;
    margin-left: ${({ marginLeft }) => marginLeft || '20px'};
    transition: 0.3s;
    cursor: pointer;
    :hover {
        color: white;
    }
    @media (max-width: 860px) {
        margin: 12px 10px;
        min-width: 80px;    
        text-align: center;
        // margin: 0 auto;
    }
`;

const RawLink = styled.a`${linkStyles}`;

const Link = styled(BaseLink)`${linkStyles}`;

export default Footer;
