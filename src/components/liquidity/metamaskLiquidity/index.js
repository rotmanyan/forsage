import React, { useState } from "react"
import { Container, Email, Icon } from "./styles"

import useCurrencies from "../../../hooks/useCurrencies"

import { EXCHANGE_LINKS } from "../../../constants/links"
import {
  METAMASK_PROGRESS,
  METAMASK_PROGRESS_TITLES,
} from "../../../constants/liquidityMode"

import Layout from "../../layout"
import { AddLiquidityButton, BuyTokenButton } from "../../Header/buttons"
import ContentWrapper from "../../ContentWrapper/contentWrapper"
import Progress from "../../Progress/progress"
import { Amount } from "../manualLiquidity/Amount"

import EmailIcon from "../../../images/support-email.svg"

export const MetamaskLiquidity = ({ setMode }) => {
  const {
    currencies: { USER_CURRENCIES, CURRENCIES },
  } = useCurrencies()
  const [amount, setAmount] = useState(0)
  const [userCurrency, setUserCurrency] = useState(
    USER_CURRENCIES.find(x => x.name === "ETH")
  )
  const [targetCurrency, setTargetCurrency] = useState(CURRENCIES[0])

  const valueChangeHandler = value => setAmount(+value)

  const backClickHandler = () => setMode(undefined)

  const value = {
    amount,
    valueChangeHandler,
    userCurrency,
    setUserCurrency,
    targetCurrency,
    setTargetCurrency,
    amountChangeHandler: setAmount,
    goToPaymentSelect: backClickHandler,
  }
  return (
    <Layout
      hideFooter
      theme="dark"
      headerProps={{
        logo: "black",
        links: EXCHANGE_LINKS,
        showBalance: true,
        buttons: <BuyTokenButton $style='green'/>,
      }}
    >
      <Container>
        <ContentWrapper alignItems="center" column>
          <Progress
            dots={[...Object.values(METAMASK_PROGRESS)]}
            titles={METAMASK_PROGRESS_TITLES}
            step={METAMASK_PROGRESS.AMOUNT}
          />
          <Amount value={value} />
        </ContentWrapper>
      </Container>
      <Email>
        <Icon src={EmailIcon} />
        support@forsage.fi
      </Email>
    </Layout>
  )
}
