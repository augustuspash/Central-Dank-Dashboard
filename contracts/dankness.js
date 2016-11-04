/* Copyright (C) 2016 Augustus York Rushton Pash - All Rights Reserved
 * You may use, distribute and modify this code under the
 * terms of the license, which was distrubted with this code and located
 * at: https://github.com/augustuspash/CentralDankDashboard
 *
 * You should have received a copy of the license with
 * this file. If not, please visit: https://github.com/augustuspash/CentralDankDashboard
 */
// contract abi
var abiDank = [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string", "value": "Dankness" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "approve", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_newMinter", "type": "address" }], "name": "changeMinter", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint8", "value": "10" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "balance", "type": "uint256", "value": "0" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string", "value": "D" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_value", "type": "uint256" }], "name": "destroy", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_value", "type": "uint256" }], "name": "mint", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_newOwner", "type": "address" }], "name": "changeOwner", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transfer", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "totalDank", "outputs": [{ "name": "", "type": "uint256", "value": "2001000000000000" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }, { "name": "_spender", "type": "address" }], "name": "allowance", "outputs": [{ "name": "remaining", "type": "uint256", "value": "0" }], "payable": false, "type": "function" }, { "inputs": [{ "name": "_owner", "type": "address", "index": 0, "typeShort": "address", "bits": "", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;owner", "template": "elements_input_address", "value": "" }, { "name": "_minter", "type": "address", "index": 1, "typeShort": "address", "bits": "", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;minter", "template": "elements_input_address", "value": "" }], "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_from", "type": "address" }, { "indexed": true, "name": "_to", "type": "address" }, { "indexed": false, "name": "_value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_owner", "type": "address" }, { "indexed": true, "name": "_spender", "type": "address" }, { "indexed": false, "name": "_value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_minter", "type": "address" }, { "indexed": false, "name": "_value", "type": "uint256" }], "name": "Minted", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_minter", "type": "address" }, { "indexed": false, "name": "_value", "type": "uint256" }], "name": "Destroyed", "type": "event" }];

var DanknessContract;
var Dankness;

function loadDankness() {
    // creation of contract object
    DanknessContract = web3.eth.contract(abiDank);

    // initiate contract for an address
    Dankness = DanknessContract.at('0x3AE515AF99e1D8E5CC37699b0059AE834Fbd46ce');
}

function insertDecimal(num) {
    return (num / 10000000000).toFixed(10);
}

function balanceToInt(num) {
    return num * 10000000000;
}