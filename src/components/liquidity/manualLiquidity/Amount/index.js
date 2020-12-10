import React, { useState } from "react"
import { useIntl, FormattedMessage, navigate } from "gatsby-plugin-intl"

import {
  Buttons,
  StyledForm,
  ArrowLeft,
  ArrowRight,
  InputWrapper,
  Label,
  PrevButton,
  RateContainer,
  StyledButton,
  Tabs,
  Tab,
  Tab__active,
} from "./styles"

import useCurrencies from "../../../../hooks/useCurrencies"
import { MANUAL_PROGRESS } from "../../../../constants/progress"

import ExchangeInput from "../../../ExchangeInput/exchangeInput"

import ArrowSrc from "../../../../images/arrow-right2.svg"
import ArrowLeftIcon from "../../../../images/arrow-left.svg"
import ExchangeButton from "../../../ExchangeButton/exchangeButton"
import ArrowRightSrc from "../../../../images/arrow-right2.svg"
import { LiquidityContext } from "../../../../contexts/liquidityContext"

export const Amount = ({ nextHandler, value }) => {
  // const {
  //   amount,
  //   setAmount,
  //   rValue,
  //   setRvalue,
  //   userCurrency,
  //   setUserCurrency,
  //   targetCurrency,
  //   setTargetCurrency,
  //   goToPaymentSelect,
  // } = value
  //
  // const intl = useIntl()
  // const {
  //   loaded,
  //   currencies: { USER_CURRENCIES },
  // } = useCurrencies()
  // const [isValid, setValidity] = useState(true)
  //
  // const amountChangeHandler = value => {
  //   setValidity(true)
  //   setAmount(value)
  // }
  //
  // const rValueChangeHandler = value => {
  //   setValidity(true)
  //   setRvalue(value)
  // }
  //
  // const submitHandler = e => {
  //   e.preventDefault()
  //   const valid = amount > 0
  //   setValidity(valid)
  //   if (valid) nextHandler(MANUAL_PROGRESS.ADDRESS)
  // }

  const {
    currencies: { USER_CURRENCIES },
  } = useCurrencies()

  const {
    amount,
    setAmount,
    setUserCurrency,
    userCurrency,
    targetCurrency = {},
    goToPaymentSelect,
  } = value

  const walletConnected = false
  const intl = useIntl()

  const submitHandler = e => {
    e.preventDefault()
    // nextHandler()
    console.log("nextHandler", nextHandler)
  }

  return (
    <StyledForm
      title={
        <Tabs>
          <Tab__active>TESTING POOL</Tab__active>
          <Tab>POOL 1</Tab>
          <Tab>POOL 2</Tab>
          <Tab>POOL 3</Tab>
          <Tab>POOL 4</Tab>
          <Tab>POOL 5</Tab>
          <Tab>POOL 6</Tab>
        </Tabs>
      }
      submitHandler={submitHandler}
    >
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
      <RateContainer />
      <Buttons>
        <PrevButton onClick={goToPaymentSelect}>
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
