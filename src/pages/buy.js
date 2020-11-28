import React from 'react';

import withWallet from '../hocs/withWallet';
import { PURCHASE_MODE } from '../constants/purchaseMode';

import ManualPurchase from '../components/purchase/manualPurchase';
import MetamaskPurchase from '../components/purchase/metamaskPurchase';

const Buy = props => {
    if (props.mode === PURCHASE_MODE.MANUAL) return <ManualPurchase {...props} />;
    if (props.mode === PURCHASE_MODE.METAMASK) return <MetamaskPurchase {...props} />;
    return null;
}

export default withWallet(Buy);