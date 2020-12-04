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


const ZhWhitepaper = () => (
  <>
    <Text>
      FOI全球DeFi生态系统 <br />
      白皮书1.0<br />
      FOI是分布式的国际社区群，<br />
      是forsage官方的第一个以太坊智能合约营销矩阵支持下的100％去中心化流动性挖矿平台。<br />
    </Text>
    <Menu>
      <MenuItem><MenuLink href='#1'>一、FOI项目背景</MenuLink></MenuItem>
      <MenuItem>
        <MenuLink href='#2'>二、FOI经济模型</MenuLink>
        <Menu>
          <MenuItem><MenuLink href='#3'>1 价值函数</MenuLink></MenuItem>
          <MenuItem><MenuLink href='#4'>2 现货价格</MenuLink></MenuItem>
          <MenuItem><MenuLink href='#5'>3 有效价格</MenuLink></MenuItem>
          <MenuItem><MenuLink href='#6'>4 现货价格证明</MenuLink></MenuItem>
          <MenuItem><MenuLink href='#7'>5 定值分布证明</MenuLink></MenuItem>
          <MenuItem>
            <MenuLink href='#8'>6 交易公式</MenuLink>
            <Menu>
              <MenuLink href='#9'>A. 进出交易</MenuLink>
              <MenuLink href='#10'>B. 市场议价</MenuLink>
            </Menu>
          </MenuItem>
          <MenuItem><MenuLink href='#11'>7 社区投票通缩</MenuLink></MenuItem>

        </Menu>
      </MenuItem>
      <MenuItem>
        <MenuLink href='#12'>三、FOI流动性挖矿</MenuLink>
        <Menu>
          <MenuItem>
            <MenuLink href='#13'>1 流动性提供</MenuLink>
            <Menu>
              <MenuItem><MenuLink href='#14'>A. 池Token</MenuLink></MenuItem>
              <MenuItem><MenuLink href='#15'>B. 全资产存取款</MenuLink></MenuItem>
              <MenuItem><MenuLink href='#16'>C. 单资产存款</MenuLink></MenuItem>
              <MenuItem><MenuLink href='#17'>D. 单资产提款</MenuLink></MenuItem>
            </Menu>
          </MenuItem>
          <MenuItem>
            <MenuLink href='#18'>2 资产交易</MenuLink>
            <Menu>
              <MenuItem><MenuLink href='#19'>A. 以太坊上的免费软件</MenuLink></MenuItem>
              <MenuItem><MenuLink href='#20'>B. 发布</MenuLink></MenuItem>
              <MenuItem><MenuLink href='#21'>C. 数值算法</MenuLink></MenuItem>
              <MenuItem><MenuLink href='#22'>D. 受控池与最终池</MenuLink></MenuItem>
              <MenuItem><MenuLink href='#23'>E. 交换费和退出费说明</MenuLink></MenuItem>
            </Menu>
          </MenuItem>
          <MenuItem><MenuLink href='#24'>3公开透明</MenuLink></MenuItem>
        </Menu>
      </MenuItem>
      <MenuItem>
        <MenuLink href='#25'>四、FOI的金融应用场景</MenuLink>
        <Menu>
          <MenuItem>
            <MenuLink href='#26'>1 去中心化金融应用</MenuLink>
            <Menu>
              <MenuItem><MenuLink href='#27'>A. 去中心化交易</MenuLink></MenuItem>
              <MenuItem><MenuLink href='#28'>B. 均衡币</MenuLink></MenuItem>
              <MenuItem><MenuLink href='#29'>C. 期货</MenuLink></MenuItem>
              <MenuItem><MenuLink href='#30'>D. 加密货币借贷协议</MenuLink></MenuItem>
            </Menu>
          </MenuItem>
          <MenuItem>
            <MenuLink href='#31'>2  加密数字债券融资</MenuLink>
            <Menu>
              <MenuItem><MenuLink href='#32'>A. 债券信用评级</MenuLink></MenuItem>
              <MenuItem><MenuLink href='#33'>B. 债券交易市场和债券衍生品</MenuLink></MenuItem>
            </Menu>
          </MenuItem>
        </Menu>
      </MenuItem>
    </Menu>
    <Header>摘要</Header>
    <Text>
      <Paragraph>
        Forsage矿池是一个自动化的做市商，在市场中具有特殊的关键定位，使其可以充当自给自足的加权投资组合和价格确定者。FOI颠倒了指数基金的概念：舍弃向投资组合经理支付佣金以重新平衡您的投资组合，您从交易商那里收取佣金的做法，这些交易商通过遵循套利机会来重新平衡您的投资组合。Forsage基于特定的N维表面，该表面定义了存储在Forsage池中的任何一对Token的交换价值函数。这种方法首先由Vladimir Buterin描述，由AlanLu推广，并被流行的Uniswap Dapp证明是可行的。另外，我们从表面要求任何交易必须在投资组合中的每项资产中保持恒定的价值份额
      </Paragraph>
    </Text>
    <Header id='1'>一、FOI项目背景</Header>
    <Text>
      <Paragraph>指数基金是全世界都在使用的常见金融工具。第一个指数基金于1972年推出。从那时起，投资者就严重依赖各种投资组合策略来对冲风险和实现多元化。指数基金可确保投资者能够持续地且自主可控地管理其资产组合。如果其中一项资产的表现或优或劣，则可分别购买或出售，因此其在总投资组合价值中的份额保持不变。</Paragraph>
      <Paragraph>在传统金融和区块链金融系统中，指数基金和其他类型的投资组合向投资者收取管理和持有基金的费用。需要这些费用来支付不断重新平衡指数基金（无论是交易员团队还是自动机器人）的成本。有许多用于投资组合管理和指数基金投资的集中式解决方案。这些都具有某种形式的保管风险。</Paragraph>
      <Paragraph>我们知道一个分布式（read: non-storage）解决方案，它具有Forsage设计的所有基本特征：Uniswap。Vladimir Buterin首先描述了这种方法，AlanLu对此方法进行了推广。</Paragraph>
      <Paragraph>我们独立地对表面进行了基本相同的定义，首先是要求任何交易必须在投资组合中的每项资产中均保持不变的价值份额。更进一步地，我们使用了Zargam等人描述的基于不变的结构模型方法来创建此解决方案。我们将证明这些固定价值做市商具有此属性，以此来保障参与流动性挖矿社区参与者的收益，极大降低FOI矿工的参与风险。FOI项目的最大优势在于，它是全球去中心化生态系统的国际社区集合体，参与的矿工越多，风险系数越低。Forsage以太坊智能合约营销矩阵能够在极限情况下同时保障FOI私募参与者的质押资产和质押挖矿收益。</Paragraph>
    </Text>
    <Header id='2'>二、FOI经济模型</Header>
    <Text>
      <Paragraph>在本文档中，我们使用术语“Token”来指代通用资产，因为我们的第一个实践操作是在以太坊网络上管理ERC20Token的合同系统。然而，在以太坊执行的系统环境中，没有什么基础可以允许该算法创建和管理市场，而传统金融机构则可以将其作为集中（存储）产品来提供和管理市场用以弥补。以下是构建FOI的经济模型的数学原理，我们先从价值函数开始。</Paragraph>
      <Header id='3'>1 价值函数</Header>
      <Paragraph>Forsage交换函数的基石是通过将值函数V约束为常数来定义的表面，其中，V为池的权重和余额的函数。我们将证明此表面在任何时候都暗示着现货价格，因此，无论执行什么交换和交易量，池中每个Token的价值份额始终保持不变。值函数V定义为：</Paragraph>
      <FormulaIcon src={Formula1} />
      <Paragraph>
        其中，<br/>
        t覆盖池中的Token;<br/>
        Bt是池中Token的余额；<br/>
        Wt是Token的归一化权重，因此所有归一化权重的总和为1。<br/>
        通过使V不变，我们可以定义一个不变值表面
      </Paragraph>
      <Header id='4'>2 现货价格</Header>
      <Paragraph>池中的每对Token都有一个现货价格，该价格完全由特定一对Token的权重和余额决定。在任意两个Token，现货Priceoi之间或在短SPOI形成的现货价格是由它们的重量归一化的Token余额的比例为：</Paragraph>
      <FormulaIcon src={Formula2} />
      <Paragraph>
        其中，
        <ul>
          <li>Bi是Tokeni的余额，Token正由进入池中的交易者出售；</li>
          <li>Bo是Tokeno的余额，Token正被交易者从池中购买；</li>
          <li>Wi是Tokeni的权重；</li>
          <li>Wo是Tokeno的权重</li>
        </ul>
      </Paragraph>
      <Paragraph>从这个定义可以看出，当权重保持恒定时，平衡池提供的现货价格仅随Token余额的变化而变化。如果池的所有者不接触Token（不从池中移除或添加到池中），则Token余额可能会在交易过程中发生变化。恒定的表面会导致交易者购买的Token（Token）价格上涨，而交易者出售的Token（Token）价格下降。可以说，只要外部市场的价格与平衡池所提供的价格不同，套利者就可以通过与该池交易来获得最大利润，直到其价格等于外部市场的价格为止。当这种情况发生时，系统中的套利机会就结束了。这些套利功能可确保在合理的市场中，任何Forsage池提供的价格都将与其他市场保持同步，并且不会依赖于内部系统因素。</Paragraph>
      <Header id='5'>3 有效价格</Header>
      <Paragraph>重要的是要牢记SPoi是现货价格，这是无穷小交易的理论价格，不会引起滑点。实际上，任何交易的有效价格都取决于交易量，这总是会引起价格变化。如果我们定义Aoas为交易购买的Token数量，而Ai为交易者出售的Tokeni数量，那么我们可以将有效价格定义为：</Paragraph>
      <FormulaIcon src={Formula3} />
      <Paragraph>如上所述，当交易数量趋向于EP时，EP趋向于SP。0：</Paragraph>
      <FormulaIcon src={Formula4} />
      <Header id='6'>4 现货价格证明</Header>
      <Paragraph>现在让我们证明对V的选择需要方程2。首先，我们知道交易者购买的商品Ao，其中Ao是从合约余额中减去的。因此，Ao＝-ΔBo。同样，交易者出售的商品Ai也被添加到合约的余额中。因此，Ai＝ΔBi。代入方程式2和方程式3，我们得到：</Paragraph>
      <FormulaIcon src={Formula5} />
      <Paragraph>根据定义，该极限减去Bo在Bo函数中的偏导数</Paragraph>
      <FormulaIcon src={Formula6} />
      <Paragraph>根据定义，该极限减去Bi在Bo函数中的偏导数</Paragraph>
      <FormulaIcon src={Formula7} />
      <Paragraph>现在我们使用等式7展开等式6中的偏导数</Paragraph>
      <FormulaIcon src={Formula8} />
      <Paragraph>这就是我们的证明。</Paragraph>
      <Header id='7'>5 定值分布证明</Header>
      <Paragraph>
        我们现在将证明：
        <ol>
          <li>Forsage池在池中的所有Token中保持不变的价值份额；并且</li>
          <li>这些价值份额等于与每个Token关联的权重。</li>
        </ol>
        让我们根据池中的任意Tokent计算总池值Vt。由于我们已经知道该池具有BtTokent，因此让我们计算所有其他剩余Token的价值是多少Tokent。使用相对于Tokent的有效价格没有意义，因为我们将不进行任何实际交易。相反，为了计算理论值，我们使用相对于Tokent的现货价格。从等式2中，我们可以计算Vtn，即每个Tokenn的余额中有多少个Tokent值得：
      </Paragraph>
      <FormulaIcon src={Formula9} />
      <Paragraph>我们知道，以Tokent计的总池值是每个Tokent的值之和：</Paragraph>
      <FormulaIcon src={Formula10} />
      <Paragraph>现在要计算Sn，即每个Tokenn在池中代表的价值份额，我们要做的就是将每个Tokenn的值Vtn除以总池值Vt：</Paragraph>
      <FormulaIcon src={Formula11} />
      <Paragraph>这证明了每个Token所代表的份额总池值是恒定的，并且等于该Token的权重。</Paragraph>
      <Header id='8'>6 交易公式</Header>
      <Paragraph>如果我们认为价值函数必须保持不变，即V在任何交易之前和之后必须具有相同的价值，那么为任何给定的Forsage Pool计算交易结果将很容易。实际上，由于交易状态后收取交易费用，V会增加过渡。</Paragraph>
      <Paragraph id='9' $noIndent>A. 进出交易</Paragraph>
      <Paragraph>当用户发送Tokeni以获取Tokeno时，所有其他Token余额保持不变。因此，如果我们将Ai和Ao定义为i和o交换的Token数量，则可以计算用户在发送Ai时获得的Token数量Ao。知道交易后的价值函数应该与交易前的相同，我们可以这样算：</Paragraph>
      <FormulaIcon src={Formula12} />
      <Paragraph>请注意，如预期的那样，当Ai&#60;&#60;Bi时，方程11定义的Ao倾向于SPoi∙Ai。可以通过使用L'Hopital规则来证明这一点，但是该证明不在本文讨论范围之内。</Paragraph>
      <Paragraph id='10'>B. 市场议价</Paragraph>
      <Paragraph>出于实际目的，打算将我们的合同用于套利的交易者将想知道他们必须发送给合同以将当前现货价格SPoi更改为另一个所需的SP'oi的Tokeni–Ai–数量。所需现货价格通常将是外部市场价格，只要合同现货价格与外部市场价格不同，任何套利者都可以通过与合同交易并使合同价格更接近外部市场而获利。套利者可能获得的最高利润是他们将合同现货价格准确地带到外部市场的价格。如前所述，这是我们的设计成功跟踪市场价格的主要原因。当在区块链上实施时，这使其成为可靠的链上价格传感器。可以证明，用户需要与Tokenoso进行交易的Tokeni–Ai的数量，即池的现货价格从SPoi变为SP′oi是：</Paragraph>
      <FormulaIcon src={Formula13} />
      <Header id='11'>7 社区投票通缩</Header>
      <Paragraph>如今，通货紧缩意味着通货膨胀的对立面，即总价格水平的下降。或者我们可以轻松地将其定义为通胀率低于0％。区块链中，供应持续减少的加密货币统称为通缩型加密货币。通缩可以燃烧一定比例的Token、回购和燃烧、或回购和持有等方式来实现。而Token的增发或者说通胀通常代表着价值减退，FOI的持有者将会面临一个抉择：是选择通膨还是通缩。在Forsage社区，通缩并不是需求坍塌引起的，它遵循一种预定且有节制的货币供应模型。FOI赋予了社区参与者和FOI持有者100%的通缩投票权。</Paragraph>
      <Paragraph>实际上，通缩货币会让卖家考虑到折现的影响，容易诱发过度的囤积本能，除非这部分折现率超过买家的囤积本能。因为买卖双方都有囤积的动机，这两种折现率会因为双方的囤积本能相互抵消，而达成一个平衡价格。FOI的持有者拥有通缩的投票权，这就意味着FOI的价格又增加了一个稳定升值的保障。</Paragraph>
    </Text>
    <Header id='12'>三、FOI流动性挖矿</Header>
    <Text>
      <Header id='13'>1 流动性提供</Header>
      <Paragraph id='14' $noIndent>A. 池Token</Paragraph>
      <Paragraph>
        池可以创建并维持由多个不同用户提供的流动性。为了使他们能够从池中自由移动资产（撤回和启动），在forsage协议中有一个池Token的概念。池Token向其所有者表示池中包含的资产的所有权。池Token的未偿供应与池的价值函数成正比。如果资产托管将资产池的价值函数提高了10％，那么资产池Token的无偿供应也将增长10％。这是因为为存款人提供了10％的新池Token作为回报。可以通过两种方式将资产存入池中以换取池Token，或赎回池Token以换取池资产：
        <ul>
          <li>加权资产存取款</li>
          <li>单资产存取款</li>
        </ul>
      </Paragraph>
      <Paragraph id='15' $noIndent>B. 全资产存取款</Paragraph>
      <Paragraph>“全资产”存款必须遵循池中现有资产的分配。如果存款包含池中已经存在的每种资产的10％，则价值函数将增加10％，而储户将获得当前未偿还池Token供应量的10％。因此，要在给定现有PsupplyPsupply的总供应量的情况下接收发布的池Token，则需要为池中的每个Token存入DkTokenk：</Paragraph>
      <FormulaIcon src={Formula14} />
      <Paragraph>其中Bk是取款前Tokenk的Token余额。</Paragraph>
      <Paragraph id='16' $noIndent>C. 单资产存款</Paragraph>
      <Paragraph>池Token供应量的增加与价值函数的增加成正比。如果我们将Pissued定义为作为押金回报而发行的池Token的数量，则：</Paragraph>
      <FormulaIcon src={Formula15} />
      <Paragraph>其中，V'是押金之后的价值函数，V是押金之前的价值函数。还考虑B'k存款后的资产k余额和Bk存款前的余额，我们有：</Paragraph>
      <FormulaIcon src={Formula16} />
      <Paragraph>假设单资产存款是在资产t中完成的，那么所有其他Token的余额在存款后都不会改变。然后我们可以这样写：</Paragraph>
      <FormulaIcon src={Formula17} />
      <Paragraph>如果我们定义Atas存放在资产t中的金额，那么资产t的新池余额为$$B't=B_t+A_t$$。然后，我们可以代入并获得$P&#123;issued&#125;的新池Token总数的最终公式，该新池Token的发行量为资产抵押I_t$：</Paragraph>
      <FormulaIcon src={Formula18} />
      <Paragraph id='17' $noIndent>D. 单资产提款</Paragraph>
      <Paragraph>当资产池Token持有者想要赎回其资产池Token以换取单个资产t时，资产t中的取款额At为</Paragraph>
      <FormulaIcon src={Formula19} />
      <Paragraph>其中Bt是资产t在撤出之前的资产池余额。</Paragraph>
      <Paragraph>实际上，如果使用上述定义的存款和取款公式，则无需考虑任何费用，如果一个人将Aassett存入已发行的集合Token，然后为资产t赎回了相同数量的集合Token，则它们将获得相同的初始At。</Paragraph>
      <Header id='18'>2 资产交易</Header>
      <Paragraph>在单个资产t中向共享池存款或从中撤出，等于对池中所有其他资产的存款额进行交易（1-Wt）。存款的Wt已以资产t的形式由资产池持有，因此对该股份收取交易费将是不公平的。实际上，如果我们不考虑任何可能的资产池退出费，则仅存入资产i并立即提取资产o使用交易池提供的交易功能，将产生与从i到o进行交易相同的交易费用。</Paragraph>
      <Paragraph>有关Forsage的第一个发行版和第一个工作版本，有一些初始要点和说明。我们将在发布源代码的同时发布有关该系统的更详细的描述。</Paragraph>
      <Paragraph id='19' $noIndent>A. 以太坊上的免费软件</Paragraph>
      <Paragraph>Forsage被实施为GPL3许可的以太坊智能合约系统。</Paragraph>
      <Paragraph id='20' $noIndent>B. 发布</Paragraph>
      <Paragraph><b>Formula3</b>版本是3个计划的Forsage协议版本中的第一个。Formula-3强调了用于审核和验证的代码的清晰性，并没有为优化气体做太多事情。<b>Formula-2</b>发行版将带来许多气体优化和体系结构更改，从而减少交易开销并为受控池提供更大的灵活性。<b>Formula-1</b>版本将引入一些新功能，以将整个系统联系在一起。</Paragraph>
      <Paragraph id='21' $noIndent>C. 数值算法</Paragraph>
      <Paragraph>理论部分中的公式足以描述功能规格，但对我们来说不容易实现，部分原因是缺少成熟的定点数学库和计算。我们的实现结合了一些代数转换，近似函数和数值技巧，以有限的最大误差和合理的汽油成本来计算这些公式。本节的其余部分将与Formula-3发布源代码同时发布。</Paragraph>
      <Paragraph id='22' $noIndent>D. 受控池与最终池</Paragraph>
      <Paragraph>
        Formula-3版本允许有关池的两个基本信任层：<br />
        <b>（1） 受控池</b>可通过“控制器”地址进行配置。仅此地址可以添加或删除池中的流动性（<Red>调用</Red>join或<Red>exit</Red>）。这种类型的池允许更改池资产类型及其权重。请注意，由于控制器是地址，因此原则上可以实现任意逻辑，例如以类似于最终池的方式管理公共存款。关键区别在于，官方工具不会将其视为“不信任”资源库。白银发行版可能会增加信任度要求的受控池。
      </Paragraph>
      <Paragraph><b>（2） 最终池</b>具有固定的池资产类型，权重和费用。至关重要的是，这使<Red>加入</Red>和<Red>退出</Red>可以以安全，不信任的方式公开访问，同时保持最少的实现。</Paragraph>
      <Paragraph id='23' $noIndent>E. 交换费和退出费说明</Paragraph>
      <Paragraph>在以下两种情况下，Formula-3 释放会收取费用：交易者交换Token时（通过<Red>交换</Red>及其变体），以及流动性提供者从资金池中移除其流动性时（通过<Red>出口</Red>及其变体）。这两种费用都是由控制器自动设置的，但是在池最终确定时，它们也会固定和停止。交换费全部用于流动性提供者—这就意味着池中可被赎回的Token数量会增加。大多数退出费退还给留在资金池中的流动性提供者。从本质上讲，这类似于将池Token交换为基本Token所收取的交换费。其余的发行费转入由Forsage Labs，Inc.控制的帐户，用于开发将来的发行。</Paragraph>
      <Paragraph>总之，FOI矿池是一个为社区参与者提供的可持续收益的平台，所有的收益源于社区，最终普惠社区参与者。整个过程由智能合约所管控，主观人为因素无法随意篡改。</Paragraph>
      <Header id='24'>3公开透明</Header>
      <Paragraph>传统合约受到诸如主客观、经济成本、适用范围、执行力度和执行时间等因素的影响，而智能合约便可以在很大程度上解决这些因素的影响。智能合约的主要特点可以简单地概括为： 去中心化、智能高效（自动执行、无人为干预）、准确、低成本。</Paragraph>
      <Paragraph>由于FOI是用户跟以太坊公链上的一系列智能合约进行交互，挖矿参与者可以利用它的透明和无须许可特性获利，比如通过DEX 的聚合实现最优价格的交易；甚至通过借贷协议的聚合实现最好的利息收益。FOI在技术和产品的基础上之上，实现了市场、协议、资产层面全部打通，像乐高积木一样，这种生态模式在CeFi中是很难实现的，因为CeFi的市场基本是相互独立的，资产也就相对隔离。因此，FOI为社区参与者提供了无可比拟的透明性和公平性。</Paragraph>
    </Text>
    <Header id='25'>四、FOI的金融应用场景</Header>
    <Text>
      <Header id='26'>1 去中心化金融应用</Header>
      <Paragraph id='27' $noIndent>A. 去中心化交易</Paragraph>
      <Paragraph>传统的去中心化交易以点对点报价撮合为主，相当于场外交易，此方向并不一定正确，因为现代交易所的核心是双边拍卖，对报价双方的价格强制排序和强制成交，这涉及的计算与区块链当前共识计算的机制不匹配。而Forsage的出现改变了这一点，FOI认为有意义的去中心化交易应该是自由做市商制度的，即对于报价的双向强制接纳，且做市商可以是任意参与者，这正在 FOI 的机制里得以完美实现。 </Paragraph>
      <Paragraph id='28' $noIndent>B. 均衡币 </Paragraph>
      <Paragraph>一种通过超额抵押，以及市场套利机制形成的代表了经济均衡的数字资产，该资产代表了价格之间的均衡兑换关系。均衡币可以视为链上的计价单位，由 Token 生成合约，套利机制及反馈修正机制组成，除了其风险收益结构比较稳定外，其重要意义在于：首先FOI是完全内生的经济单位，跟随整个公链如以太坊经济体变化而增加或减少；其次FOI是在链上可证，且风险收益结 构不同于ETH。 </Paragraph>
      <Paragraph id='29' $noIndent>C. 期货</Paragraph>
      <Paragraph>一种分布式期货的模型，类似于均衡币，引入任意第三方的清算，能够放大对远期交易的交易规模，或者直接捕捉交易价格波动的收益。这在之前是不可能被设计出来的，一般意义的期货都需要中心化机构进行强制平仓等，但在后期FOI的分布式期货不承担中心化风险。 </Paragraph>
      <Paragraph id='30' $noIndent>D. 加密货币借贷协议</Paragraph>
      <Paragraph>FOI会逐步发展为一个加密数字货币存储协议，支持随存随取，随借随还。通过部署在区块链系统上的自动程序(智能合约)，出资方可以无摩擦地快速获得资金收益，有资金需求的借款方在供合适的抵押物之后就可以快速便捷地获得财务支持。 </Paragraph>
      <Paragraph>同时，由于拥有了链上价格，涉及到平仓或者自动结算的借贷合约，即可引用该价格完成某些约束条件的触发。 </Paragraph>
      <Header id='31'>2  加密数字债券融资</Header>
      <Paragraph id='32' $noIndent>A. 债券信用评级</Paragraph>
      <Paragraph>受限于目前加密金融服务仍然不成熟，不适合中长期债券发行，当前加密数字债券产品类型将以短期债券为主。加密数字债券发行采用注册制，不需要任何中心化机构审核和批准。债券发行人交的发债基础信息将由FOI自动进行必要的形式化校验，发债信息由 Forsage 社区投票确定信用等级后，债券即可正式发行</Paragraph>
      <Paragraph>FOI债券信用评级由社区评级和专业评级组成。社区评级由Forsage生态代币FOI 的持有者执行，评级人了解债券信息后，将 FOI 锁仓至相应等级，评级结束后即可取回 FOI Token。专业评级由专业信用评级机构或专业人士执行，成为专业评级人需要向 Forsage 运营团队交申请，提供能够证明其专业能力和资质的材料。最终评级结果将由社区评级和专业评级共同确定，社区评级权重为 65%，专业评级为 35%。参与评级将获得同等比例评级服务费。</Paragraph>
      <Paragraph id='33' $noIndent>B. 债券交易市场和债券衍生品</Paragraph>
      <Paragraph>为方便债券持有人提前退出投资，收回本息，Forsage未来将推出债券二级交易 市场。债券持有人可在系统给定的参考定价上自由设定转让价格和转让数量。投资人可查看债券基础信息、信用评级信息、预期收益等。投资人支付投资款项后即可获得相应债券的奖励，到期后即可在平台兑付本息。随着奖励的流行，FOI 将预期继续推出更多功能以支持各种债券衍生品。 </Paragraph>
    </Text>
  </>
);

export default ZhWhitepaper;
