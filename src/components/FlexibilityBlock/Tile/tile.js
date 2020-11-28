import React from 'react';
import styled from 'styled-components';

const Tile = ({ img, color, children }) => (
    <Container color={color}>
        <Image src={img} />
        <Text>{children}</Text>
    </Container>
);

const Container = styled.div`
    z-index: 200;
    border-radius: 8px;
    margin-bottom: 20px;
    display: flex;
    box-sizing: border-box;
    padding: 20px 30px 30px;
    flex-direction: column;
    min-height: 179.25px;
    background-color: ${({ color }) => {
        switch (color) {
            case 'green': return '#1bb978';
            case 'red': return '#ff5454';
            case 'blue': return '#7795f8';
            case 'violet': return '#9640ff';
            case 'orange': return '#ff9840';
            case 'pink': return '#ff40d5';
            default: return 'white';
        }
    }};
`;

const Image = styled.img`
    width: 64px;
    height: 64px;
`;

const Text = styled.p`
    font-size: 14px;
    line-height: 24px;
    color: white;
`;

export default Tile;
