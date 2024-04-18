const currentDate = new Date();
const currentDateTime = currentDate.toLocaleString();
console.log(currentDateTime);

const year = currentDate.getFullYear();
console.log(year);

const month = currentDate.getMonth();
console.log(month);

let date = currentDate.getDate()
console.log(date);

let day = currentDate.getDay();
console.log(day);

console.log(`Hours: ${currentDate.getHours()}, Minutes: ${currentDate.getMinutes()} Seconds: ${currentDate.getSeconds()}`);


let currentDate2 = new Date();
let currentMonth = currentDate2.getMonth();
let currentYear = currentDate2.getFullYear();
let nextMonthDate = new Date(currentYear, currentMonth + 1, 0);
let numberOfDaysInMonth = nextMonthDate.getDate();
console.log(numberOfDaysInMonth);


const totalMinutes = 90;
const hours = Math.floor(totalMinutes / 60);
console.log(hours);
const minutes = totalMinutes % 60; 
console.log(`${totalMinutes} minutes is equal to ${hours} hours and ${minutes} minutes.`);
