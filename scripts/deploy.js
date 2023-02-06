const hre = require("hardhat");

async function main() {

  const Voting = await hre.ethers.getContractFactory("Voting");
  const voting = await Voting.deploy("VOting for School Head boy");

  await voting.deployed();

  console.log("Contract Address:",voting.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//Contract address: 0x728583F35cA8aC8F317c111399176C4C22125c9F;