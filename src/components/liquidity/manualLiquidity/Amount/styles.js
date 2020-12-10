import styled from "styled-components"
import ExchangeButton from "../../../ExchangeButton/exchangeButton"
import Form from "../../../Form/form"

export const Buttons = styled.div`
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

export const PrevButton = styled(ExchangeButton)`
  background-color: transparent;
  border: 1px solid #a2a7ae;
  border-radius: 4px;
`

export const ArrowLeft = styled.img`
  margin-right: 5px;
  margin-left: -5px;
`
export const RateContainer = styled.div`
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

export const StyledForm = styled(Form)`
  max-width: 464px;
`

export const StyledButton = styled(ExchangeButton)`
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

export const InputsContainer = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  flex-direction: column;
`

export const InputWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`

export const Label = styled.p`
  font-size: 10px;
  line-height: 10px;
  color: ${({ color }) => (color === "green" ? "#1BB978" : "#EB5757")};
`

export const ArrowRight = styled.img`
  margin-left: 10px;
  margin-right: -5px;
`

export const Tabs = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0 70px;
  display: flex;
  justify-content: space-between;
`
export const Tab = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
  border-bottom: 1px solid transparent;
  font-size: 10px;
  color: #a2a7ae;
  font-weight: 400;
`
export const Tab__active = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
  border-bottom: 1px solid #7795f8;
  color: #7795f8;
  font-size: 10px;
  font-weight: 700;
`
