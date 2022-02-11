require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enroll supply suggest name riot mad million grace option equal giggle'; 
let testAccounts = [
"0xf96f565f192306de0857a2f92855410cbf3810b3e5cb636944b04a3a718de4c7",
"0xe73b278e4d02fef286ecf374d5c2a22910f675c2a80500b7c9e2a7536a415374",
"0xbd156fdcc2a5f2e33b2c2eb3c458776efb8eb5da23af3baa45078b905d831ada",
"0x3c30048c588e17d0e2dc0c574afa7fec23359acdc680adf6a3706516476196d7",
"0xd11d29c1fa4a9c6d0c3de18cf71e1f0372510444e84f83cb17f55f599fc26c73",
"0x334e280ab586322b8df529b478c6773d4b5bf22dd8e2a6ea6d1c807a4bdb637c",
"0x632f673b5f9f0e1ab01363619694fc853ae4e091b415bfbc299950d6b1a290d9",
"0xfc6d21e5a5ab0c148525735484ede975c57d4365925d4d101f87fcc30ce626a1",
"0x57132a5a9209896c8f4f6372eba1c60c4afa43be280861f28c16d5b102d32599",
"0x39302bc91cc7bb9cf4f5a046923a5b0eb551995f94b65fc1970f650da7fe1c00"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


