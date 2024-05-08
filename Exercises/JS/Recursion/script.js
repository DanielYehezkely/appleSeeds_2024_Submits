// Exercise 1 - sum of natural numbers
const sumOfNaturalNumbers = (n) => {
    if (n === 1) {
        return 1
    }
    else {
        return n + sumOfNaturalNumbers(n-1)
    }
} 
console.log(sumOfNaturalNumbers(6));
console.log(sumOfNaturalNumbers(30));
console.log(sumOfNaturalNumbers(2));
console.log(sumOfNaturalNumbers(1));

// Exercise 2 - reverse string
const reverseString = (str) => {
    if (str.length === 0) {
        return str
    } else {
        return reverseString(str.substring(1)) + str[0];
    }
}

console.log(reverseString("daniel"));
console.log(reverseString("java"));
console.log(reverseString("fun"));

// Exercise 3 - count down
const countDown = (n) => {
    if (n === 1) {
        return 1
    } else {
        console.log(n);
        return countDown(n-1);
    }
}

console.log(countDown(6));
console.log(countDown(20));
console.log(countDown(10));

// Exercise 4 - count down
const printArr = (arr) => {
    if (arr.length === 0) {
        return `no more item in arr`
    } else {
        console.log(arr[0]);
        arr.shift()
        return printArr(arr);
    }
}

console.log(printArr([1,2,3,4,5,6]));
console.log(printArr(["hello", "Welcome", "greetings"]));