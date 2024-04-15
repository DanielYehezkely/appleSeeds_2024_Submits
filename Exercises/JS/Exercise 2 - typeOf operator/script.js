const num = 10;
console.log(typeof(num));
const str = "Hello"
console.log(typeof (str));
const bool = true;
console.log(typeof (bool));


const firstVar = 42;
const secondVar = "42";
if (typeof(firstVar) === typeof(secondVar)) {
    console.log("the same type");
} else {
    console.log("not the same type");
}

let noValue;
console.log(typeof(noValue));
const emptyValue = null;
console.log(typeof(emptyValue));

const someString = "hello";
console.log(`the value of someString is ${someString} and its type is ${typeof (someString)}` );
const someNumber = 10;
console.log(`the value of someNumber is ${someNumber} and its type is ${typeof (someNumber)}`);
const someBool = true;
console.log(`the value of someBool is ${someBool} and its type is ${typeof (someBool)}`);