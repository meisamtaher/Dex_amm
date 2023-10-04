import { ethers } from "hardhat";
import { useEnv } from "../utils/env";

async function main() {
  const [owner] = await ethers.getSigners();
  const TokenContractFactory = await ethers.getContractFactory("Token");
  const token1 = await TokenContractFactory.deploy(useEnv("FIRST_TOKEN_NAME"),useEnv("FIRST_TOKEN_SYMBOL"));
  await token1.waitForDeployment();
  console.log(useEnv("FIRST_TOKEN_SYMBOL") ," token deployed at address: ", await token1.getAddress());

  const token2 = await TokenContractFactory.deploy(useEnv("SECOND_TOKEN_NAME"),useEnv("SECOND_TOKEN_SYMBOL"));
  await token2.waitForDeployment();
  console.log(useEnv("SECOND_TOKEN_SYMBOL") ," token deployed at address: ", await token2.getAddress());
  await token1.mint(owner, ethers.parseUnits("10000","ether"));
  await token2.mint(owner, ethers.parseUnits("20000","ether"));
  console.log("total supply of '",useEnv("FIRST_TOKEN_SYMBOL"),"' is ",await token1.totalSupply())
  console.log("total supply of '",useEnv("SECOND_TOKEN_SYMBOL"),"' is ",await token2.totalSupply())
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
