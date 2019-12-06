const fs = require('fs');
const input = fs.readFileSync('./input-6', 'utf-8');
const arr = input.split('\n');

const map = new Map();
for (let elem of arr) {
  map.set(...elem.split(')').reverse());
}
let you = 'YOU-';
let santa = 'SAN-';
let totalOrbitCount = 0;

const way = {
  'YOU': ['YOU'],
  'SAN': ['SAN']
}

for (let elem of Object.keys(way)) {
  let k = elem;
  let v = map.get(k);
  let counter = 1;
  while(map.has(v)) {
    way[elem].push(v);
    counter++;
    k = v;
    v = map.get(v);
  }
  console.log(counter);
  way[elem].reverse();
}
let same = 0;
for (let i = 0; i < Math.max(way['YOU'].length, way['SAN'].length); i++) {
  if (way['YOU'][i] == way['SAN'][i]) {
    same++;
  } else {
    break;
  }
}
console.log(way['YOU'].length + way['SAN'].length - same * 2 - 2);