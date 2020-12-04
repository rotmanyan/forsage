import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'gatsby-plugin-intl';

import ContentWrapper from '../ContentWrapper/contentWrapper';
import ArrowRightIcon from '../../images/arrow-right.svg';
import Particles from './particles';

import FaqItems from './FAQ.json';

const FaqBlock = () => (
    <Container id='faq-block'>
        <Particles />
        <StyledContentWrapper column>
            <PageTitle><FormattedMessage id={`main.faq.header`} /></PageTitle>
            {
                FaqItems.map(({ title, text }, i) => (
                    <ItemWrapper key={i}>
                        <Title><FormattedMessage id={title} defaultMessage=' ' /></Title>
                        <Text>
                            <FormattedMessage id={text} defaultMessage=' ' />
                            {/* { url && <Link href='#'>Learn More</Link> } */}
                        </Text>
                    </ItemWrapper>
                ))
            }
            {/* <ViewMoreLink>
                View More
                <ArrowRight src={ArrowRightIcon} />
            </ViewMoreLink> */}
        </StyledContentWrapper>
    </Container>
);

const StyledContentWrapper = styled(ContentWrapper)`
    padding-top: 40px;
    padding-bottom: 40px;
    // padding: 40px 0;
`;

const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    background: linear-gradient(180deg, #232836 19.34%, #1D212E 50%);
`;

const ItemWrapper = styled.div`
    display: flex;
    background-color: rgba(55, 56, 75, 0.3);
    border-radius: 8px;
    margin: 10px 0;
    box-sizing: border-box;
    padding: 19px 97px 19px 64px;
    flex-direction: column;
    transition: 0.2s;
    &:hover {
        background-color: #32384B;
    }
    @media (max-width: 760px) {
        padding: 20px 30px;
    }

`;

const Title = styled.h4`
    font-weight: bold;
    font-size: 14px;
    line-height: 14px;
    color: white;
    margin: 0px 0px 5px;
`;

const PageTitle = styled.h2`
    font-weight: bold;
    font-size: 30px;
    line-height: 40px;
    color: #FFFFFF;
    text-align: center;
    // margin: 40px 0;
    margin-bottom: 40px;
    @media (max-width: 760px) {
        text-align: left;
    }
`;

const Text = styled.p`
    font-size: 14px;
    line-height: 24px;
    color: #A2A7AE;
    margin: 0;
`;

const Link = styled.a`
    font-size: 14px;
    line-height: 24px;
    color: #5466a1;
`;

const ViewMoreLink = styled.a`
    font-weight: bold;
    font-size: 10px;
    line-height: 10px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #7795F8;
    display: flex;
    line-height: 16px;
    // margin: 40px auto;
    margin: 20px auto 10px;

    @media (max-width: 760px) {
        display: none;
    }
    // align-items: center;
`;

const ArrowRight = styled.img`
    margin-left: 10px;
    width: 14px;
    height: 14px;
`;

export default FaqBlock;
