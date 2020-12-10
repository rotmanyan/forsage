import React from "react"
import styled from "styled-components"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"

import useCurrencies from "../../../hooks/useCurrencies"
import { LiquidityContext } from "../../../contexts/liquidityContext"

import Form from "../../Form/form"
import ExchangeInput from "../../ExchangeInput/exchangeInput"
import ExchangeButton from "../../ExchangeButton/exchangeButton"
import Tabs from "./Tabs"
import ArrowRightSrc from "../../../images/arrow-right2.svg"
import ArrowLeftIcon from "../../../images/arrow-left.svg"

import { navigate } from "gatsby-plugin-intl"

const Amount = () => {
  const {
    currencies: { USER_CURRENCIES },
  } = useCurrencies()

  const {
    amount,
    setAmount,
    setUserCurrency,
    userCurrency,
    targetCurrency = {},
  } = React.useContext(LiquidityContext)

  const walletConnected = false
  const intl = useIntl()

  const submitHandler = e => {
    e.preventDefault()
    if (walletConnected) {
    } else {
      navigate("/connect_wallet", { state: { from: "liquidity" } })
    }
  }

  return (
    <StyledForm title="Add liqudity" submitHandler={submitHandler}>
      <InputWrapper>
        <Label color="green">You send</Label>
        <ExchangeInput
          amount={amount}
          amountChangeHandler={setAmount}
          currency={userCurrency}
          currencies={USER_CURRENCIES}
          currencyChangeHandler={setUserCurrency}
        />
      </InputWrapper>
      <Rate>
        {userCurrency.rate && (
          <>
            <span>{userCurrency.rate}</span>
            {userCurrency.label} =<span> 1 </span>
            {targetCurrency.label}
          </>
        )}
      </Rate>
      <Buttons>
        <PrevButton onClick={() => null}>
          <ArrowLeft src={ArrowLeftIcon} />
          {intl.formatMessage({ id: "back" })}
        </PrevButton>
        <ExchangeButton type="submit">
          {walletConnected ? (
            "Enter an amount"
          ) : (
            <>
              Submit
              <ArrowRight src={ArrowRightSrc} />
            </>
          )}
        </ExchangeButton>
      </Buttons>
    </StyledForm>
  )
}

const Buttons = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  button {
    max-width: none;
    margin-top: 20px;
  }
  @media screen and (min-width: 600px) {
    flex-direction: row;
    button {
      margin-top: 0;
      :first-of-type {
        margin-right: 10px;
      }
      :last-of-type {
        margin-left: 10px;
      }
    }
  }
`

const ArrowRight = styled.img`
  margin-left: 10px;
  margin-right: -5px;
`
const ArrowLeft = styled.img`
  margin-right: 5px;
  margin-left: -5px;
`

const StyledForm = styled(Form)`
  max-width: 464px;
  > div {
    padding-top: 20px;
  }
`

const InputWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`

const Label = styled.p`
  font-size: 10px;
  line-height: 10px;
  color: ${({ color }) => (color === "green" ? "#1BB978" : "#EB5757")};
`
const PrevButton = styled(ExchangeButton)`
  background-color: transparent;
  border: 1px solid #a2a7ae;
  border-radius: 4px;
`

const Rate = styled.p`
  margin: 20px 0 32px;
  font-size: 0.75rem;
  line-height: 0.625rem;
  color: #a2a7ae;

  & span {
    margin: 0 2px;
    font-weight: bold;
  }
`

export default Amount
