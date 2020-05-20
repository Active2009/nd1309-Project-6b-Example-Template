var HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      host: "localhost",
      provider: function() {
        return new HDWalletProvider( "supply execute absorb bottom caution ecology science finger fatal ignore climb affair", "https://rinkeby.infura.io/v3/16c5f41b37634654a28e807565066eca");
      },
      network_id:4
    }
  }
};