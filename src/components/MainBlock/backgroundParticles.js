import React from 'react';
import styled from 'styled-components';
import BigParticleSrc from '../../images/particles/big-shape.svg';
import Particle2Src from '../../images/particles/particle2.svg';
import Particle3Src from '../../images/particles/particle3.svg';
import Particle4Src from '../../images/particles/particle4.svg';
import Particle5Src from '../../images/particles/particle5.svg';
import Particle6Src from '../../images/particles/particle6.svg';
import Particle7Src from '../../images/particles/particle7.svg';
import Particle8Src from '../../images/particles/particle8.svg';
import Particle9Src from '../../images/particles/particle9.svg';
import Particle10Src from '../../images/particles/particle10.svg';

const BackgroundParticles = () => (
    <>
        <BigParticle src={BigParticleSrc} />
        <Particle2 src={Particle2Src} />
        <Particle3 src={Particle3Src} />
        <Particle4 src={Particle4Src} />
        <Particle5 src={Particle5Src} />
        <Particle6 src={Particle6Src} />
        <Particle7 src={Particle7Src} />
        <Particle8 src={Particle8Src} />
        <Particle9 src={Particle9Src} />
        <Particle10 src={Particle10Src} />
    </>
);

const BigParticle = styled.img`
    position: absolute;
    top: 0;
    // right: 90%;
    left: -100px;
    // left: -10%;
`;

const Particle2 = styled.img`
    position: absolute;
    top: 0;
    left: 215px;
`;

const Particle3 = styled.img`
    position: absolute;
    left: 400px;
    top: 0;
`;

const Particle4 = styled.img`
    position: absolute;
    top: 100px;
    right: 265px;
`;

const Particle5 = styled.img`
    position: absolute;
    bottom: 100px;
    // right: 186px;
    right: 138px;
`;

const Particle6 = styled.img`
    position: absolute;
    bottom: 135px;
    // right: 110px;
    right: 75px;
`;

const Particle7 = styled.img`
    position: absolute;
    top: 135px;
    left: 374px;
    // left: 406px;
`;

const Particle8 = styled.img`
    position: absolute;
    bottom: 103px;
    left: 263px;
`;

const Particle9 = styled.img`
    position: absolute;
    bottom: -143px;
    left: 0px;
`;

const Particle10 = styled.img`
    position: absolute;
    bottom: -73px;
    right: 0px;
`;

export default BackgroundParticles;
