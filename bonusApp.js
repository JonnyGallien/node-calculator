const rs = require('readline-sync');
let curOp =  '+';
let curStr = '';
let curArr = [];
let validNum1 = false;
let validOp = false;
let validNum2 = false;
let ops = ['+', '-', '/', '*'];
let num1 = 'a';
let num2 = 'a';
let result = 0;


function calculate() {
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
}

function splitString() {
  curArr = curStr.split(' ');
  num1 = curArr[0];
  curOp = curArr[1];
  num2 = curArr[2];
}

function calculator() {
  while (validOp === false && validNum1 === false && validNum2 === false ) {
    curStr = rs.question('What is the equation you would like to perform? (Enter a space between numbers and operation)');
    splitString();
    console.log(num1 + ' ' + curOp + ' ' + num2);
    if (Number.isNaN(num1)) {
      validNum1 = false;
    } else { 
      validNum1 = true; 
    }
    for (let i = 0; i < ops.length; i++) {
      if (curOp == ops[i]) {
        validOp = true;
        break;
      }
    }
    if (Number.isNaN(num2)) {
      validNum2 = false;
    } else {
      validNum2 = true;
    }
    if (curArr.length !== 3) {
      console.log("ERROR: There is a spacing issue");
    }
    if (num1 === false) {
      console.log('ERROR: The first number is not a real number');
    }
    if (validOp === false) {
      console.log('ERROR: There is an invalid operator');
    }
    if (num2 === false) {
      console.log('ERROR: The second number is not a real number');
    }
  }
}

calculator();
calculate();
console.log('The result it ' + result + '!');