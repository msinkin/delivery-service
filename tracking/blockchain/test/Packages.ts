import { expect } from "chai";
import { ethers } from "hardhat";
import { Packages } from "../typechain-types";

describe("Packages", function () {
  let packages: Packages;

  beforeEach(async function () {
    const [owner, otherAccount] = await ethers.getSigners();

    const Packages = await ethers.getContractFactory("Packages", owner);
    packages = await Packages.deploy();

    await packages.deployed();
  })

  it("should be deployed", async function() {
    expect(packages.address)
  })
});
