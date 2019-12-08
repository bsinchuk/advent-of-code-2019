const fs = require('fs');
const input = fs.readFileSync('./input-8', 'utf-8');
const arr = input.split('');

arr.pop();
const width = 25;
const height = 6;
const pixelSize = width * height;
const result = new Array();

for (let i = 0; i < height; i++) {
  const row = [];
  for (let j = 0; j < width; j++) {
    let clr = arr[i * width + j];
    let lvl = 1;
    while (clr == 2) {
      clr = arr[lvl * pixelSize + (i * width + j)];
      lvl++;
    }
    clr = clr == 0 ? ''  : 'X';
    row.push(clr);
  }
  result.push(row);
}

console.table(result);