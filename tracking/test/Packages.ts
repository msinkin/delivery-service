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

  it("deployed", async function() {
    expect(packages.address)
  })

  it("create", async function() {
    const tx = await packages.createPackage("Краснодар", "Ульяновск", 10, 10);
    const receipt = await tx.wait();
    const tx2 = await packages.createPackage("Краснодар", "Ульяновск", 10, 10);
    const receipt2 = await tx.wait();
    const tx3 = await packages.createPackage("Краснодар", "Ульяновск", 10, 10);
    const receipt3 = await tx.wait();

    let eventFilter = packages.filters.Delivery();
    let events = await packages.queryFilter(eventFilter);
    for (var i = 0; i < events.length; i++) {
      console.log(events[i].args.packageId.toNumber());
    }
  })
});
