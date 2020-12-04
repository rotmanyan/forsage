import React from 'react';

import MenuLink from '../MenuLink/menuLink';

import InfoIcon from '../../images/info.svg';
import Formula1 from '../../images/formulas/formula1.svg';
import Formula2 from '../../images/formulas/formula2.svg';
import Formula3 from '../../images/formulas/formula3.svg';
import Formula4 from '../../images/formulas/formula4.svg';
import Formula5 from '../../images/formulas/formula5.svg';
import Formula6 from '../../images/formulas/formula6.svg';
import Formula7 from '../../images/formulas/formula7.svg';
import Formula8 from '../../images/formulas/formula8.svg';
import Formula9 from '../../images/formulas/formula9.svg';
import Formula10 from '../../images/formulas/formula10.svg';
import Formula11 from '../../images/formulas/formula11.svg';
import Formula12 from '../../images/formulas/formula12.svg';
import Formula13 from '../../images/formulas/formula13.svg';
import Formula14 from '../../images/formulas/formula14.svg';
import Formula15 from '../../images/formulas/formula15.svg';
import Formula16 from '../../images/formulas/formula16.svg';
import Formula17 from '../../images/formulas/formula17.svg';
import Formula18 from '../../images/formulas/formula18.svg';
import Formula19 from '../../images/formulas/formula19.svg';

import {
  FormulaIcon,
  Header,
  Icon,
  Link,
  LogoBack,
  LogoWrapper,
  Menu,
  MenuItem,
  Paragraph,
  Red,
  Text,
  WhitepaperLogo
} from './ui';

const EnWhitepaper = () => (
  <>
    <Header id='intro'>
        <Icon src={InfoIcon} />
        Introduction
    </Header>
    <Text>
        <Paragraph>The Forsage pool is an automated market maker with specific key positions that make it function as a self-sufficient weighted portfolio and price determiner. </Paragraph>
        <Paragraph>Forsage turns the concept of an index fund upside down: instead of paying a commission to portfolio managers to rebalance your portfolio, you collect commission from traders who rebalance your portfolio by following arbitrage opportunities.</Paragraph>
        <Paragraph>Forsage is based on a specific N-dimensional surface that defines the exchange value function of any pair of tokens stored in the Forsage pool. This approach was first described by V. Buterin[0], generalized by Alan Lu[1], and proven viable for market making by the popular Uniswap[2] dapp.</Paragraph>
        <Paragraph>Separately, we arrived at the same definition of surface, starting with the requirement that any trade must maintain a constant share of value in every asset in the portfolio. We used the invariant-based structure model approach described by Zargam et al. [3] to create this solution. We will show that these fixed value market makers have this property.</Paragraph>
    </Text>
    <Header id='content'>Table of Contents</Header>
    <Menu>
        <MenuItem><MenuLink href='#intro'>Introduction</MenuLink></MenuItem>
        <MenuItem><MenuLink href='#content'>Table of Contents</MenuLink></MenuItem>
        <MenuItem><MenuLink href='#present-work'>PresentWork</MenuLink></MenuItem>
        <MenuItem>
            <MenuLink href='#theory'>Theory</MenuLink>
            <Menu>
                <MenuItem><MenuLink href='#theory-present-work'>PresentWork</MenuLink></MenuItem>
                <MenuItem><MenuLink href='#theory-spot-price'>Spot Price</MenuLink></MenuItem>
                <MenuItem><MenuLink href='#theory-effective-price'>Effective Price</MenuLink></MenuItem>
                <MenuItem><MenuLink href='#theory-price-proof'>Spot Price Proof</MenuLink></MenuItem>
                <MenuItem><MenuLink href='#theory-distribution-proof'>Constant Value Distribution Proof</MenuLink></MenuItem>
                <MenuItem>
                    <MenuLink href='#formulas1'>Trading Formulas</MenuLink>
                    <Menu><MenuLink href='#formulas1'>- In-Given-Out</MenuLink></Menu>
                    <Menu><MenuLink href='#formula2'>- Out-Given-In</MenuLink></Menu>
                    <Menu><MenuLink href='#formula3'>- In-Given-Price</MenuLink></Menu>
                </MenuItem>
                <MenuItem>
                    <MenuLink href='#formulas2'>Trading Formulas</MenuLink>
                    <Menu><MenuLink href='#formula4'>- All-Asset Deposit/Withdrawal</MenuLink></Menu>
                    <Menu><MenuLink href='#formula5'>- Single-Asset Deposit</MenuLink></Menu>
                    <Menu><MenuLink href='#formula6'>- Single-Asset Withdrawal</MenuLink></Menu>
                </MenuItem>
            </Menu>
        </MenuItem>
        <MenuItem>
            <MenuLink href='#implementation'>Implementation</MenuLink>
            <Menu>
                <MenuItem><MenuLink href='#license'>License</MenuLink></MenuItem>
                <MenuItem><MenuLink href='#releases'>Releases</MenuLink></MenuItem>
                <MenuItem><MenuLink href='#algorithms'>Numerical Algorithms</MenuLink></MenuItem>
                <MenuItem><MenuLink href='#comparison'>Controlled vs Finalized Pools</MenuLink></MenuItem>
                <MenuItem><MenuLink href='#fees'>Swap and Exit Fees</MenuLink></MenuItem>
            </Menu>
        </MenuItem>
    </Menu>
    <Header id='present-work'>Present Work</Header>
    <Text>
        <Paragraph>
            Index funds are a common financial instrument used all over the world. The first index fund was launched in 1972. Since then, investors have relied heavily on various portfolio strategies to hedge risk and achieve diversification. Index funds guarantee investors constant and controlled access to their portfolio of assets. If one of its assets is superior or underperforming, it is sold or bought, respectively, so that its share in the value of the total portfolio remains unchanged.
            <br/>
            In both the traditional financial system and blockchain finance, index funds and other types of investment portfolios charge investors a fee for managing and holding funds. These fees are needed to pay for the costs of continually rebalancing index funds, be it a team of traders or automated bots.
            <br/>
            There are many centralized solutions for portfolio management and for investing in index funds. These all share some form of custodial risk.
            <br/>
            We know of one decentralized (read: non-storage) solution that shares all the fundamental characteristics for which Forsage was designed: Uniswap. This approach was first described by V. Buterin and generalized by Alan Lu.
            <br/>
            We independently arrived at essentially the same definition of a surface, starting with the requirement that any transaction must maintain an equally constant share of value in every asset in the portfolio. We applied the invariant modeling approach described by Zargam et al. To construct this solution. We will show that these fixed value market makers have this property.
        </Paragraph>
    </Text>
    <Header id='theory'>Theory</Header>
    <Text>
        <Paragraph>In this document, we use the term "token" to refer to a generic asset because our first implementation is a contract system that manages ERC20 tokens on the Ethereum network. However, there is nothing fundamental in the context of Ethereum execution that allows this algorithm to create and manage the marketplace, which can be offered by a traditional financial institution as a centralized (stored) product.</Paragraph>
    </Text>
    <Header id='theory-present-work'>Value Function</Header>
    <Text>
        <Paragraph>
            The bedrock of Forsage’s exchange functions is a surface defined by constraining a value function V
            V — a function of the pool’s weights and balances — to a constant. We will prove that this surface implies a spot price at every moment, so that no matter what exchanges and volumes are performed, the share of the value of each token in the pool remains invariably fixed.
            The value function V
            V is defined as:
        </Paragraph>
        <FormulaIcon src={Formula1} />
        <Paragraph>
            Where<br />
            t ranges over the tokens in the pool;<br />
            Bt  is the balance of the token in the pool;<br />
            Wt is the normalized weight of the token, such that the sum of all normalized weights is 1.<br />
            By making V constant we can define an invariant-value surface as illustrated in Fig.0.<br />
        </Paragraph>
    </Text>
    <Header id='theory-spot-price'>Spot Price</Header>
    <Text>
        <Paragraph>
            Each pair of tokens in the pool has a spot price that is fully determined by the weight and balance of only a specific pair of tokens. The spot price is formed between any two tokens,
            Spot Priceoi or in short SPoi is the the ratio of the token balances normalized by their weights:
        </Paragraph>
        <FormulaIcon src={Formula2} />
        <Paragraph>Where</Paragraph>
    </Text>
    <ul>
        <li>Bi is the balance of token i, the token being sold by the trader which is going into the pool.</li>    
        <li>Bo  is the balance of token o, the token being bought by the trader which is going out of the pool.</li>    
        <li><strong>Wi is the weight of token i</strong></li>    
        <li><strong>Wo  is the weight of token o</strong></li>    
    </ul>
    <Text>
        <Paragraph>
            From this definition, it can be seen that when the weights remain constant, the spot prices offered by balancing pools only change with changes in token balances. If the owner of the pool does not touch the tokens (does not remove or add to / from the pool), the balance of tokens may change during trading. A constant surface causes an increase in the price of tokens bought by a trader (tokens), and a decrease in the price of tokens sold by a trader (tokens). It can be argued that whenever prices in the external market differ from the prices offered by the balancing pool, the arbitrageur will make the maximum profit by trading with this pool until its prices are equal to prices in the external market.
            When this happens, the arbitrage opportunity in the system ends. These arbitrage capabilities ensure that, in a rational market, the prices offered by any Forsage pool will move in sync with the rest of the market and will not depend on internal system factors.
        </Paragraph>
    </Text>
    <Header id='theory-effective-price'>Effective Price</Header>
    <Text>
        <Paragraph>
            It is important to bear in mind that 
            SPoi is the spot price, which is the theoretical price for infinitesimal trades, which would incur no slippage. In reality, the effective price for any trade depends on the amount being traded, which always causes a price change. If we define Aoas the amount of tokeno being bought by the trader and Ai as the amount of token i being sold by the trader, then we can define the Effective Price as:
        </Paragraph>
        <FormulaIcon src={Formula3} />
        <Paragraph>And as mentioned above, EP tends to SP when traded amounts tend to 0:</Paragraph>
        <FormulaIcon src={Formula4} />
    </Text>
    <Header id='theory-price-proof'>Spot Price Proof</Header>
    <Text>
        <Paragraph>
            Let’s now prove that this choice of V entails Eq.2.
            First of all, we know that what the trader buys, Ao Ao, is subtracted from the contract’s balance. Therefore Ao=−ΔBo. Likewise, what the trader sells, Ai, is added to the contract’s balance. Therefore Ai=ΔBi.
            Substituting in Eq.2 and Eq.3 we get:
        </Paragraph>
        <FormulaIcon src={Formula5} />
        <Paragraph>This limit is, by definition, minus the partial derivative of Bi in function of Bo:</Paragraph>
        <FormulaIcon src={Formula6} />
        <Paragraph>This limit is, by definition, minus the partial derivative of Bi in function of Bo:</Paragraph>
        <FormulaIcon src={Formula7} />
        <Paragraph>Now we use Eq.7 to expand the partial derivative in Eq.6:</Paragraph>
        <FormulaIcon src={Formula8} />
        <Paragraph>which concludes our proof.</Paragraph>
    </Text>
    <Header id='theory-distribution-proof'>Constant Value Distribution Proof</Header>
    <Text>
        <Paragraph>
            We will now prove that:
        </Paragraph>
    </Text>
    <ol>
        <li>Forsage Pools maintain a constant share of value across all tokens in the pool and;</li>
        <li>These shares of value are equal to the weights associated to each token.</li>
    </ol>
    <Text>
        <Paragraph>
            Let’s calculate Vt, the total pool value in terms of an arbitrary token t from the pool. Since we already know that the pool has Bt tokens t, let’s calculate how many tokens t all the other remaining tokens are worth. It does not make sense to use their Effective Price relative to token t since we are not going to do any actual trade. Instead, to calculate the theoretical value we use their Spot Price relative to token t.
            From Eq.2 we can calculate Vtn, i.e how many tokens t the balance of each token n is worth:
        </Paragraph>
        <FormulaIcon src={Formula9} />
        <Paragraph>We know that the total pool value in terms of tokens t is the sum of the values of each token in terms of tokens t:</Paragraph>
        <FormulaIcon src={Formula10} />
        <Paragraph>Now to calculate Sn, the share of value each token nrepresents in the pool, all we have to do is divide the value of each token n, Vtn, by the total pool value, Vt:</Paragraph>
        <FormulaIcon src={Formula11} />
        <Paragraph>which proves both that the share each token represents of the total pool value is constant and also that it is equal to the weight of that token.</Paragraph>
    </Text>
    <Header id='formulas1'>Trading Formulas</Header>
    <Text>
        <Paragraph>
            Calculating the trade outcomes for any given Forsage Pool is easy if we consider that the Value Function must remain invariant, i.e. Vmust have the same value before and after any trade.In reality, Vwill increase as a result of trading fees applied after a trade state transition.
            For more details on fees, see <Link href='#'>Implementation: Swap and Exit Fees</Link>
        </Paragraph>
    </Text>
    <Header id='formula2'>Out-Given-In</Header>
    <Text>
        <Paragraph>When a user sends tokens i to get tokens o, all other token balances remain the same. Therefore, if we define Ai and Ao as the amount of tokens i and o exchanged, we can calculate the amount Ao a users gets when sending Ai. Knowing the value function after the trade should be the same as before the trade, we can write:</Paragraph>
        <FormulaIcon src={Formula12} />
        <Paragraph>Notice that Ao as defined by Eq.11 tends to SPoi⋅Ai when Ai { '<<' } Bi, as expected. This can be proved by using L’Hopital’s rule, but this proof is out of the scope of this paper.</Paragraph>
    </Text>
    <Header id='formula3'>In-Given-Price</Header>
    <Text>
        <Paragraph>
            For practical purposes, traders intending to use our contract for arbitrage will like to know what amount of tokens i – Ai– they will have to send to the contract to change the current spot price SPoi to another desired one SP′oi. The desired spot price will usually be the external market price and, so long as the contract spot price differs from that of the external market, any arbitrageur can profit by trading with the contract and bringing the contract price closer to that of the external market.
            The highest profit possible by an arbitrageur is when they bring the contract spot price exactly to that of the external market. As already mentioned, this is the main reason why our design is successful in keeping track of the market prices. This makes it a reliable on-chain price sensor when implemented on a blockchain.
            It can be proven that the amount of tokens i – Ai– a user needs to trade against tokens oso that the pool’s spot price changes from 
            SPoi to SP′oi is:
        </Paragraph>
        <FormulaIcon src={Formula13} />
    </Text>
    <Header id='formulas2'>Liquidity Providing Formulas</Header>
    <Header>Pool Tokens</Header>
    <Text>
        <Paragraph>
            Pools can create and maintain liquidity provided by several different users. In order for them to be able to freely move assets (withdraw and start) from the pool, there is a concept of pool tokens in the forsage protocol. Pool tokens represent to their owner the ownership of the assets contained in the pool. The outstanding supply of pool tokens is directly proportional to the pool's value function. If asset escrow increases the pool's value function by 10%, then the unpaid supply of the pool tokens also increases by 10%. This is because the depositor is given 10% of the new pool tokens in return for the deposit.
            There are two ways in which one can deposit assets to the pool in return for pool tokens or redeem pool tokens in return for pool assets:
        </Paragraph>
    </Text>
    <ul>
        <li>Weighted-asset deposit/withdrawal</li>
        <li>Single-asset deposit/withdrawal</li>
    </ul>
    <Header id='formula4'>All-Asset Deposit/Withdrawal</Header>
    <Text>
        <Paragraph>An “all-asset” deposit has to follow the distribution of existing assets in the pool. If the deposit contains 10% of each of the assets already in the pool, then the Value Function will increase by 10% and the depositor will be minted 10% of the current outstanding pool token supply. So to receive Pissued pool tokens given an existing total supply of PsupplyPsupply, one needs to deposit Dk tokens k for each of the tokens in the pool:</Paragraph>
        <FormulaIcon src={Formula14} />
        <Paragraph>Where Bk is the token balance of token k before the withdrawal.</Paragraph>
    </Text>
    <Header id='formula5'>Single-Asset Deposit</Header>
    <Text>
        <Paragraph>The increase in the pool token supply proportional to the increase in the Value Function. If we define Pissued as the amount of pool tokens issued in return for the deposit, then:</Paragraph>
        <FormulaIcon src={Formula15} />
        <Paragraph>Where <br/>
            V′is the Value Function after the deposit and V is the Value Function before the deposit. Considering also B′k the balance of asset k after the deposit and Bk its balance before the deposit, we have:
        </Paragraph>
        <FormulaIcon src={Formula16} />
        <Paragraph>Let’s say the single-asset deposit was done in asset tt, then the balances of all other tokens do not change after the deposit. We can then write:</Paragraph>
        <FormulaIcon src={Formula17} />
        <Paragraph>If we define Atas the amount deposited in asset t, then the new pool balance of asset t is $$B’t = B_t + A_t$$. We can then substitute and get the final formula for the amount of new pool tokens issued $P{'{issued}'}inreturnforasinge−assetdeposit <br />
            I_t$:
        </Paragraph>
        <FormulaIcon src={Formula18} />
    </Text>
    <Header id='formula6'>Single-Asset Withdrawal</Header>
    <Text>
        <Paragraph>When a pool token holder wants to redeem their pool tokens Predeemed in return for a single asset t, the amount withdrawn in asset t, At, is:</Paragraph>
        <FormulaIcon src={Formula19} />
        <Paragraph>Where Bt is the pool balance of asset t before the withdrawal. <br />
            Indeed, using the formulas of deposit and withdrawal defined above, not considering any fees, if one deposits Atasset t for Pissued pool tokens and then redeems that same amount of pool tokens for asset t, they will get the same initial At back.
        </Paragraph>
    </Text>
    <Header>Trading Fees for Single-Asset Deposit Withdrawal</Header>
    <Text>
        <Paragraph>Depositing or withdrawing to/from a shared pool in a single asset t is equivalent to trading (1−Wt) of the amount deposited for all the other assets in the pool.  Wt of the amount deposited is held by the pool already in the form of asset t, so charging a trading fee on that share would be unfair.Indeed, if we disregard any possible pool exit fees, depositing only asset i and instantly withdrawing asset o will incur in the same trading fees as doing the trade from i to o using the trade function the pool offers.</Paragraph>
    </Text>
    <Header id='implementation'>Implementation</Header>
    <Text>
        <Paragraph>There are some initial points and notes regarding the first release and the first working version of Forsage. We will publish a much more detailed description of the system simultaneously with the release of the source code.</Paragraph>
    </Text>
    <Header id='license'>Free Software on Ethereum</Header>
    <Text><Paragraph>Forsage is implemented as a GPL3-licensed Ethereum smart contract system.</Paragraph></Text>
    <Header id='releases'>Releases</Header>
    <Text>
        <Paragraph><strong>The Formula-3</strong> Release is the first of 3 planned Forsage protocol releases. Formula-3 emphasizes the clarity of code for auditing and validation and doesn't do too much to optimize for gas.</Paragraph>
        <Paragraph><strong>The Formula-2</strong> Release will bring many gas optimizations and architecture changes that will reduce transaction overhead and enable more flexibility for controlled pools.</Paragraph>
        <Paragraph><strong>The Formula-1</strong> Release will introduce several new features to tie the whole system together.</Paragraph>
    </Text>
    <Header id='algorithms'>Numerical Algorithms</Header>
    <Text>
        <Paragraph>The formulas in the Theory section are sufficient to describe the functional specification, but they are not easy for us to implement, in part due to the lack of mature fixed point math libraries and calculations.</Paragraph>
        <Paragraph>Our implementation uses a combination of a few algebraic transformations, approximation functions, and numerical hacks to compute these formulas with bounded maximum error and reasonable gas cost.</Paragraph>
        <Paragraph>The rest of this section will be released at the same time as the Formula-3 release source code.</Paragraph>
    </Text>
    <Header id='comparison'>Controlled vs Finalized Pools</Header>
    <Text>
        <Paragraph>
            The Formula-3 Release allows two basic tiers of trust with respect to pools: <br />
            <strong>1. Controlled</strong> pools are configurable by a “controller” address. Only this address can add or remove liquidity to the pool (<Red>call</Red> join or <Red>exit</Red>). This type of pool allows the change of pool assets types and their weights. Note that since the controller is an address, this could in principle implement arbitrary logic, like managing public deposits in a manner similar to a finalized pool. The key difference is that official tooling will not recognize it as a “trustless” pool. Controlled pools with increased trust requirements will be possible with the Silver Release. <br />
            <strong>2. Finalized</strong> pools have fixed pool asset types, weights, and fees. Crucially, this enables <Red>join</Red> and <Red>exit</Red> to be publicly accessible in a safe, trustless manner while keeping a minimal implementation. <br />
        </Paragraph>
    </Text>
    <Header id='fees'>Swaps and Exit Fees</Header>
    <Text>
        <Paragraph>
            The Formula-3 Release charges fees in two situations: When traders exchange tokens (via <Red>swap</Red> and its variants), and when liquidity providers remove their liquidity from the pool (via <Red>exit</Red> and its variants). <br/>
            Both of these fees are set automatically by the controller, but they are also fixed and stopped when the pool becomes finalized. <br />
            100% of the swap fee goes to liquidity providers - the amount of the base token that can be redeemed by each token in the pool grows. <br />
            Most of the exit fees are returned to the liquidity providers who remain in the pool.<br />
            In spirit, this is similar to the swap fee charged for exchanging pool tokens for base tokens.<br />
            The remainder of the release fee is transferred to an account controlled by Forsage Labs, Inc. for the development of future releases.<br />
        </Paragraph>
    </Text>
  </>
);

export default EnWhitepaper;
