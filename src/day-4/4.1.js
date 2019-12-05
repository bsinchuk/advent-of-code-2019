// input is:
const x = 353096;
const y = 843212;

const checkNumber = (x) => {
  let double = false;
  let remainder = x % 10;
  let digit = remainder;
  x = Math.floor(x / 10);

  while (x > 0) {
    if (x % 10 > remainder) {
      return false;
    }
    remainder = x % 10;
    if (digit == remainder & !double) {
      double = true;
    }
    digit = remainder;
    x = Math.floor(x / 10);
  }
  
  return double;
};

let result = 0;

for (let i = x; i <= y; i++) {
  if (checkNumber(i)) {
    result++;
  }
}

console.log(result);