import React, { useState } from "react"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"

import {
  Buttons,
  StyledForm,
  ArrowLeft,
  ArrowRight,
  InputsContainer,
  InputWrapper,
  Label,
  PrevButton,
  RateContainer,
  StyledButton,
  Tabs,
  Tab,
  Tab__active,
} from "./styles"

import { LiquidityContext } from "../../../../contexts/liquidityContext"
import useCurrencies from "../../../../hooks/useCurrencies"
import { MANUAL_PROGRESS } from "../../../../constants/progress"

import ExchangeInput from "../../../ExchangeInput/exchangeInput"

import ArrowSrc from "../../../../images/arrow-right2.svg"
import ArrowLeftIcon from "../../../../images/arrow-left.svg"

export const Amount = ({ nextHandler, value }) => {
  const {
    amount,
    setAmount,
    rValue,
    setRvalue,
    userCurrency,
    setUserCurrency,
    targetCurrency,
    setTargetCurrency,
    goToPaymentSelect,
  } = value

  const intl = useIntl()
  const {
    loaded,
    currencies: { USER_CURRENCIES, CURRENCIES },
  } = useCurrencies()
  const [isValid, setValidity] = useState(true)

  const amountChangeHandler = value => {
    setValidity(true)
    setAmount(value)
  }

  const rValueChangeHandler = value => {
    setValidity(true)
    setRvalue(value)
  }

  const submitHandler = e => {
    e.preventDefault()
    const valid = amount > 0
    setValidity(valid)
    if (valid) nextHandler(MANUAL_PROGRESS.ADDRESS)
  }

  return (
    <StyledForm
      submitHandler={submitHandler}
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
    >
      <InputsContainer>
        <InputWrapper>
          <Label color="red">
            <FormattedMessage id="buy.amount.label1" />
          </Label>
          <ExchangeInput
            amount={amount}
            amountChangeHandler={amountChangeHandler}
            currency={userCurrency}
            currencies={USER_CURRENCIES}
            currencyChangeHandler={setUserCurrency}
            isValid={isValid}
          />
        </InputWrapper>
        <InputWrapper>
          <Label color="green">
            <FormattedMessage id="buy.amount.label2" />
          </Label>
          <ExchangeInput
            amount={rValue}
            amountChangeHandler={rValueChangeHandler}
            currency={targetCurrency}
            currencies={CURRENCIES}
            currencyChangeHandler={setTargetCurrency}
            disabledInput={!userCurrency.rate}
            disabledSelect
          />
        </InputWrapper>
      </InputsContainer>
      <RateContainer>
        {userCurrency.rate && (
          <>
            <span>{+userCurrency.rate.toFixed(6)}</span>
            {userCurrency.label} = <span> 1 </span>
            {targetCurrency.label}
          </>
        )}
      </RateContainer>
      <Buttons>
        <PrevButton onClick={goToPaymentSelect}>
          <ArrowLeft src={ArrowLeftIcon} />
          {intl.formatMessage({ id: "back" })}
        </PrevButton>
        <StyledButton disabled={!loaded} type="submit">
          {intl.formatMessage({ id: "buy" })}
          <ArrowRight src={ArrowSrc} />
        </StyledButton>
      </Buttons>
    </StyledForm>
  )
}
