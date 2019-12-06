const fs = require('fs');
const input = fs.readFileSync('./input-6', 'utf-8');
const arr = input.split('\n');

const map = new Map();
for (let elem of arr) {
  map.set(...elem.split(')').reverse());
}

let totalOrbitCount = 0;
for (let elem of map.keys()) {
  let k = elem;
  let v = map.get(k);
  let counter = 1;
  while(map.has(v)) {
    counter++;
    k = v;
    v = map.get(v);
  }
  totalOrbitCount += counter;
}
console.log(totalOrbitCount);