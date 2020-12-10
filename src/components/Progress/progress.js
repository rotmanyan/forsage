import React, { useRef, useEffect, useState } from "react"
import styled from "styled-components"
import { FormattedMessage } from "gatsby-plugin-intl"

import { MANUAL_PROGRESS } from "../../constants/progress"
import { usePageWidth } from "./usePageWidth"

import SuccessIcon from "../../images/success.svg"

const threshold = 640 //px
const minDotsCount = 2
// const DOTS = [...Object.values(MANUAL_PROGRESS)];
// const title = {
//     1: "buy.step.amount",
//     2: "buy.step.address",
//     3: "buy.step.confirmation",
//     4: "buy.step.deposit",
//     5: "buy.step.info",
// };

const Progress = ({ dots, titles, step, setStep }) => {
  console.log({ dots, titles, step, setStep })
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const [lineWidth, setLineWidth] = useState(0)
  const pageWidth = usePageWidth()

  const clickHandler = ({ currentTarget: { value } }) => {
    if (!setStep) return

    const targetStep = +value
    if (dots.includes(targetStep) && targetStep < step) {
      setStep(targetStep)
    }
  }

  useEffect(() => {
    function calculateWidth() {
      if (!ref1.current || !ref2.current) return

      const { right } = ref1.current.getBoundingClientRect()
      const { left } = ref2.current.getBoundingClientRect()

      const distance = left - right
      setLineWidth(distance)
    }
    calculateWidth()
    setTimeout(calculateWidth, 300)
  }, [ref1, ref2])

  if (pageWidth <= threshold) {
    const dotsToRender =
      step <= minDotsCount
        ? dots.slice(0, minDotsCount)
        : dots.slice(step - minDotsCount, step)

    return (
      <Container>
        {dotsToRender.map((value, i) => {
          const isActive = step >= value

          return (
            <Dot
              key={value}
              value={value}
              onClick={clickHandler}
              active={isActive}
              lineWidth={lineWidth}
              isInitial={value === dotsToRender[0]}
              isLast={value === dotsToRender[dotsToRender.length - 1]}
              ref={i === 0 ? ref1 : ref2}
            >
              {step > value ? <img alt="" src={SuccessIcon} /> : value}
              <Subtitle active={isActive}>
                <FormattedMessage id={titles[value]} />
              </Subtitle>
            </Dot>
          )
        })}
      </Container>
    )
  }

  return (
    <Container>
      {dots.map(value => {
        let dotRef = undefined
        if (value === 1) dotRef = ref1
        if (value === 2) dotRef = ref2

        const isActive = step >= value

        return (
          <Dot
            key={value}
            value={value}
            onClick={clickHandler}
            active={isActive}
            lineWidth={lineWidth}
            ref={dotRef}
          >
            {value}
            <Subtitle active={isActive}>
              <FormattedMessage id={titles[value]} />
            </Subtitle>
          </Dot>
        )
      })}
    </Container>
  )
}

const Subtitle = styled.p`
  position: absolute;
  bottom: -20px;
  white-space: nowrap;
  font-size: 12px;
  line-height: 12px;
  margin: 0;
  font-weight: normal;
  color: "inherit";
  color: ${({ active }) => (active ? "#1BB978" : "#A2A7AE")};
`

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 764px;
  justify-content: space-between;
  margin: 30px 0;
  @media screen and (max-width: 600px) {
    padding-left: 40px;
  }
`

const Dot = styled.button`
  width: 32px;
  height: 32px;
  color: white;
  border-radius: 50%;
  border: none;
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  position: relative;
  justify-content: center;
  display: flex;
  align-items: center;
  background-color: ${({ active }) => (active ? "#1BB978" : "#eeeeee33")};
  cursor: ${({ active }) => (active ? "pointer" : "auto")};
  &:focus {
    outline: none;
  }

  &:before,
  &:after {
    z-index: -1;
    height: 1px;
    transition: width 0.3s 0.1s;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: ${({ lineWidth }) => `${lineWidth}px`};
    background-color: ${({ active }) => (active ? "#1BB978" : "#eeeeee33")};
  }
  &:before {
    left: ${({ lineWidth }) => `-${lineWidth}px`};
  }
  &:after {
    right: ${({ lineWidth }) => `-${lineWidth}px`};
  }

  @media (min-width: ${threshold}px) {
    &:not(:first-child):before {
      content: "";
    }
  }

  @media (max-width: ${threshold}px) {
    margin: 0 auto;
    &:before {
      content: ${({ isInitial }) => (isInitial ? "unset;" : "'';")};
    }
    &:first-of-type {
      margin-left: ${({ isInitial }) => (isInitial ? "0;" : "10%;")};
    }
    &:last-of-type {
      &:after {
        content: ${({ isLast }) => (isLast ? "unset;" : "'';")};
      }
    }
  }
`

export default Progress
