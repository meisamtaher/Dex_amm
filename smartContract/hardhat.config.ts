import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('dotenv').config();

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    // for mainnet
    'scroll-sepolia':{
      url: 'https://scroll-public.scroll-testnet.quiknode.pro',
      accounts: [process.env.WALLET_KEY as string],
      gasPrice: 1000000000,
    },
    'polygon-zkevm-test':{
      url: 'https://polygonzkevm-testnet.g.alchemy.com/v2/NAM9u52_13bD1BUUZK1H3-jMcVX3pgR5',
      accounts: [process.env.WALLET_KEY as string],
      gasPrice: 1000000000,
    },
    'sepolia':{
      url: 'https://eth-sepolia.g.alchemy.com/v2/uT32-cQ_Cns0riUDIkSyLuikSga4SAg4',
      accounts: [process.env.WALLET_KEY as string],
      gasPrice: 1000000000,
    },
    'goerli':{
      url: 'https://eth-goerli.g.alchemy.com/v2/AnUP6UgLP1hi0_5HyiFk4H9MWnnoBvJZ',
      accounts: [process.env.WALLET_KEY as string],
      gasPrice: 1000000000,
    },
    'base-mainnet': {
      url: 'https://mainnet.base.org',
      accounts: [process.env.WALLET_KEY as string],
      gasPrice: 1000000000,
    },
    // for testnet
    'base-goerli': {
      url: 'https://goerli.base.org',
      accounts: [process.env.WALLET_KEY as string],
      // gasPrice: 1000000000,
    },
    // for local dev environment
    'base-local': {
      url: 'http://localhost:8545',
      accounts: [process.env.WALLET_KEY as string],
      // gasPrice: 1000000000,
    },
  },
  defaultNetwork: 'hardhat',
};

export default config;