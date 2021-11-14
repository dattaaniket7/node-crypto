const { publicEncrypt, privateDecrypt } = require('crypto');
const { publicKey, privateKey } = require('./keypair');

const message = 'i am bond, james bond! 007';

const encryptedData = publicEncrypt(publicKey, Buffer.from(message));

console.log(encryptedData.toString('hex'));

const decryptedData = privateDecrypt(privateKey, encryptedData);

console.log(decryptedData.toString('utf-8'));
