import React, { useEffect, useContext } from 'react';
import { navigate } from 'gatsby-plugin-intl';
import { useLocation } from '@reach/router';

import { TokenServiceContext } from '../contexts/tokenServiceContext';
import { EXCHANGE_LINKS } from '../constants/links';

import Layout from '../components/layout';

export const withPayment = Component => props => {
  const location = useLocation();

  useEffect(() => {
    navigate('/payment_method', { state: { redirect: location.pathname }});
  }, []);

  return <Layout
    hideFooter
    theme='dark'
    headerProps={{ logo: 'black', links: EXCHANGE_LINKS }}
  />;
}
