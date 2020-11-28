import React from 'react';
import styled from 'styled-components';

import Particle1Src from '../../images/particles/particle11.svg';
import Particle2Src from '../../images/particles/particle12.svg';
import Particle3Src from '../../images/particles/particle13.svg';

const Particles = () => (
    <>
        <Particle1 src={Particle1Src} />
        <Particle2 src={Particle2Src} />
        <Particle3 src={Particle3Src} />
    </>
);

const Particle1 = styled.img`
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
`;

const Particle2 = styled.img`
    position: absolute;
    right: 0;
    bottom: 70%;
`;

const Particle3 = styled.img`
    position: absolute;
    right: 0;
    bottom: 44%;
`;

export default Particles;
