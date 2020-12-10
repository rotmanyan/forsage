import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, FormattedMessage, useIntl } from 'gatsby-plugin-intl';

import ContentWrapper from '../ContentWrapper/contentWrapper';
import BackgroundParticles from './backgroundParticles';

import { getDiff, formatDate  } from './helpers';
import { LANGS } from '../../constants/languages';

import Logo from '../../images/logo.svg';
import TimerIcon from '../../images/timer.svg';

const MainBlock = () => {
    const [ timeLeft, setTimeLeft ] = useState(getDiff(new Date()))
    const { locale } = useIntl();

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getDiff(new Date()))
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const ignoreLinkClick = () => navigate('/add_liquidity');

    return (
        <Container>
            <BackgroundParticles />
            <ContentWrapper column alignItems='center'>
                <Title $nowrap={locale === LANGS.CH}>
                    <LogoText>Forsage</LogoText>
                    <FormattedMessage id='main.logoText' />
                </Title>
                <Subheader>
                    <FormattedMessage id='main.logoSubText' />
                </Subheader>
                {
                    timeLeft &&
                    <TimeWrapper><img src={TimerIcon} alt='' />{formatDate(timeLeft)}</TimeWrapper>
                }
                <ButtonWrapper>
                    <Button onClick={ignoreLinkClick} to='/add_liquidity' >
                        <FormattedMessage id='liquidityMining' />
                    </Button>
                    <Button to='/buy' color='success'>
                        <FormattedMessage id='buyToken' />
                    </Button>
                </ButtonWrapper>
            </ContentWrapper>
        </Container>
    );
}

const Container = styled.div`
    background: #232836;
    min-height: 689px; 
    padding-top: 80px;
    display: flex;
    align-items: center;
    position: relative;
`;

const Title = styled.h1`
    line-height: 3.25rem;
    font-size: 2.625rem;
    text-align: center;
    max-width: 37.5rem;
    margin: 1.25rem 0;
    ${ ({ $nowrap }) => $nowrap && `
        @media screen and (min-width: 800px) {
            white-space: nowrap;
        }
    `}
`;

const LogoText = styled.span`
    color: #1BB978;
    /* margin-right: 11px; */
`;

const TimeWrapper = styled.p`
    margin: 0 0 0.625rem;
    font-size: 1.25rem;
    line-height: 1.875rem;
    text-align: center;
    display: flex;
    align-items: center;
    img {
        margin-right: 15px;
        width: 25px;
        height: 30px;
    }
`;

const Subheader = styled.p`
    text-align: center;
    max-width: 25rem;
    margin: 0 0 2.25rem;

    font-size: 1.25rem;
    line-height: 1.875rem;
    text-align: center;

    color: #A2A7AE;
`;

const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;    
    /* margin-top: 117px; */
`;

const Button = styled(Link)`
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 10px;
    width: 100%;
    max-width: 312px;
    height: 48px;
    border: none;
    border-radius: 4px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 10px;
    line-height: 10px;
    letter-spacing: 1px;
    color: ${({ color }) => (color === 'success' ? 'white' : '#7795F8' )};
    background-color: ${({ color }) => (color === 'success' ? '#1BB978' : 'white' )};
    cursor: pointer;
    transition: 0.2s;
    :hover {
        opacity: 0.8;
    }
    ${ ({ $disabled }) => $disabled && `
        background: #A2A7AE;
        opacity: 0.2;
        box-shadow: 0px 2px 4px rgba(100, 100, 100, 0.5);
        color: #FFFFFF;
        cursor: auto;
        user-selet: none;
        :hover {
            opacity: 0.2;
        }
    `}
    @media (max-width: 745px) {
        max-width: 100%;
    }
`;

export default MainBlock;
