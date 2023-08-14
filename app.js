const rs = require('readline-sync');

let curOp =  '+';
let validOp = false;
let ops = ['+', '-', '/', '*'];
let num1 = 0;
let num2 = 0;
let result = 0;

function calculator() {
  switch(curOp) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
  }
  return result;
}


curOp = rs.question('What operation would you like to perform? [+, -, *, /] ');
for (let i = 0; i < ops.length; i++) {
  if (curOp == ops[i]) {
    validOp = true;
    break;
  }
}
while (validOp === false) {
  curOp = rs.question('What operation would you like to perform? +, -, *, /');
  for (let i = 0; i < ops.length; i++) {
    if (curOp == ops[i]) {
      validOp = true;
    }
  }
}

num1 = rs.questionInt('What is the first number?');
num2 = rs.questionInt('What is the second number?')

calculator();

console.log(result);