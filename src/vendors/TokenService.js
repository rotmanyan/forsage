window.addEventListener('load', async() => {
    initMetamask().then((web3)=>{
        initTokenService(web3);
    });
});

function initTokenService(_web3){
    return new Promise(async(resolve,reject)=>{
        try{
            /* START*/
            let main = new TokenService(_web3);
            console.log(await main.getEthBalance())
            // get ether balance
            let balance = await main.getEthBalance();
            console.log('eth balance',balance);

            let amountOfEther = 1;

            let tokenRate = await main.getPurchaseRate(amountOfEther);
            console.log('tokenRate',tokenRate);

            let tokensAmount = await main.getPurchaseableAmount(balance);
            console.log("how many can I buy for "+balance+"?", tokensAmount);


            // create transaction to buy tokens for 1 Ether
            //let hash = await main.buyTokens(amountOfEther);

            //let depositEthHash = await main.addLiquidity(0.8,ETH);

            //let depositTokenHash = await main.addLiquidity(40,TOKEN);

            let events = await main.getPastTokenBoughtEvents();

            console.log(events)

            let deposits = await main.getPastDepositEvents();
            console.log(deposits)
            let callback = (event)=>{
                console.log('CALLBACK')
                console.log(event);
                alert(event["txId"]);
            }

            main.listenTokenBoughtEvents(callback);

            return resolve(true);
            /* END */
        }catch(e){
            alert(e)
            return reject(e);
        }
    })
}


function initMetamask(){
    return new Promise(async(resolve,reject)=>{
        try{
            if(typeof window.web3 === 'undefined') {
                if(window.ethereum){
                    window.ethereum.enable()
                }else{
                    alert('Metamask is not installed.');
                    reject();
                }
            }else{
                const Web3 = window.Web3;
                const web3Instance = new Web3(window.web3.currentProvider);
                const accounts = await web3Instance.eth.getAccounts();

                if (accounts.length) {
                    web3Instance.eth.defaultAccount = accounts[0];
                } else {
                    window.ethereum.enable();
                }

                return resolve(web3Instance);
            }
        }catch(e){
            return reject(e);
        }
    })
}



const _ETH = "0x6574680000000000";

const ETH="ETH";
const TOKEN='FOI';
const tokenDecimals=18;

const tokenAddress='0xDe429DDE9A8fc109ba79f0956c87c9e3DE0a9921';
const tokenAbi=[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"MinterAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"MinterRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isMinter","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];

const saleAddress='0x39A8603f2498bb6b10E071613a6EF234Eb36F87e';
const saleAbi=[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_sender","type":"address"},{"indexed":false,"internalType":"bytes3","name":"_currency","type":"bytes3"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"DepositEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"_currencyAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_tokensAmount","type":"uint256"}],"name":"TokensBought","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_sender","type":"address"},{"indexed":false,"internalType":"bytes3","name":"_currency","type":"bytes3"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"WithdrawEvent","type":"event"},{"inputs":[],"name":"buyTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"depositEth","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"depositToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"destroy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"refillEtherBalance","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"setToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newFee","type":"uint256"}],"name":"setWithdrawalFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"_sentCurrency","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawEther","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"_currencyAmount","type":"uint256"}],"name":"calculatePurchaseAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_sender","type":"address"},{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"getDeposit","outputs":[{"components":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes3","name":"currency","type":"bytes3"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"internalType":"struct LiquiditySale.Deposit","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_sender","type":"address"}],"name":"getDeposits","outputs":[{"components":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes3","name":"currency","type":"bytes3"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"internalType":"struct LiquiditySale.Deposit[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"getRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSaleEtherBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSaleTokenBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTokenDecimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getWithdrawalFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"}];

class TokenService{
    constructor(web3){
        this.web3=web3;
        this.contracts={};
        this.contracts.Token = new this.web3.eth.Contract(tokenAbi);
        this.contracts.Token.options.address=tokenAddress;

        this.contracts.TokenSale = new this.web3.eth.Contract(saleAbi);
        this.contracts.TokenSale.options.address=saleAddress;
    }
    init(){
        return new Promise(async(resolve,reject)=>{
            return resolve(true);
        })
    }

    // returns main account address of user
    getDefaultAccount(){
        return new Promise(async(resolve,reject)=>{
            try{
                if(this.web3.eth.defaultAccount){
                    return resolve(this.web3.eth.defaultAccount);
                }else{
                    throw Error("Error fetching your default account in Metamask. Please unlock your Metamask so that we may access your default account address");
                }
            }catch(e){
                return reject(e);
            }
        })
    }

    // returns eth balance of user
    getEthBalance(){
        return new Promise(async(resolve,reject)=>{
            try{
                let defaultAccount = await this.getDefaultAccount();
                let rawBalance = await this.web3.eth.getBalance(defaultAccount);
                let balance = this.toEthDecimals(rawBalance);
                return resolve(balance)
            }catch(e){
                return reject(e);
            }
        })
    }

    // returns how many tokens can user buy for _amount of currency
    getPurchaseableAmount(_amount){
        return new Promise(async(resolve,reject)=>{
            try{
                let amount = this.fromEthDecimals(_amount);
                amount = amount.toString();
                console.log('calculatePurchaseAmount',amount)
                let tokensAmount = await this.contracts.TokenSale.methods.calculatePurchaseAmount(amount).call();
                tokensAmount = this.toDecimals(tokensAmount);
                return resolve(tokensAmount)
            }catch(e){
                return reject(e);
            }
        })
    }

    // returns current token/eth rate
    getPurchaseRate(_amount){
        return new Promise(async(resolve,reject)=>{
            try{
                let amount = this.fromEthDecimals(_amount);
                amount = amount.toString();
                let tokenRate = await this.contracts.TokenSale.methods.getRate(amount).call();
                return resolve(tokenRate);
            }catch(e){
                return reject(e);
            }
        })
    }

    // creates transation to buy tokens for ether. Will open Metamask pop-up for confirmation
    buyTokens(_amount){
        return new Promise(async(resolve,reject)=>{
            try{
                let amount = this.fromEthDecimals(_amount);
                amount = amount.toString();
                let txHash = await this.contracts.TokenSale.methods.buyTokens().send({from:await this.getDefaultAccount(),value:amount});
                return resolve(txHash);
            }catch(e){
                return reject(e);
            }
        })
    }

    getPastTokenBoughtEvents(){
        return new Promise(async(resolve,reject)=>{
            try{
                let events = [];
                let account = await this.getDefaultAccount();
                this.contracts.TokenSale.getPastEvents('TokensBought',{
                      filter: {_currency: _ETH, _buyer: account}, // Using an array means OR: e.g. 20 or 23
                      fromBlock: 0
                  },
                  (error, rawData)=>{
                      if(error){
                          return reject(error);
                      }
                      let data = [];
                      for(let key in rawData){
                          let event = rawData[key];
                          event = this.formatTokenBoughtEventData(event);
                          data.push(event);
                      }
                      return resolve(data);
                  });
            }catch(e){
                return reject(e);
            }
        });
    }

    getPastTokenBoughtEvents(){
        return new Promise(async(resolve,reject)=>{
            try{
                let events = [];
                let account = await this.getDefaultAccount();
                this.contracts.TokenSale.getPastEvents('TokensBought',{
                      filter: {_currency: _ETH, _buyer: account}, // Using an array means OR: e.g. 20 or 23
                      fromBlock: 0
                  },
                  async (error, rawData)=>{
                      if(error){
                          return reject(error);
                      }
                      let data = [];
                      for(let key in rawData){
                          let event = rawData[key];
                          event = await this.formatTokenBoughtEventData(event);
                          data.push(event);
                      }
                      return resolve(data);
                  });
            }catch(e){
                return reject(e);
            }
        });
    }

    listenTokenBoughtEvents(callback){
        (async()=>{

            let account = await this.getDefaultAccount();
            console.log('start to listen for '+account)
            this.contracts.TokenSale.events.TokensBought({
                  filter: {_currency: _ETH, _buyer: account}, // Using an array means OR: e.g. 20 or 23
                  fromBlock: 0
              },
              async(error, rawEvent)=>{
                  if(error){
                      return reject(error);
                  }
                  let data = await this.formatTokenBoughtEventData(rawEvent);
                  callback(data);
              });
        })();
    }

    convertBytes32ToString(bytes32){
        bytes32 = bytes32.replace(/00/g,"");
        let str =  web3.toAscii(bytes32)
        return str;
    }
    formatTokenBoughtEventData(event){
        return new Promise(async(resolve,reject)=>{
            try{
                let returnValues = event.returnValues;
                let timestamp = await this.web3.eth.getBlock(event.blockNumber);
                let data = {
                    'txId':event.transactionHash,
                    'blockNumber':event.blockNumber,
                    'txIndex':event.transactionIndex,
                    "address":returnValues['_buyer'],
                    "currency":ETH,
                    "currencyAmount":this.toEthDecimals(returnValues['_currencyAmount']),
                    "tokensAmount":this.toDecimals(returnValues['_tokensAmount']),
                    'timestamp': timestamp.timestamp
                };
                return resolve(data);
            }catch(e){
                return reject(e);
            }
        })
    }

    // LIQUIDITY

    addLiquidity(amount,currency){
        return new Promise(async(resolve,reject)=>{
            try{
                return resolve(await this.depositEth(amount));
            }catch(e){
                return reject(e);
            }
        })
    }

    depositEth(_amount){
        return new Promise(async(resolve,reject)=>{
            try{
                let amount = this.fromEthDecimals(_amount);
                amount = amount.toString();
                let txHash = await this.contracts.TokenSale.methods.depositEth().send({from:await this.getDefaultAccount(),value:amount});
                return resolve(txHash);
            }catch(e){
                return reject(e);
            }
        })
    }

    depositTokens(_amount){
        return new Promise(async(resolve,reject)=>{
            try{
                let amount = this.fromDecimals(_amount);
                amount = amount.toString();
                let allowanceTxHash = await this.contracts.Token.methods.approve(saleAddress,amount).send({from:await this.getDefaultAccount()})
                if(allowanceTxHash){
                    let transferTxHash = await this.contracts.Token.methods.transferFrom(await this.getDefaultAccount(), saleAddress,amount).send({from:await this.getDefaultAccount()});
                    return resolve(transferTxHash);
                }
                throw new Error('Error approving token transfer. TX: '+allowanceTxHash);
            }catch(e){
                return reject(e);
            }
        })
    }

    getDeposits(){
        return new Promise(async(resolve,reject)=>{
            try{
                let deposits = await this.contracts.TokenSale.methods.getDeposits(await this.getDefaultAccount()).call();
                return resolve(deposits);
            }catch(e){
                return reject(e);
            }
        })
    }

    withdraw(_depositIndex){
        return new Promise(async(resolve,reject)=>{
            try{
                let transferTxHash = await this.contracts.TokenSale.methods.withdraw(_index).send({from:await this.getDefaultAccount()});
                return resolve(transferTxHash);
            }catch(e){
                return reject(e);
            }
        })
    }



    getPastDepositEvents(currency){
        return new Promise(async(resolve,reject)=>{
            try{
                let events = [];
                let account = await this.getDefaultAccount();
                this.contracts.TokenSale.getPastEvents('DepositEvent',{
                      filter: {_currency: currency, _sender: account}, // Using an array means OR: e.g. 20 or 23
                      fromBlock: 0
                  },
                  async (error, rawData)=>{
                      if(error){
                          return reject(error);
                      }
                      let data = [];
                      for(let key in rawData){
                          let event = rawData[key];
                          event = await this.formatDepositEventData(event);
                          data.push(event);
                      }
                      return resolve(data);
                  });
            }catch(e){
                return reject(e);
            }
        });
    }

    listenDepositEvents(currency,callback){
        (async()=>{

            let account = await this.getDefaultAccount();
            console.log('start to listen for '+account)
            this.contracts.TokenSale.events.DepositEvent({
                  filter: {_currency: currency, _sender: account}, // Using an array means OR: e.g. 20 or 23
                  fromBlock: 0
              },
              async(error, rawEvent)=>{
                  if(error){
                      return reject(error);
                  }
                  let data = await this.formatDepositEventData(rawEvent);
                  callback(data);
              });
        })();
    }

    formatDepositEventData(event){
        return new Promise(async(resolve,reject)=>{
            try{
                let returnValues = event.returnValues;
                let timestamp = await this.web3.eth.getBlock(event.blockNumber);
                let currency = this.convertBytes32ToString(returnValues['_currency']);
                let amount = 0;
                if(currency===_ETH){
                    amount=this.toEthDecimals(returnValues['amount']);
                }else{
                    amount=this.toDecimals(returnValues['amount']);
                }
                let data = {
                    'txId':event.transactionHash,
                    'blockNumber':event.blockNumber,
                    'txIndex':event.transactionIndex,
                    "address":returnValues['sender'],
                    "currency":currency,
                    "amount":amount,
                    'timestamp': timestamp.timestamp
                };
                return resolve(data);
            }catch(e){
                return reject(e);
            }
        })
    }


    getPastWithdrawEvents(currency){
        return new Promise(async(resolve,reject)=>{
            try{
                let events = [];
                let account = await this.getDefaultAccount();
                this.contracts.TokenSale.getPastEvents('WithdrawEvent',{
                      filter: {_currency: currency, _sender: account}, // Using an array means OR: e.g. 20 or 23
                      fromBlock: 0
                  },
                  async (error, rawData)=>{
                      if(error){
                          return reject(error);
                      }
                      let data = [];
                      for(let key in rawData){
                          let event = rawData[key];
                          event = await this.formatDepositEventData(event);
                          data.push(event);
                      }
                      return resolve(data);
                  });
            }catch(e){
                return reject(e);
            }
        });
    }

    listenWithdrawEvents(currency,callback){
        (async()=>{
            let account = await this.getDefaultAccount();
            console.log('start to listen for '+account)
            this.contracts.TokenSale.events.WithdrawEvent({
                  filter: {_currency: currency, _sender: account}, // Using an array means OR: e.g. 20 or 23
                  fromBlock: 0
              },
              async(error, rawEvent)=>{
                  if(error){
                      return reject(error);
                  }
                  let data = await this.formatDepositEventData(rawEvent);
                  callback(data);
              });
        })();
    }

    // convert
    toDecimals(amount)
    {
        return amount/Math.pow(10,tokenDecimals);
    }

    fromDecimals(amount)
    {
        return amount*Math.pow(10,tokenDecimals).toFixed(3);
    }

    toEthDecimals(amount)
    {
        return amount/Math.pow(10,18);
    }

    fromEthDecimals(amount)
    {
        return amount*Math.pow(10,18).toFixed(3);
    }
}

