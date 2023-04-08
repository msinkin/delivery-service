import { artifacts, ethers, network } from "hardhat";
import fs from "fs";
import path from "path";
import { Packages } from "../typechain-types";

async function main() {
  // This is just a convenience check
  if (network.name === "hardhat") {
    console.warn(
      "You are trying to deploy a contract to the Hardhat Network, which" +
        "gets automatically created and destroyed every time. Use the Hardhat" +
        " option '--network localhost'"
    );
  }

  // ethers is available in the global scope
  const [deployer] = await ethers.getSigners();
  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Packages = await ethers.getContractFactory("Packages");
  const packages = await Packages.deploy();
  await packages.deployed();

  console.log("Token address:", packages.address);

  // We also save the contract's artifacts and address in the frontend directory
  saveFrontendFiles(packages);
}

function saveFrontendFiles(packages: Packages) {
  const contractsDir = path.join(
    __dirname,
    "..",
    "..",
    "website",
    "src",
    "contracts"
  );

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    path.join(contractsDir, "contract-address.json"),
    JSON.stringify({ Token: packages.address }, undefined, 2)
  );

  const TokenArtifact = artifacts.readArtifactSync("Packages");

  fs.writeFileSync(
    path.join(contractsDir, "Packages.json"),
    JSON.stringify(TokenArtifact, null, 2)
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
