import React from "react"

import withWallet from "../hocs/withWallet"
import { LIQUIDITY_MODE } from "../constants/liquidityMode"

import { MetamaskLiquidity } from "../components/liquidity/metamaskLiquidity"
import ManualLiquidity from "../components/liquidity/manualLiquidity"

const  Wrapper = ({children}) =>{
  const status = false;
  return (<>
  {status && <div>Hello</div>}
  {children}
  </>)
}

const Liquidity = props => {
  switch (props.mode) {
    case LIQUIDITY_MODE.METAMASK:
      return <MetamaskLiquidity {...props} />
    case LIQUIDITY_MODE.MANUAL:
      return <ManualLiquidity {...props} />
    default:
      return null
  }
}

export default withWallet(Liquidity)
