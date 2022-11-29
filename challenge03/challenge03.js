const fs = require('fs');

const colors = fs.readFileSync('challenge03/colors.txt', 'utf-8');
// console.log(colors);

console.log(colors.split())