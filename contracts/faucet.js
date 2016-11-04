/* Copyright (C) 2016 Augustus York Rushton Pash - All Rights Reserved
 * You may use, distribute and modify this code under the
 * terms of the license, which was distrubted with this code and located
 * at: https://github.com/augustuspash/CentralDankDashboard
 *
 * You should have received a copy of the license with
 * this file. If not, please visit: https://github.com/augustuspash/CentralDankDashboard
 */

// contract abi
var abiFa = [{ "constant": false, "inputs": [], "name": "pullOutMoney", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "payout", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "payoutAmount", "outputs": [{ "name": "", "type": "uint256", "value": "100000000000" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_newOwner", "type": "address" }], "name": "changeOwner", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_payoutAmount", "type": "uint256" }], "name": "changePayoutAmount", "outputs": [], "payable": false, "type": "function" }, { "inputs": [{ "name": "_dankness", "type": "address", "index": 0, "typeShort": "address", "bits": "", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;dankness", "template": "elements_input_address", "value": "" }, { "name": "_owner", "type": "address", "index": 1, "typeShort": "address", "bits": "", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;owner", "template": "elements_input_address", "value": "" }], "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_to", "type": "address" }, { "indexed": false, "name": "_value", "type": "uint256" }], "name": "Payout", "type": "event" }];

var FaucetContract;
var Faucet;

function loadFaucet() {
    // creation of contract object
    FaucetContract = web3.eth.contract(abiFa);

    // initiate contract for an address
    Faucet = FaucetContract.at('0x0233baa82d805ECD26D2f80280524da84F59Fa58');
}