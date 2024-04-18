// exercise 1 - 
const num1 = 8;
const num2 = 15;
const sum = num1 + num2;
console.log(sum);
// exercise 2 - 
const a = 30;
const b = 12;
console.log(a-b);
// exercise 3 - 
const x = 7;
const y = 3;
const product = x * y;
console.log(product); 
// exercise 4 -
const dividend = 20;
const divisor = 4;
const quotient = dividend / divisor;
console.log("Quotient: " + quotient);
const remainder = dividend % divisor;
console.log("Remainder: " + remainder);
// exercise 5 -
const number1 = 15;
const number2 = 25;
const number3 = 10;
console.log((number1+number2+number3) / 3);
// exercise 6 -The modulo operator (%) returns the remainder of a division operation.
const xx = 10;
const remainder1 = xx % 3;
console.log(remainder1);
// exercise 7 -
let number ; 
if (number % 2 === 0) {
    console.log("even number");
} else {
    console.log("odd number");
}
// exercise 8 -
let number4 ;
if (number4 % 5 === 0 && number4 % 7 === 0) {
    console.log("number divisible");
} else{
    console.log("not divisible");
}
// exercise 9 -
for (let i = 1; i <= 20; i++) {
    if (i % 4 === 0) {
        console.log(i);
    }
}
// exercise 10 -
let num ;
if (num > 10 && num < 20) {
    console.log(num + " is greater than 10 and less than 20.");
} else {
    console.log(num + " does not satisfy the condition.");
}
// exercise 11 -
let num3 ;
if (num3 < -5 || num3 > 10) {
    console.log(num3 + " satisfies the condition.");
} else {
    console.log(num3 + " does not satisfy the condition.");
}
// exercise 12 -
let boolean ;
console.log("opposite: " + !boolean);
// exercise 13 -
if ((num > 5 && num < 10) || (num > 20 && num < 30)) {
    console.log(num + " satisfies one of the conditions.");
} else {
    console.log(num + " does not satisfy any condition.");
}