import React from 'react';
import styled from 'styled-components';

import Particle17Src from '../../images/particles/particle17.svg'
import Particle18Src from '../../images/particles/particle18.svg'
import Particle19Src from '../../images/particles/particle19.svg'
import Particle20Src from '../../images/particles/particle20.svg'
import Particle21Src from '../../images/particles/particle21.svg'

const Particles = () => (
    <>
        <Particle1 src={Particle17Src} />
        <Particle2 src={Particle18Src} />
        <Particle3 src={Particle19Src} />
        <Particle4 src={Particle20Src} />
        <Particle5 src={Particle21Src} />
    </>
);

const Particle1 = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
`;

const Particle2 = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
`;

const Particle3 = styled.img`
    position: absolute;
    bottom: 100px;
    left: 280px;
`;

const Particle4 = styled.img`
    position: absolute;
    left: 0;
    top: 45%;
    z-index: 1;
`;

const Particle5 = styled.img`
    position: absolute;
    left: 0;
    bottom: 0;
`;

export default Particles;
