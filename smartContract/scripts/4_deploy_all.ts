import { ethers } from "hardhat";
import { useEnv } from "../utils/env";

import WETH9 from "../WETH9.json"

import uniswapArtifact from "@uniswap/v2-core/build/UniswapV2Factory.json"
import uniswapPairArtifact from "@uniswap/v2-core/build/IUniswapV2Pair.json"
import uniswapRouterArtifact from "@uniswap/v2-periphery/build/UniswapV2Router02.json"
async function main() {
  const dexcontractFactory = await ethers.getContractFactory(uniswapArtifact.abi, uniswapArtifact.bytecode);
  const dexFactory = await dexcontractFactory.deploy(useEnv("FEE_SETTER_ADDRESS"));
  await dexFactory.waitForDeployment();
  const desxFactoryAddress = await dexFactory.getAddress();
  console.log("DEX Factory deployed at Address: ", desxFactoryAddress);

  const [owner] = await ethers.getSigners();
  const TokenContractFactory = await ethers.getContractFactory("Token");
  const token1 = await TokenContractFactory.deploy(useEnv("FIRST_TOKEN_NAME"),useEnv("FIRST_TOKEN_SYMBOL"));
  await token1.waitForDeployment();
  const token1Address = await token1.getAddress();
  console.log(useEnv("FIRST_TOKEN_SYMBOL") ," token deployed at address: ", token1Address);
  const token2 = await TokenContractFactory.deploy(useEnv("SECOND_TOKEN_NAME"),useEnv("SECOND_TOKEN_SYMBOL"));
  await token2.waitForDeployment();
  const token2Address = await token2.getAddress();
  console.log(useEnv("SECOND_TOKEN_SYMBOL") ," token deployed at address: ", token2Address);

  await token1.mint(owner, ethers.parseUnits("10000","ether"));
  await token2.mint(owner, ethers.parseUnits("20000","ether"));
  console.log("total supply of '",useEnv("FIRST_TOKEN_SYMBOL"),"' is ",await token1.totalSupply())
  console.log("total supply of '",useEnv("SECOND_TOKEN_SYMBOL"),"' is ",await token2.totalSupply())

  const tx = await dexFactory.createPair(token1Address,token2Address);
  await tx.wait();
  const pairAddress = await dexFactory.getPair(token1Address,token2Address);
  console.log("Pair created with address: ", pairAddress);

  const pairContract = await ethers.getContractAt(uniswapPairArtifact.abi,pairAddress);
  const reserve = await pairContract.getReserves();
  console.log("Pair contract Reserves: ", reserve);

  const WETH = await ethers.getContractFactory(WETH9.abi,WETH9.bytecode);
  const weth = await WETH.deploy();
  await weth.waitForDeployment();
  const wethAddress = await weth.getAddress()
  console.log("WETH contract deployed on address: ", wethAddress);


  const uniswapRouterFactory = await ethers.getContractFactory(uniswapRouterArtifact.abi,uniswapRouterArtifact.bytecode);
  const uniswapRouter = await uniswapRouterFactory.deploy(desxFactoryAddress,wethAddress);
  await uniswapRouter.waitForDeployment();
  const uniswapRouterAddress = await uniswapRouter.getAddress()
  console.log("Router contract deployed on address: ", uniswapRouterAddress);

  const tx2 = await token1.approve(uniswapRouterAddress,ethers.parseUnits("5000","ether"));
  await tx2.wait();
  const tx3 = await token2.approve(uniswapRouterAddress,ethers.parseUnits("1000","ether"));
  await tx3.wait();

  const tx4 = await uniswapRouter.connect(owner).addLiquidity(
    token1Address,
    token2Address,
    ethers.parseUnits("5000","ether"),
    ethers.parseUnits("1000","ether"),
    0,0,
    owner.address,
    Math.floor(Date.now()/1000 + (10*60))
  )
  await tx4.wait();
  const reserve2 = await pairContract.getReserves();
  console.log("Pair contract Reserves: ", reserve2);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
