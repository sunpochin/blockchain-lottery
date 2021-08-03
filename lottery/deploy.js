const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");
require('dotenv').config()

console.log('process.env.PHRASE: ', process.env.PHRASE);
console.log('process.env.ENDPOINT: ', process.env.ENDPOINT);

const provider = new HDWalletProvider(
  process.env.PHRASE, 
  process.env.ENDPOINT
  // "juice bicycle seek common shield hello below angry source share exact mobile",
  // // remember to change this to your own phrase!
  // "https://rinkeby.infura.io/v3/15c1d32581894b88a92d8d9e519e476c"
  // // remember to change this to your own endpoint!
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ gas: "1000000", from: accounts[0] });

    console.log("Interface: ", interface);
    console.log("Contract deployed to", result.options.address);
};
deploy();
