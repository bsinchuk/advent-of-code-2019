const fs = require('fs');
const input = fs.readFileSync('./input-2', 'utf-8');

const origArr = input.split(',').map(e => +e);

// 1st part - strict inputs: noun = 12, verb = 2

let arr, result;
outer: for (let noun = 0; noun < 100; noun++) {
  for (let verb = 0; verb < 100; verb++) {
    arr = [...origArr];
    arr[1] = noun;
    arr[2] = verb;
    inner: for (let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
        case 99:
          result = arr[0];
          break inner;
        case 1:
          arr[arr[i + 3]] = arr[arr[i + 1]] + arr[arr[i + 2]];
          break;
        case 2: 
          arr[arr[i + 3]] = arr[arr[i + 1]] * arr[arr[i + 2]];
          break;
      }
      i += 3;
    }
    if (result == 19690720) {
      console.log(`GOT IT AT: ${noun} ${verb}`);
      console.log(noun * 100 + verb);
      break outer;
    }
  }
}

