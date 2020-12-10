import React, { useState } from "react"
import { Container, Email, Icon } from "./styles"

import useCurrencies from "../../../hooks/useCurrencies"

import { EXCHANGE_LINKS } from "../../../constants/links"
import {
  METAMASK_PROGRESS,
  METAMASK_PROGRESS_TITLES,
} from "../../../constants/progress"

import Layout from "../../layout"
import { AddLiquidityButton } from "../../Header/buttons"
import ContentWrapper from "../../ContentWrapper/contentWrapper"
import Progress from "../../Progress/progress"
import Amount from "../../exchange/Amount/metamaskAmount"

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

  return (
    <Layout
      hideFooter
      theme="dark"
      headerProps={{
        logo: "black",
        links: EXCHANGE_LINKS,
        showBalance: true,
        buttons: <AddLiquidityButton $style="blue" />,
      }}
    >
      <Container>
        <ContentWrapper alignItems="center" column>
          <Progress
            dots={[...Object.values(METAMASK_PROGRESS)]}
            titles={METAMASK_PROGRESS_TITLES}
            step={METAMASK_PROGRESS.AMOUNT}
          />
          {/*<Amount*/}
          {/*  amount={amount}*/}
          {/*  setAmount={valueChangeHandler}*/}
          {/*  userCurrency={userCurrency}*/}
          {/*  setUserCurrency={setUserCurrency}*/}
          {/*  targetCurrency={targetCurrency}*/}
          {/*  setTargetCurrency={setTargetCurrency}*/}
          {/*  backClickHandler={backClickHandler}*/}
          {/*/>*/}
        </ContentWrapper>
      </Container>
      <Email>
        <Icon src={EmailIcon} />
        support@forsage.fi
      </Email>
    </Layout>
  )
}
