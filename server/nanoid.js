const brandedId = `WILSON-${nanoid(8)}-${nanoid(8)}-${nanoid(8)}`;
console.log(brandedId); // e.g. 'WILSON-xYz123Ab-9QwErTyU-aBcDeFgH'


import { nanoid } from 'nanoid';
const id = nanoid(32);
console.log(id); // e.g. 'NVViYpJYpj9aeiTuBtHEZxYz123Ab9Q'


// custom alphabet
import { customAlphabet } from 'nanoid';
const customId = customAlphabet('abcdef123456', 12);
console.log(customId()); // e.g. '3f9a1c4e8b2d'



// branded formats
const brandedId = `WILSON-${nanoid(8)}-${nanoid(8)}`;
console.log(brandedId); // e.g. 'WILSON-xYz123Ab-9QwErTyU'



// the secure one customRandom
import { customRandom } from 'nanoid';
import { randomBytes } from 'crypto';

const id = customRandom('ABCabc123', 5, size => randomBytes(size));
console.log(id()); // e.g. 'C3bAa'



// example of the secure one
import { customRandom } from 'nanoid';
import { randomBytes } from 'crypto';
// Define the full alphabet: A-Z, a-z, 0-9
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// Create a generator using customRandom
const generateId = customRandom(alphabet, 32, size => randomBytes(size));
// Generate and print the ID
console.log(generateId()); // e.g. 'aZ3Xb9KpL0qWmN8rT2vYc6HdJ1sUfE4B'
