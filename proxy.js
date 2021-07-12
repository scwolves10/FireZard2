//migrations/proxy.js

const {deployProxy} = require'@openzeppelin/truffle-upgrades');

const FireZard = artifacts.require('FireZard');
const FZ_Dragon = artifacts.require('FZ_Dragon');

module.exports - async function (deployer) {
	await deployProxy(FireZard, { deployer, initializer: 'FZinitialize'});
	await deployProxy(FZ_Dragon, {deployer, initializer: 'FZ_initialize'});
};