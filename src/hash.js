const { createHash } = require('crypto');

// Create a string hash

function hash(input) {
	return createHash('sha256').update(input).digest('hex');
}

// Compare two hashed passwords

let password = 'hello-world!';
const hash1 = hash(password);
console.log(hash1);

/// ... some time later

password = 'hello-world!';
const hash2 = hash(password);
console.log(hash2);
const match = hash1 === hash2;

console.log(match ? '✔️  good password' : '❌  password does not match');
