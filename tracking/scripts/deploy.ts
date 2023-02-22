import { ethers } from "hardhat";

async function main() {
  const Packages = await ethers.getContractFactory("Packages");
  const packages = await Packages.deploy();

  await packages.deployed();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
