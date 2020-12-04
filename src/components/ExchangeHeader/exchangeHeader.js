import React from 'react';
import styled from 'styled-components';
import {Link as UrlLink} from 'gatsby-plugin-intl';

import ContentWrapper from '../ContentWrapper/contentWrapper';
import MobileMenu from '../mobileMenu/mobileMenu';

import LogoSrc from '../../images/logo2.svg';
import EmailIcon from  '../../images/support-email.svg';

const ExchangeHeader = ({ links }) => (
    <Container id='header'>
        <ContentWrapper justifyContent='space-between' alignItems='center' padding='narrow'>
            <UrlLink to='/'>
                <Logo src={LogoSrc} />
            </UrlLink>
            <Email>
                <Icon src={EmailIcon} />
                support@forsage.fi
            </Email>
            <MobileMenu links={links} />
        </ContentWrapper>
    </Container>
);

const Container = styled.header`
    overflow: hidden;
    background-color: transparent;
    width: 100%;
    height: 80px;
    box-sizing: border-box;
    border-bottom: 1px solid #eeeeee33;
    top: 0;
    display: flex;
    justify-content: center;
`;

const Logo = styled.img`
    width: 95px;
    height: 28px;
`;

const Email = styled.p`
    font-weight: bold;
    font-size: 0.75rem;
    line-height: 0.75rem;
    letter-spacing: 1px;
    text-decoration: underline;
    color: #1BB978;
    display: flex;
    align-items: center;
    @media (max-width: 744px) {
        display: none;
    }
`;

const Icon = styled.img`
    margin-right: 10px;
`;

export default ExchangeHeader;
