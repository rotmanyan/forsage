import React from 'react';
import styled from 'styled-components';
import Particle28Src from '../../images/particles/particle28.svg';
import Particle29Src from '../../images/particles/particle29.svg';
import Particle30Src from '../../images/particles/particle30.svg';

const Particles = () => (
    <>
        <Particle1 src={Particle28Src} />
        <Container>
            <Particle2 src={Particle29Src} />
            <Particle3 src={Particle30Src} />
        </Container>
    </>
);

const Particle1 = styled.img`
    position: absolute;
    bottom: 0;
    right: 40%;
`;

const Particle2 = styled.img`
    position: absolute;
    bottom: 0;
    left: 0;
`;

const Particle3 = styled.img`
    position: absolute;
    bottom: -15px;
    left: 0;
`;

const Container = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    overflow: hidden;
    width: 100px;
    height: 155px;
`;

export default Particles;
