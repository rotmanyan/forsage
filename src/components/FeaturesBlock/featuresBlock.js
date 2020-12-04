import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'gatsby-plugin-intl';

import ContentWrapper from '../ContentWrapper/contentWrapper';
import Feature from './Feature/feature';

import Particles from './particles';
import DataAnalyticsIcon from '../../images/data-analytics.svg';
import PinIcon from '../../images/pin.svg';
import FileIcon from '../../images/file.svg';
import InfoIcon from '../../images/info-green.svg';
import FeaturesIcon from '../../images/features.svg';

const FeaturesBlock = () => (
    <Container>
        <Particles />

        <StyledWrapper>
            <Info>
                <h5><FormattedMessage id='main.feature.liquidMining' /></h5>
                <p>
                    <FormattedMessage id='main.feature.liquidMining1' />
                </p>
            </Info>
        </StyledWrapper>
        <StyledWrapper justifyContent='space-between'>
            <Feature
                image={DataAnalyticsIcon}
                title={<FormattedMessage id='main.feature.1' />}
                text={<FormattedMessage id='main.feature.1.text' />}
            />
            <Feature
                image={PinIcon}
                title={<FormattedMessage id='main.feature.2' />}
                text={<FormattedMessage id='main.feature.2.text' />}
            />
            <Feature
                image={FileIcon}
                title={<FormattedMessage id='main.feature.3' />}
                text={<FormattedMessage id='main.feature.3.text' />}
            />
        </StyledWrapper>
    </Container>
);

const Info = styled.div`
    background: #1bb9781a;
    border-radius: 8px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    padding: 24px 224px 22px 82px;
    margin: 70px 0 200px;
    box-sizing: border-box;
    @media (max-width: 600px) {
        margin-bottom: 100px;
        padding-top: 240px;
        padding-right: 22px;
        :after {
            content: none;
            top: 20px;
            right: 50% !important;
            transform: translateX(60%);
        }
        :before {
            top: 240px !important;
        }
    }

    :before {
        content: url(${InfoIcon});
        position: absolute;
        left: 24px;
        top: 24px;
    }

    :after {
        content: url(${FeaturesIcon});
        position: absolute;
        right: 0;
    }

    h5 {
        font-weight: 600;
        font-size: 1.25rem;
        line-height: 1.25rem;
        color: #FFFFFF;
        margin: 0 0 0.625rem;
    }
    p {
        font-size: 0.875rem;
        line-height: 1.5rem;
        color: #FFFFFF;
        margin: 0;
    }
`;

const Container = styled.div`
    position: relative;
    min-height: 600px;
    display: flex;
    align-items: center;
    padding: 40px 0 160px;
    /* padding: 40px 0; */
    box-sizing: border-box;
    background-color: #232836;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    @media (max-width: 600px) {
        padding: 0 0 60px;
    }
`;

const StyledWrapper = styled(ContentWrapper)`
    box-sizing: border-box;
    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

export default FeaturesBlock;
