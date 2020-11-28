import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';

import Layout from '../components/layout';
import ContentWrapper from '../components/ContentWrapper/contentWrapper';
// import MenuLink from '../components/MenuLink/menuLink';
import { LiquidityMiningButton, BuyTokenButton } from '../components/Header/buttons';

import WhitePaperLogoSrc from '../images/whitepaper-logo.svg';
import WhitePaperSrc from '../images/whitepaper-back.svg';
// import InfoIcon from '../images/info.svg';
// import Formula1 from '../images/formulas/formula1.svg';
// import Formula2 from '../images/formulas/formula2.svg';
// import Formula3 from '../images/formulas/formula3.svg';
// import Formula4 from '../images/formulas/formula4.svg';
// import Formula5 from '../images/formulas/formula5.svg';
// import Formula6 from '../images/formulas/formula6.svg';
// import Formula7 from '../images/formulas/formula7.svg';
// import Formula8 from '../images/formulas/formula8.svg';
// import Formula9 from '../images/formulas/formula9.svg';
// import Formula10 from '../images/formulas/formula10.svg';
// import Formula11 from '../images/formulas/formula11.svg';
// import Formula12 from '../images/formulas/formula12.svg';
// import Formula13 from '../images/formulas/formula13.svg';
// import Formula14 from '../images/formulas/formula14.svg';
// import Formula15 from '../images/formulas/formula15.svg';
// import Formula16 from '../images/formulas/formula16.svg';
// import Formula17 from '../images/formulas/formula17.svg';
// import Formula18 from '../images/formulas/formula18.svg';
// import Formula19 from '../images/formulas/formula19.svg';

import { WHITEPAPER_LINKS } from '../constants/links';
import {LANGS} from '../constants/languages';
import ZhWhitepaper from '../components/whitepapers/zhWhitepaper';
import EnWhitepaper from '../components/whitepapers/enWhitepaper';

import zhWhitepaper from '../../static/whitepaper_cc.pdf';
import enWhitepaper from '../../static/whitepaper_en.pdf';

// const content = {
//     [LANGS.CH]: <ZhWhitepaper />,
//     [LANGS.EN]: <EnWhitepaper />,
// }

const content = {
    [LANGS.CH]: zhWhitepaper,
    [LANGS.EN]: enWhitepaper,
}


const Whitepaper = () => {
    const { locale } = useIntl();

    // useEffect(() => {
    //     const a = document.createElement('a');
    //     a.href = content[locale];
    //     a.target = '_blank';
    //     a.click();
    //     window.history.back();
    // }, []);

    return null;

    // return (
    //     <Layout
    //         theme='white'
    //         hideFooter
    //         headerProps={{
    //             links: WHITEPAPER_LINKS,
    //             buttons: (<>
    //                 <LiquidityMiningButton $style='blue' disabled />
    //                 <BuyTokenButton $style='green' />
    //             </>)
    //         }}>
    //         <Wrapper>
    //             <StyledContentWrapper column padding='default'>
    //                 <LogoWrapper>
    //                     <PageHeader><FormattedMessage id='whitepaper' /></PageHeader>
    //                     <LogoBack src={WhitePaperSrc} />
    //                     <WhitepaperLogo src={WhitePaperLogoSrc} />
    //                 </LogoWrapper>
    //                 { content[locale] }
    //             </StyledContentWrapper>
    //         </Wrapper>
    //     </Layout>
    // );
}

const StyledContentWrapper = styled(ContentWrapper)`
    padding-bottom: 100px;
    margin-top: 80px;
    color: #2F2F2E;
    font-weight: normal;
    font-size: 16px;
    line-height: 36px;
    color: #2F2F2E;
    ul, ol {
        padding-left: 24px;
    }
`;

const Wrapper = styled.div`
    display: flex;
`;

const LogoWrapper = styled.div`
    width: 100%;
    display: flex;
    position: relative;
`;

const PageHeader = styled.h1`
    position: absolute;
    top: 0;
    left: 0;
    border-bottom: 1px solid black;
    width: 100%;
    background-color: transparent;
    margin: 0;
    padding: 26px 0;
    ::first-letter {
        text-transform: capitalize;
    }
`;

const LogoBack = styled.img`
    margin: 0 auto;
    max-width: 100%;
    min-height: 350px;
`;

const WhitepaperLogo = styled.img`
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
    max-width: 100%;
`;

export default Whitepaper;
