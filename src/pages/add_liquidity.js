import React from 'react';

import withWallet from '../hocs/withWallet'
import { LIQUIDITY_MODE } from '../constants/liquidityMode';

import { MetamaskLiquidity} from '../components/liquidity/metamaskLiquidity'
import { ManualLiquidity} from '../components/liquidity/manualLiquidity';

const Liquidity = props => {
  if (props.mode === LIQUIDITY_MODE.MANUAL) return <ManualLiquidity {...props} />;
  if (props.mode === LIQUIDITY_MODE.METAMASK) return <MetamaskLiquidity {...props} />;
  return null;
}

export default withWallet(Liquidity);