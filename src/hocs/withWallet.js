import React, { useState } from 'react';

import { PURCHASE_MODE } from '../constants/purchaseMode';

import PaymentSelect from '../components/PaymentSelect/paymentSelect';

const defaultOptions = {
  only: [...Object.values(PURCHASE_MODE)]
};

const withWallet = (Component, options = defaultOptions) => props => {
  const [ mode, setMode ] = useState();

  if (mode) {
    return <Component mode={mode} setMode={setMode} {...props} />;
  }

  return <PaymentSelect mode={mode} setMode={setMode} options={options} />;
}

export default withWallet;
