// Exercise 1 ------------
const isSunny = true;
const isWeekend = false;
console.log(`sunday is a hot and sunny day: ${isSunny}`);
console.log(`sunday is weekend: ${isWeekend}`);
// Exercise 2 ------------
let age = 20;
let license = true;
if (age >= 18) {
    license
    console.log('he can drive');
} else {
    license = false;
    console.log('he cant drive');
}
// Exercise 3 ------------
const knowJavaScript = false;
const knowPython = true ;
console.log(knowPython || knowJavaScript);
// Exercise 4 ------------
const isRaining = true;
console.log(!isRaining);
// Exercise 5 ------------
const likeMusic = true;
const playsGuitar = false;
const hasTime = false;
// Exercise 6 ------------
const personAge = 25
console.log(personAge > 18);
// Exercise 7 ------------
const currentTemprature = 30;
console.log(currentTemprature < 20 || currentTemprature > 30);
// Exercise 8 ------------
const firstNumber = 10;
const secondNumber = '10'
console.log(firstNumber == secondNumber);
console.log(firstNumber === secondNumber);
// Exercise 9 ------------
const budget = 500;
const expense = 450
console.log(expense === budget || expense < budget);
// Exercise 10 ------------
const person1Height = 170;
const person2Height = 165;
console.log(person1Height < person2Height || person1Height === person2Height || person1Height > person2Height);
