const users = 'https://codember.dev/mecenas.json';

const challenge = (arrayUsers) => {

  const winners = [];

  for (let i = 0; i < arrayUsers.length; i += 2) {
    winners.push(arrayUsers[i])
  }

  if (arrayUsers.length > 1 && arrayUsers.length % 2 !== 0) {
    winners.shift()
  }

  if (arrayUsers.length === 1) {
    return winners[0]
  } else {

    return challenge(winners, '---------\n')
  }
};

fetch(users)
  .then((response) => response.json())
  .then((users) => {
    const arrObj = users.map((user, index)=> {
      const obj = {index, user}
      return obj;
    })
    console.log('INDEX', challenge(arrObj));
  })

