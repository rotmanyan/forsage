import React from 'react';
import styled from 'styled-components';
import { changeLocale, useIntl } from 'gatsby-plugin-intl';

import { LANGS } from '../../constants/languages';

import ChinaFlag from '../../images/countries/china.svg';
import UkFlag from '../../images/countries/uk.svg';

const Langs = ({ className }) => {
  const { locale } = useIntl();
  const changeLang = lang => () => changeLocale(lang);

  return (
    <Container className={className}>
      <img className={locale !== LANGS.CH ? 'muted' : undefined} onClick={changeLang(LANGS.CH)} src={ChinaFlag} />
      <img className={locale !== LANGS.EN ? 'muted' : undefined} onClick={changeLang(LANGS.EN)} src={UkFlag} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  /* @media screen and (max-width: 800px) {
    display: none;
  } */

  img {
    cursor: pointer;
    height: 24px;
    :not(:first-of-type) {
      margin-left: 16px;
    }
  }
  img.muted {
    filter: grayscale(100%);
  }
`;

export default Langs;
