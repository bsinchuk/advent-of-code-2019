const fs = require('fs');
const input = fs.readFileSync('./input-1', 'utf-8').split('\n');

// calcX - pt 1, calcY - pt2
const calcX = mass => Math.floor(mass / 3) - 2;
const calcY = (mass) => {
  let req = 0;
  while (mass > 0)  {
    mass =  Math.floor(mass / 3) - 2;
    req += mass;
  }
  req -= mass;
  return req;
};
const fuel = input.map(e => calcY(+e))
                .reduce((prev, next) => prev + next, 0);
console.log(fuel);