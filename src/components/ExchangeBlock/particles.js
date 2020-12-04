import React from 'react';
import styled from 'styled-components';
import Particle1Src from '../../images/particles/particle14.svg';
import Particle2Src from '../../images/particles/particle15.svg';
import Particle3Src from '../../images/particles/particle16.svg';

const Particles = () => (
    <>
        <Particle1 src={Particle1Src} />
        <Particle2 src={Particle2Src} />
        <Particle3 src={Particle3Src} />
    </>
);

const Particle1 = styled.img`
    position: absolute;
    right: 0;
`;

const Particle2 = styled.img`
    position: absolute;
    top: 175px;
    right: 0;
`;

const Particle3 = styled.img`
    position: absolute;
    bottom: -50px;
    right: 50%;
    transform: translateX(50%);
    z-index: 100;
`;

export default Particles;
