import React from 'react';
import styled from 'styled-components';

const Feature = ({ image, title, text }) => (
    <Container>
        <Image src={image} />
        <Title>{title}</Title>
        <Text>{text}</Text>
    </Container>
);

const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 230px;
    padding: 0 10px;
    @media (max-width: 600px) {
        max-width: none;
        &:not(:last-child) {
            margin-bottom: 40px;
        }
    }
`;

const Title = styled.h3`
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
    color: white;
    @media (max-width: 600px) {
        margin: 10px 0;
    }
`;

const Text = styled.p`
    font-size: 14px;
    line-height: 24px;
    color: #A2A7AE;
    margin: 0;
    // @media (max-width: 600px) {
    //     margin-bottom: 40px;
    // }
`;

const Image = styled.img`
    width: 64px;
    height: 64px;
`;

export default Feature;
