/* Exercise 1 --------------------*/
const number = 123;
const stringNumber = number.toString();
console.log(stringNumber);
/* Exercise 2 --------------------*/
const string = '456';
const numberFromString = Number(string);
console.log(numberFromString); 
/* Exercise 3 --------------------*/
const floatString = '78.9';
const floatNumber = parseFloat(floatString);
console.log(floatNumber); 
/* Exercise 4 --------------------*/
const num = 5;
const str = '3';
const result = num + Number(str);
console.log(result); 
/* Exercise 5 --------------------*/
const num0 = 0;
const num1 = 1;
const bool0 = Boolean(num0);
const bool1 = Boolean(num1);
console.log(bool0, bool1); 
/* Exercise 6 --------------------*/
const strNumber = '24';
const convertedNumber = +strNumber;
console.log(convertedNumber); 
/* Exercise 7 --------------------*/
const trueToNumber = Number(true);
const falseToNumber = Number(false);
console.log(trueToNumber, falseToNumber); 
/* Exercise 8 --------------------*/
const nullToNumber = Number(null);
console.log(nullToNumber);
