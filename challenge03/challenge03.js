const fs = require("fs");

const colors = JSON.parse(fs.readFileSync("challenge03/colors.txt"));
const arrayColors = [];

// for (let i = 0; i < colors.length; ) {
//   if(i === 0) {
//     if((colors[i] !== colors[i+1])){
//       if(colors[i]===colors[i+2]){
//         i=i+2;
//       } else {
//         const arrTemp = [];
//         arrTemp.push(colors[i],colors[i+1])
//         i=i+1;
//       }
//     }
//     i=i+1;
//   }
//   if((colors[i] !== colors[i+1])){

//     if(colors[i]===colors[i+2]){

//       i=i+2;
//     } else {
//       i=i+1;
//     }
//   }
//   i=i+1;

// }

// console.log(arrayColors)



for (let i = 0; i < colors.length; ) {
  if (colors[i] !== colors[i + 1]) {
    if (colors[i] === colors[i + 2]) {
      console.log('dos en linea')
      i = i + 2;
    } else {
      console.log('uno en linea')
      i = i + 1;
    }
  }
}

