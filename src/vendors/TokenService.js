const _ETH = "0x6574680000000000";

const tokenDecimals=8;

const tokenAddress='0x9cE16e2CFb5e27314C4b11A9d54F61e42e17Ab6e';
const tokenAbi=[{"constant":false,"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"destroy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"constant":false,"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address payable","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":true,"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];

const saleAddress='0x7C969014204ba4f50fbD514c3b893ae1Effe0894';
const saleAbi=[{"constant":false,"inputs":[{"internalType":"bytes8","name":"_symbol","type":"bytes8"}],"name":"buyTokens","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"destroy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"refillEtherBalance","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes8","name":"_symbol","type":"bytes8"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"setPrice","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"setToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_buyer","type":"address"},{"indexed":false,"internalType":"bytes8","name":"_currency","type":"bytes8"},{"indexed":false,"internalType":"uint256","name":"_currencyAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_tokensAmount","type":"uint256"}],"name":"TokensBought","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"constant":false,"inputs":[{"internalType":"address payable","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":false,"inputs":[],"name":"withdrawEther","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdrawTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes8","name":"_symbol","type":"bytes8"},{"internalType":"uint256","name":"_currencyAmount","type":"uint256"}],"name":"calculatePurchaseAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes8","name":"_symbol","type":"bytes8"}],"name":"getPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getSaleEtherBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getSaleTokenBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getToken","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}];

export class TokenService{
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
                let tokensAmount = await this.contracts.TokenSale.methods.calculatePurchaseAmount(_ETH,amount).call();
                tokensAmount = this.toDecimals(tokensAmount);
                return resolve(tokensAmount)
            }catch(e){
                return reject(e);
            }
        })
    }

    // returns current token/eth rate
    getPurchaseRate(){
        return new Promise(async(resolve,reject)=>{
            try{
                let tokenRate = await this.contracts.TokenSale.methods.getPrice(_ETH).call();
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
                let txHash = await this.contracts.TokenSale.methods.buyTokens(_ETH).send({from:await this.getDefaultAccount(),value:amount});    
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
                        event = this.formatEventData(event);
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
                        event = await this.formatEventData(event);
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
                    let data = await this.formatEventData(rawEvent);
                    callback(data);
                });
        })();
    }

    convertBytes32ToString(bytes32){
        bytes32 = bytes32.replace(/00/g,"");
        let str =  web3.toAscii(bytes32)
        return str;
    }
    formatEventData(event){
        return new Promise(async(resolve,reject)=>{
            try{
                let returnValues = event.returnValues;
                let timestamp = await this.web3.eth.getBlock(event.blockNumber);
                let data = {
                    'txId':event.transactionHash,
                    'blockNumber':event.blockNumber,
                    'txIndex':event.transactionIndex,
                    "address":returnValues['_buyer'],
                    "currency":this.convertBytes32ToString(returnValues['_currency']),
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
    addLiquidity(amount){
        return new Promise(async(resolve,reject)=>{
            try{
                alert('WORK IN MANUAL_PROGRESS')
                return resolve(false);
            }catch(e){
                return reject(e);
            }
        })
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

