var color = ['blue', 'green', 'yellow' ];

for (var i = 0; i < color.length; i++ ) {
  console.log('My #1 choice is ' + color[i] + '.');
}

console.log('My first color is ' + color[0] + '.');
console.log('My second color is ' + color[1] + '.');
console.log('My third color is ' + color[2] + '.');

color.push('red');//Add red
console.log('My last color is ' + color[color.length-1] + '.');

color.pop('red');//Remove red
console.log('My last color is ' + color[color.length-1] + '.');
