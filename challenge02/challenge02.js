const fs = require('fs');
const encryptedContent = fs.readFileSync('challenge02/encrypted.txt', 'utf-8');
let decryptMessage = '';

for (let i = 0; i < encryptedContent.length;) {
  if (encryptedContent[i] === '9') {
    let code  = encryptedContent.slice(i, i+2);
    let letter = String.fromCharCode(code);
    decryptMessage += letter;
    i += 2;
  } else if (encryptedContent[i] === '1') {
    let code  = encryptedContent.slice(i, i+3);
    let letter = String.fromCharCode(code);
    decryptMessage += letter;
    i += 3;
  } else {
    decryptMessage += encryptedContent[i]
    i += 1;
  }
}

console.log(decryptMessage);