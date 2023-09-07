import { ethers } from "hardhat";

async function main() {
  const pool = await ethers.deployContract("Pool")
  await pool.waitForDeployment();
  console.log(`Pool Deployed Address ${pool.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
