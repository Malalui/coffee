const HDWallet = require("@truffle/hdwallet-provider");
//
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },


    rinkeby: {
      provider: () => new HDWallet(mnemonic, `https://rinkeby.infura.io/v3/0f20e89fda0c4252ab82b0c6711894d8`),
      network_id: 4,       // Ropsten's id
      gas: 4500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true,     // Skip dry run before migrations? (default: false for public nets )
      // from: "0xd095d9542FCC007E5fD60CdAAeF8b90c9BdE5B08",

    },
  }
};
