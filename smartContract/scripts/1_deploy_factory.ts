import { ethers } from "hardhat";
import { useEnv } from "../utils/env";
import uniswapArtifact from "@uniswap/v2-core/build/UniswapV2Factory.json"
async function main() {
  const dexcontractFactory = await ethers.getContractFactory(uniswapArtifact.abi, uniswapArtifact.bytecode);
  const dexFactory = await dexcontractFactory.deploy(useEnv("FEE_SETTER_ADDRESS"));
  await dexFactory.waitForDeployment();
  console.log("DEX Factory deployed at Address: ", await dexFactory.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
