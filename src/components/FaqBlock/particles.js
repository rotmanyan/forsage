import React from 'react';
import styled from 'styled-components';
import Particle22Src from '../../images/particles/particle22.svg';
import Particle23Src from '../../images/particles/particle23.svg';
import Particle24Src from '../../images/particles/particle24.svg';
import Particle25Src from '../../images/particles/particle25.svg';
import Particle26Src from '../../images/particles/particle26.svg';
import Particle27Src from '../../images/particles/particle27.svg';

const Particles = () => (
    <>
        <Particle1 src={Particle22Src} />
        <Particle2 src={Particle23Src} />
        <Particle3 src={Particle24Src} />
        <Particle4 src={Particle25Src} />
        <Particle5 src={Particle26Src} />
        <Particle6 src={Particle27Src} />
    </>
);

const Particle1 = styled.img`
    position: absolute;
    top: 50%;
    left: 0;
`;

const Particle2 = styled.img`
    position: absolute;
    top: 50%;
    left: 0;
`;

const Particle3 = styled.img`
    position: absolute;
    top: 50%;
    left: 0;
`;

const Particle4 = styled.img`
    position: absolute;
    top: -205px;
    right: 0;
`;

const Particle5 = styled.img`
    position: absolute;
    top: 30px;
    right: 0;
`;

const Particle6 = styled.img`
    position: absolute;
    top: 50%;
    right: 0;
`;

export default Particles;
