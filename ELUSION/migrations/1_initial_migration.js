const Elusion = artifacts.require("ElusionToken.sol");

module.exports = function (deployer) {
  deployer.deploy(Elusion);
};
