const Token = artifacts.require("NeuToken");

module.exports = async function(deployer){
  await deployer.deploy(Token)
}
