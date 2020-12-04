import React from 'react';
import styled from 'styled-components';
import ContentWrapper from '../ContentWrapper/contentWrapper';
import ExchangeScreenshot from '../../images/exchange-screenshot.svg';
import Particles from './particles';
import { FormattedMessage } from 'gatsby-plugin-intl';

const ExchangeBlock = () => (
    <Container>
        <Particles />
        <ContentWrapper column>
            <Title><FormattedMessage id='main.exchange.header' /></Title>
            <Text color='gray' restricted>
                <FormattedMessage id='main.exchange.subHeader' />
            </Text>
            <BlockWrapper>
                <Image src={ExchangeScreenshot} />
                <List>
                    <TileTitle><FormattedMessage id='main.exchange.1' /></TileTitle>
                    <Text color='lightgray'><FormattedMessage id='main.exchange.1.text' /></Text>
                    <TileTitle><FormattedMessage id='main.exchange.2' /></TileTitle>
                    <Text color='lightgray'><FormattedMessage id='main.exchange.2.text' /></Text>
                    <TileTitle><FormattedMessage id='main.exchange.3' /></TileTitle>
                    <Text color='lightgray'><FormattedMessage id='main.exchange.3.text' /></Text>
                </List>
            </BlockWrapper>
        </ContentWrapper>
    </Container>
);

const Container = styled.div`
    position: relative;
    display: flex;
    background-color: #1d212e;
`;

const Title = styled.h2`
    margin: 35px 0 0;
`;

const TileTitle = styled.h3`
    &:not(:first-child) {
        position: relative;
        &:after {
            content: '';
            position: absolute;
            top: -16px;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: #9092A7;
        }
    }
    @media (max-width: 760px) {
        margin-top: 64px;
        margin-bottom: 10px;
        &:after {
            top: -39px !important;
        }
    }
`;

const Text = styled.p`
    max-width: ${({ restricted }) => (restricted ? '50%' : 'auto')};
    color: ${({ color }) => (color === 'lightgray' ? '#9092A7' : '#A2A7AE') };
    @media (max-width: 760px) {
        max-width: 100%;
    }
`;

const Image = styled.img`
    max-height: 100%;
    max-width: 100%;
    margin-left: -280px;
    // margin-left: -320px;
    margin-right: 70px;
    box-shadow: 2px 2px 10px #101010;
    @media (max-width: 760px) {
        margin: 0;
        // margin: 0 0 40px;
    }
`;

const BlockWrapper = styled.div`
    display: flex;
    margin-top: 40px;
    align-items: flex-start;
    margin-bottom: 100px;
    @media (max-width: 760px) {
        flex-direction: column;
    }
`;

const List = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 290px;
    margin: 0 auto;
    @media (max-width: 760px) {
        max-width: none;
    }
    // margin-left: auto;
`;

export default ExchangeBlock;
