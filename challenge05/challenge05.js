const users = 'https://codember.dev/mecenas.json';

const challenge = (arrayUsers) => {
  console.log('RONDA')
  console.log('Array Users:', arrayUsers.length);
  const winners = [];

  for (let i = 0; i < arrayUsers.length; i+=2){
    winners.push(arrayUsers[i])
  }

  if (winners.length > 1 && arrayUsers.length % 2 !== 0) {
      winners.shift()
  }

  if (winners.length === 1) {
    console.log(winners, '---------\n')
    return winners[0]
  } else {
    console.log(winners)
    return challenge(winners, '---------\n')
  }
};

fetch(users)
.then((response) => response.json())
.then((users) => {
  console.log('INDEX', users.indexOf(challenge(users)));
})

