const add = function(num1, num2) {
  let sum = num1 + num2;
  return sum;
};

const subtract = function(num1, num2) {
	let subtract = num1 - num2;
  return subtract;
};

const sum = function(array) {
  let sum = 0
	for (i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const multiply = function(array) {
  let multiply = 1;
  for (i = 0; i < array.length; i++) {
    multiply = multiply * array[i];
  }
  return multiply;
};

const power = function(num1, num2) {
	let power = num1 ** num2;
  return power
};

const factorial = function(num) {
	if (num == 0) {
    let answer = 1
    return answer;
  } else {
    for (i = num - 1; i > 0; i--) {
      num = num * i;
    }
    return num;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
