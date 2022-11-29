const result = [];

for (let i = 11098; i < 98123; i++) {
  let string = i.toString()
  if (string.includes('5')) {
    let counter5 = 0;
    let validation = 0;
    for (let j = 0; j < string.length; j++) {
      if (string[j] === '5') {
        counter5 += 1;
      }

      let numberJ = parseInt(string[j]);
      let numberJ1 = parseInt(string[j+1]);

      if (numberJ <= numberJ1 || isNaN(numberJ1)) {
        validation += 0;
      } else {
        validation += 1;
      }
    }

    if (counter5 >= 2 && validation === 0) {
      result.push(i)
    }
  }
}

console.log(result.length);
console.log(result[55]);

