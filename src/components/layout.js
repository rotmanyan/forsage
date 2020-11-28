import React from "react"
import styled from "styled-components"
import "./reset.css"

import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import Notifications from '../components/Notifications/Notifications';

const Layout = ({
    children,
    hideFooter,
    theme,
    headerProps: {
      animateHeader,
      logo,
      links,
      buttons,
      showBalance,
    } = {}
  }) => {
  return (
    <LayoutWrapper id='root' theme={theme}>
      <Notifications />
      <Header
        animate={animateHeader}
        links={links}
        logo={logo}
        buttons={buttons}
        showBalance={showBalance}
      />
      { children }
      { !hideFooter && <Footer /> }
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: ${({ theme }) => (theme === 'dark' ? '#1D212E' : 'white' )};
  color: ${({ theme }) => (theme === 'dark' ? 'white' : 'black' )};
  width: 100%;
  min-height: 100vh;
`

export default Layout
