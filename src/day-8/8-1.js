const fs = require('fs');
const input = fs.readFileSync('./input-8', 'utf-8');
const arr = input.split('');

arr.pop();
const pixelSize = 25 * 6;
const layersNum = (arr.length / pixelSize);
let fewestZeroLayer = 0;
let minZero = pixelSize + 1;

for (let i = 0; i < layersNum; i++) {
  let zeroCounter = 0;
  for (let j = 0; j < pixelSize; j++) {
    if (arr[i * pixelSize + j] == 0) {
      zeroCounter++;
    }
  }
  if (zeroCounter < minZero) {
    fewestZeroLayer  = i;
    minZero = zeroCounter
  }
}

let oneCounter = 0;
let twoCounter = 0;
arr.slice(fewestZeroLayer * pixelSize, fewestZeroLayer * pixelSize + pixelSize)
   .forEach(elem => {
     if (elem == 1) {
       oneCounter++;
     }
   });
twoCounter = pixelSize - minZero - oneCounter;
console.log(oneCounter * twoCounter);