const fs = require('fs');

const users = fs.readFileSync('challenge01/users.txt', 'utf-8');

const arrUsers = users.split('\n\n');

const filterUsers = arrUsers.filter(user => {
  if(user.includes('usr:') && user.includes('eme:') && user.includes('psw:') && user.includes('age:') && user.includes('loc:') && user.includes('fll:')){
    return true; 
  }
})

const numUser = filterUsers.length;
const lastUser = filterUsers.at(-1);

console.log(numUser, lastUser)