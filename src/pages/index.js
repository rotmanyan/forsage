import React from "react"
import Layout from '../components/layout';
import { LiquidityMiningButton, BuyTokenButton } from '../components/Header/buttons';

import MainBlock from '../components/MainBlock/mainBlock';
import ExchangeBlock from '../components/ExchangeBlock/exchangeBlock';
import FaqBlock from '../components/FaqBlock/faqBlock';
import FeaturesBlock from '../components/FeaturesBlock/featuresBlock';
import FlexibilityBlock from '../components/FlexibilityBlock/flexibilityBlock';
import ProofBlock from '../components/ProofBlock/proofBlock';

import { ROOT_LINKS } from '../constants/links';

export default () => (
    <Layout
      theme='dark'
      headerProps={{
        animateHeader: true,
        links: ROOT_LINKS,
        buttons: (<>
          <LiquidityMiningButton $style='blue' />
          <BuyTokenButton $style='green'/>
        </>)
      }}>
      <MainBlock />
      <ProofBlock />
      <FeaturesBlock />
      <ExchangeBlock />
      <FlexibilityBlock />
      <FaqBlock />
    </Layout>
);
