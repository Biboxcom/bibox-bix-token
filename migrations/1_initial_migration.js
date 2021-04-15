const Migrations = artifacts.require("BIXToken");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
