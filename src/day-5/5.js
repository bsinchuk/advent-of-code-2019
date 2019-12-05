const fs = require('fs');
const input = fs.readFileSync('./input-5', 'utf-8');
const arr = input.split(',').map(e => +e);

// first part - inVar = 1, second part - inVar = 5
const inVar = 5;

const getParams = (arr, index, com) => {
  let first = arr[arr[index + 1]];
  let second = arr[arr[index + 2]];
  if (+com.charAt(1) == 1) {
    first = arr[index + 1];
  }
  if (+com.charAt(0) == 1) {
    second = arr[index + 2];
  }
  return [first, second];
}
const intInput = (arr, index) => {
  console.log(`INPUT: ${inVar}`);
  arr[arr[index + 1]] = inVar;
  return 1;
}
const intOutput = (arr, index, com) => {
  const mode = +com.charAt(1);
  if (mode == 1) {
    console.log(`OUTPUT: ${arr[index + 1]}`);
  } else {
    console.log(`OUTPUT: ${arr[arr[index + 1]]}`);
  }
  return 1;
}
const intSum = (arr, index, com) => {
  const [first, second] = getParams(arr, index, com);
  arr[arr[index + 3]] = first + second;
  return 3;
}

const intMult = (arr, index, com) => {
  const [first, second] = getParams(arr, index, com);
  arr[arr[index + 3]] = first * second;
  return 3;
}

const intJumpTrue = (arr, index, com) => {
  const [first, second] = getParams(arr, index, com);
  if (first != 0) {
    return second - 1;
  }
  return index + 2;
};

const intJumpFalse = (arr, index, com) => {
  const [first, second] = getParams(arr, index, com);
  if (first == 0) {
    return second - 1;
  }
  return index + 2;
};

const intLessThan = (arr, index, com) => {
  const [first, second] = getParams(arr, index, com);
  arr[arr[index +3]] = first < second ? 1 : 0;
  return 3;
};

const intEquals = (arr, index, com) => {
  const [first, second] = getParams(arr, index, com);
  arr[arr[index +3]] = first == second ? 1 : 0;
  return 3;
};

function runIntcode(array) {
  let step = 1;
  const template = '0000';
  const length = template.length;
  main: for (let i = 0; i < array.length; i++) {
    let command = String(array[i]);
    let textCommand = template.slice(0, length - command.length) + command;
    switch(arr[i] % 100) {
      case 99:
        console.log('code finished');
        break main;
      case 3:
        step = intInput(array, i);
        i += step;
        break;
      case 4:
        step = intOutput(array, i, textCommand);
        i += step;
        break;
      case 1:
        step = intSum(array, i, textCommand);
        i += step;
        break;
      case 2:
        step = intMult(array, i, textCommand);
        i += step;
        break;
      case 5:
        i = intJumpTrue(array, i, textCommand);
        break;
      case 6:
        i = intJumpFalse(array, i, textCommand);
        break;
      case 7:
        step = intLessThan(array, i, textCommand);
        i += step;
        break;
      case 8:
        step = intEquals(array, i, textCommand);
        i += step;
        break;
    }
  }
}

runIntcode(arr);