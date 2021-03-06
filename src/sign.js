const { createSign, createVerify } = require('crypto');
const { publicKey, privateKey } = require('./keypair');

const message = 'i am bond, james bond! 007';

/// SIGN

const signer = createSign('rsa-sha256');

signer.update(message);

const signature = signer.sign(privateKey, 'hex');

/// VERIFY

const verifier = createVerify('rsa-sha256');

verifier.update(message);

const isVerified = verifier.verify(publicKey, signature, 'hex');

console.log(`Verified: ${isVerified}`);
