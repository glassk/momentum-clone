const player = {
  name: 'nico',
  points: 10,
  fat: true,
};

console.log(player); // {name: 'nico', points: 10, fat: true}
console.log(player.name); // nico
console.log(player['name']); // nico

player.fat = false;
console.log(player); // {name: 'nico', points: 10, fat: false}

player.lastName = 'potato';
console.log(player); // {name: 'nico', points: 10, fat: false, lastName: 'potato'}

player.points = player.points + 15;
console.log(player); //{name: 'nico', points: 25, fat: false, lastName: 'potato'}
