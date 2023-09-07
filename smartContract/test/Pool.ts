import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Pool", function () {
  async function PoolFixture() {
    const [owner, otherAccount] = await ethers.getSigners();
    const Pool = await ethers.getContractFactory("Pool");
    const pool = await Pool.deploy({});

    return { pool, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("should have the right addressess for tokens", async function () {
      const { owner, pool } = await loadFixture(PoolFixture);
    });
  });
});
