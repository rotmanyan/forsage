import React from 'react';
import styled from 'styled-components';
import ContentWrapper from '../ContentWrapper/contentWrapper';
import AppScreenshot from '../../images/app-screenshot.svg';

const ProofBlock = () => (
    <Container>
        <ContentWrapper justifyContent='center' padding='none' >
            <Image src={AppScreenshot} />
        </ContentWrapper>
    </Container>
);

const Container = styled.div`
    max-height: 534px;
    display: flex;
    align-items: center;
    background-color: #1D212E;
`;

const Image = styled.img`
    max-width: 100%;
`;

export default ProofBlock;
