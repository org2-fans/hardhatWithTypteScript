import { expect } from "chai";
import { ethers } from "hardhat";
const Table = require("cli-table3");

//const UniswapV3Deployer_1 = require("../node_modules/uniswap-v3-deploy-plugin/dist/deployer/UniswapV3Deployer");
//let v3Contracts = await UniswapV3Deployer_1.UniswapV3Deployer.deploy(deployer);

import { UniswapV3Deployer } from "../node_modules/uniswap-v3-deploy-plugin/dist/deployer/UniswapV3Deployer";

describe("Uniswap v3", function () {
  it("deploy info", async function () {
    let [deployer] = await ethers.getSigners();
    let contracts = await UniswapV3Deployer.deploy(deployer);
    //console.log("uniswap v3 contracts:");
    //console.log("WETH9:", contracts.weth9.address);
    //console.log("factory:", contracts.factory.address);
    //console.log("router:", contracts.router.address);
    //console.log("nftDescriptorLibrary:", contracts.nftDescriptorLibrary.address);
    //console.log("positionDescriptor:", contracts.positionDescriptor.address);
    //console.log("positionManager:", contracts.positionManager.address);
    let table = new Table({
          head: ["Contract", "Address"],
          style: { border: [] },
    });

    for (const item of Object.keys(contracts)) {
        table.push([item, contracts[item].address]);
    }
    console.info(table.toString());

  });
});
