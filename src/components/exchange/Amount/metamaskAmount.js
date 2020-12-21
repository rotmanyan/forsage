import React, { useEffect, useReducer } from "react"
import styled from "styled-components"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"

import { UiContext } from "../../../contexts/uiContext"
import { TokenServiceContext } from "../../../contexts/tokenServiceContext"
import useCurrencies from "../../../hooks/useCurrencies"
import { MANUAL_PROGRESS } from "../../../constants/progress"
import { NOTIFIACATION } from "../../../constants/ui"

import ExchangeInput from "../../ExchangeInput/exchangeInput"
import Form from "../../Form/form"
import ExchangeButton from "../../ExchangeButton/exchangeButton"

import ArrowSrc from "../../../images/arrow-right2.svg"
import PurchaseSucceed from "./purchaseSucceed"
import ArrowLeftIcon from "../../../images/arrow-left.svg"

function floor(value) {
  const precision = 100_000_000
  return Math.floor(value * precision) / precision
}

let isMounted = false

const ACTIONS = {
  SET_RATE: "SET_RATE",
  SET_RVALUE: "SET_RVALUE",
  SET_DIRTY: "SET_DIRTY",
  SET_LOADING: "SET_LOADING",
  NOTIFY_USER: "NOTIFY_USER",
  CLOSE_POPUP: "CLOSE_POPUP",
  RESET: "RESET",
}

const initialState = {
  rValue: 0,
  dirty: false,
  isLoading: false,
  rate: undefined,
  transaction: undefined,
  showNotification: false,
  showPoUp: false,
}

const setRate = rate => ({ type: ACTIONS.SET_RATE, payload: rate })
const setRValue = value => ({ type: ACTIONS.SET_RVALUE, payload: value })
const setDirty = value => ({ type: ACTIONS.SET_DIRTY, payload: value })
const setLoading = value => ({ type: ACTIONS.SET_LOADING, payload: value })
const notifyUser = value => ({ type: ACTIONS.NOTIFY_USER, payload: value })
const closePopUp = () => ({ type: ACTIONS.CLOSE_POPUP })
const reset = () => ({ type: ACTIONS.RESET })

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_RATE:
      return { ...state, rate: action.payload }
    case ACTIONS.SET_RVALUE:
      return { ...state, rValue: action.payload }
    case ACTIONS.SET_DIRTY:
      return { ...state, dirty: action.payload }
    case ACTIONS.SET_LOADING:
      return { ...state, isLoading: action.payload }
    case ACTIONS.NOTIFY_USER:
      return { ...state, transaction: action.payload, showPoUp: true }
    case ACTIONS.CLOSE_POPUP:
      return { ...state, showPoUp: false }
    case ACTIONS.RESET:
      return initialState
    default:
      return state
  }
}

const Amount = ({
  amount,
  setAmount,
  // rValue,
  // setRvalue,
  userCurrency,
  setUserCurrency,
  targetCurrency,
  setTargetCurrency,
  backClickHandler,
}) => {
  const intl = useIntl()
  const {
    loaded,
    currencies: { USER_CURRENCIES, CURRENCIES },
  } = useCurrencies()
  const { setOpenedNotification } = React.useContext(UiContext)
  const {
    tokenService,
    state: { balance },
  } = React.useContext(TokenServiceContext)
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    // calc rate
    // tokenService.getPurchaseRate().then(console.log)
    // tokenService.getPurchaseableAmount(1).then(console.log)
    tokenService
      .getPurchaseableAmount(1)
      .then(_amount => dispatch(setRate(1 / _amount)))
      .catch(console.error)
  }, [userCurrency, targetCurrency])

  // useEffect(() => { // calc purchaseable amount
  //     console.log({ amount, type: typeof amount });
  //     tokenService.getPurchaseableAmount(amount)
  //         .then(_amount => dispatch(setRValue(_amount)))
  //         .catch(console.error);
  // }, [ amount ]);

  useEffect(() => {
    isMounted = true
    return () => {
      isMounted = false
    }
  }, [])

  const submitHandler = async e => {
    e.preventDefault()
    if (!isValid) return

    dispatch(setLoading(true))
    const { denied, transactionInfo, error } = await tokenService
      .buyTokens(amount)
      .then(transactionInfo => ({ transactionInfo }))
      .catch(e =>
        e.code === 4001 // user denied transaction
          ? { denied: true }
          : { error: e }
      )

    if (isMounted) dispatch(setLoading(false))

    if (denied || error) return

    if (isMounted) dispatch(notifyUser(transactionInfo))
    else setOpenedNotification(NOTIFIACATION.PURCHASE, transactionInfo)
  }

  const amountChangeHandler = value => {
    setAmount(value)
    dispatch(setRValue(floor(value / state.rate)))
    dispatch(setDirty(true))
  }

  const rValueChangeHandler = value => {
    dispatch(setRValue(value))
    // const newAmount = floor(value * state.rate);
    // console.log({ value, newAmount })
    setAmount(floor(value * state.rate))
  }

  const isValid = !!amount && amount <= balance

  return (
    <StyledForm
      submitHandler={submitHandler}
      title={intl.formatMessage({ id: "buy.amount.title" })}
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
            isValid={!state.dirty || isValid}
            disabledSelect
          />
        </InputWrapper>
        <InputWrapper>
          <Label color="green">
            <FormattedMessage id="buy.amount.label2" />
          </Label>
          <ExchangeInput
            amount={state.rValue}
            currency={targetCurrency}
            currencies={CURRENCIES}
            currencyChangeHandler={setTargetCurrency}
            amountChangeHandler={rValueChangeHandler}
            disabledSelect
            // disabledInput
          />
        </InputWrapper>
      </InputsContainer>
      <RateContainer>
        {state.rate && (
          <>
            <span>{+state.rate.toFixed(6)}</span>
            {userCurrency.label} =<span> 1 </span>
            {targetCurrency.label}
          </>
        )}
      </RateContainer>
      <Buttons>
        <PrevButton onClick={backClickHandler}>
          <ArrowLeft src={ArrowLeftIcon} />
          <FormattedMessage id="back" />
        </PrevButton>
        <StyledButton disabled={state.isLoading} type="submit">
          <FormattedMessage id={state.isLoading ? "buy.inProgress" : "buy"} />
        </StyledButton>
      </Buttons>
      <PurchaseSucceed
        isOpen={state.showPoUp}
        onClose={() => dispatch(closePopUp())}
        transaction={state.transaction}
      />
    </StyledForm>
  )
}

const RateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #a2a7ae;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 1px;
  margin: 20px 0 40px;

  & span {
    margin: 0 2px;
    font-weight: bold;
  }
`

const StyledForm = styled(Form)`
  max-width: 464px;
`

const Buttons = styled.div`
  display: flex;
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

const PrevButton = styled(ExchangeButton)`
  background-color: transparent;
  border: 1px solid #a2a7ae;
  border-radius: 4px;
`

const ArrowLeft = styled.img`
  margin-right: 5px;
  margin-left: -5px;
`

const StyledButton = styled(ExchangeButton)`
  /* min-width: 160px;
    max-width: none; */
  @media (max-width: 900px) {
    width: 100%;
    margin-top: 120px;
  }
  :disabled {
    background: #505463;
    opacity: 0.4;
    cursor: auto;
  }
`

const InputsContainer = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  flex-direction: column;
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

const ArrowRight = styled.img`
  margin-left: 10px;
  margin-right: -5px;
`

export default Amount
