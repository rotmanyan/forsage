import React from 'react';
import styled from 'styled-components';
import ContentWrapper from '../ContentWrapper/contentWrapper';
import Tile from './Tile/tile';
import Particles from './particles';

import AnalysisIcon from '../../images/analysis.svg';
import AnalyticsIcon from '../../images/analytics.svg';
import BuyIcon from '../../images/buy.svg';
import DollarDocIcon from '../../images/dollar-doc.svg';
import WalletIcon from '../../images/wallet.svg';
import WeatherIcon from '../../images/weather.svg';
import { FormattedMessage } from 'gatsby-plugin-intl';


const FlexibilityBlock = () => (
    <Container>
        <Particles />
        <StyledContentWrapper>
            <Column>
                <Title><FormattedMessage id='main.flex.header' /></Title>
                <Text><FormattedMessage id='main.flex.subHeader' /></Text>
            </Column>
            <Column>
                <Tile img={AnalyticsIcon} color='green'><FormattedMessage id='main.flex.1' /></Tile>
                <Tile img={AnalysisIcon} color='blue'><FormattedMessage id='main.flex.2' /></Tile>
                <Tile img={BuyIcon} color='orange'><FormattedMessage id='main.flex.3' /></Tile>
            </Column>
            <Column>
                <Tile img={DollarDocIcon} color='red'><FormattedMessage id='main.flex.4' /></Tile>
                <Tile img={WalletIcon} color='violet'><FormattedMessage id='main.flex.5' /></Tile>
                <Tile img={WeatherIcon} color='pink'><FormattedMessage id='main.flex.6' /></Tile>
            </Column>
        </StyledContentWrapper>
    </Container>
);

const StyledContentWrapper = styled(ContentWrapper)`
    @media (max-width: 760px) {
        flex-direction: column;
    }
`;

const Container = styled.div`
    display: flex;
    min-height: 760px;
    background-color: #232836;
    padding-top: 60px;
    position: relative;
`;

const Column = styled.div`
    margin: 0 10px;
    width: 100%;
    &:first-of-type {
        max-width: 300px;
    }
    @media (max-width: 760px) {
        &:first-of-type {
            max-width: none;
        }
    }
`;

const Title = styled.h2`
    font-weight: bold;
    font-size: 30px;
    line-height: 40px;
    margin: 0;
`;

const Text = styled.p`
    font-size: 14px;
    line-height: 24px;
    color: #A2A7AE;
    @media (max-width: 760px) {
        margin: 20px 0;
    }
`;

export default FlexibilityBlock;
