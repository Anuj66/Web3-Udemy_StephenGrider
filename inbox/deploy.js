const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "meadow favorite replace opinion subway shift desk issue dismiss intact state dynamic",
  "https://goerli.infura.io/v3/90fca4faf34a45ac93bcc98ae7fdfb98"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("Accounts : ", accounts[0]);
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: ["Hi there!"],
    })
    .send({
      gas: "1000000",
      from: accounts[0],
    });

  console.log("Contract deployed to : ", result.options.address);
  provider.engine.stop();
};

deploy();
