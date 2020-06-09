require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enroll frame short fan rifle mirror proof gesture sleep force gas'; 
let testAccounts = [
"0xae99ae163713e2566e254c144660d04975647e56e2ff962457c5af60c7730074",
"0xbec633d97eb6a7e36786f0eb27fc00b985132d0d4b69b10cc7e77f2af0dee1ae",
"0x9d2344ca093a0ed2f10449e1570b2302fdb264466afe6e6b2978dc7707fd88ab",
"0x8c6efbff1603231856e70d4183627ae970212e915b228ec7444a5bde525bbced",
"0x1738e06eadb7b0ac53add1f3e32d96631068f4cf0c0c7dc6e050782d207385f2",
"0x48dd2c4a1e5fee769c842f38086f21b3ed527f4cc15d0850504313bc263cca43",
"0x9f38bcd1af8703ddbc32f9f7f29009f791b66972974e28d9d2df4f97a084ea17",
"0x2328a2c2e7ce2e70f4cedac3c6c3599d9ae7c403d460ac0cdc757bee3c6105dd",
"0x0865e194c5cbc1c05de96696552941b2a4ad7a7b1894da25807d96339f1a1354",
"0xca9eeb83c1ec2e1bf45c3e4edd1825cdc5ad0f6d1280906f2c8b1e54bcea7217"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
