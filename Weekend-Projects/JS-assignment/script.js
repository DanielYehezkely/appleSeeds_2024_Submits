// Exercise 1 - Yes or No
const yesOrNo = booleanValue => (booleanValue ? 'Yes' : 'No');
console.log(yesOrNo(undefined));
console.log(yesOrNo(2));

console.log('----------------------------Question - 2.1 -------------------------------');

// Exercise 2.1 - Sum of lowest numbers
const getLowestSumNumbers = (numbersArray) => {
    const sorted = numbersArray.filter(num => num > 0 && typeof num === 'number').sort((a, b) => a - b);
    return sorted.length < 2 ? "Not enough positive numbers" : sorted[0] + sorted[1];
}
console.log(getLowestSumNumbers([-20, 2, 10, 33, 0.6, 'string', -98]));

console.log('----------------------------Question - 2.2 -------------------------------');

// Exercise 2.2 - one and zero - binary
const binaryArrayToInt = (array) => {
    return array.reduce((result, digit, index) => result + digit * Math.pow(2, array.length - 1 - index), 0);
};
console.log(binaryArrayToInt([0, 0, 0, 1]));
console.log(binaryArrayToInt([0, 0, 1, 0]));
console.log(binaryArrayToInt([0, 1, 0, 1, 0, 1]));
console.log(binaryArrayToInt([1, 0, 0, 1, 0]));

console.log('----------------------------Question - 2.3  -------------------------------');

// Exercise 2.3 - find the next perfect square
const findNextPerfectSquare = (int) => {
    if (typeof int !== 'number') {
        return `Invalid Value, Only integers allowed.`;
    }
    if (int <= 0 || Math.sqrt(int) % 1 !== 0) {
        return -1;
    }
    let nextSquare = int + 1;
    while (Math.sqrt(nextSquare) % 1 !== 0) {
        nextSquare++;
    }
    return nextSquare;
}
console.log(findNextPerfectSquare(25));
console.log(findNextPerfectSquare(32));
console.log(findNextPerfectSquare('23'));

console.log('----------------------------Question - 2.4 -------------------------------');

// Exercise 2.4 - Unique
const findUnique = (array) => {
    const uniqueValues = array.filter((value, index, arr) => arr.indexOf(value) === arr.lastIndexOf(value));
    for (const value of array) {
        if (uniqueValues.includes(value)) {
            return value;
        }
    }
    return undefined;
};

console.log(findUnique([1, 2, 1, 1, 1, 1]));
console.log(findUnique([1, 1, 1, 10, 1, 1]));

console.log('----------------------------Question - 2.5 -------------------------------');

// Exercise 2.5 - Summation 
const summation = (num) => {
    let sum = 0;
    if (num <= 0) {
        return `Number must be greater then 0.`
    }
    for (let i = 1; i < num + 1; i++) {
        sum += i
    }
    return sum
}

console.log(summation(3));
console.log(summation(6));
console.log(summation(-2));
console.log(summation(0));
console.log(summation(10));

console.log('----------------------------Question - 2.6 -------------------------------');

// Exercise 2.6 - years and centuries
const getCentury = (year) => {
    return year <= 0 ? "Choose year after counting" : `The ${Math.floor(year / 100) + 1} Century`;
};
console.log(getCentury(1987));
console.log(getCentury(237));
console.log(getCentury(2007));
console.log(getCentury(987));
console.log(getCentury(-2));

console.log('----------------------------Question - 2.7 -------------------------------');

// Exercise 2.7 - Basic Math
const mathOperator = (operator, num1, num2) => {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "/":
            return num1 / num2;
        case "*":
            return num1 * num2;
        case "%":
            return num1 % num2;
        case "**":
            return num1 ** num2;
        default:
            return "Invalid Input - Please insert valid numbers and operator";
    }
}

console.log(mathOperator('+', 2, 12));
console.log(mathOperator('*', 24, 11));
console.log(mathOperator('-', 7, 19));
console.log(mathOperator('%', 2, 0.7));

console.log('----------------------------Math In Story -------------------------------');
console.log('----------------------------Question 3.1 - Growth of population -------------------------------');
const nb_year = (pO, precent, aug, p) => {
    // 1. check if the parameters are valid according to the demands
    if (typeof aug !== 'number' || p <= 0 || pO <= 0 || (precent !== null && precent < 0)) {
        return "Invalid Input - Please insert valid numbers";
    }
    // 3.assign variable for counting every year 
    let years = 0
    // 2. make a loop that checks if p is smaller then pO
    while (pO < p) {
        years++;
        pO += (pO * (precent / 100)) + aug; // 4. add the inhabitants that move to the city every iteration(year) also add the precentage of people joining the city every year
    }
    return years // 5.return the years it counts to get 
}

console.log(nb_year(1500, 5, 100, 5000));
console.log(nb_year(1500000, 2.5, 10000, 2000000));

console.log('----------------------------Question 3.2 - people on the bus -------------------------------');
const busStops = [
    [6, 0],
    [5, 2],
    [4, 3],
    [9, 7],
    [10, 7],
    [6, 16],
];
const busStops2 = [
    [10, 0],
    [5, 10],
    [4, 8],
    [9, 9],
    [10, 2],
    [7, 13],
];

const peopleOnBus = (busStations) => {
    let peopleRemain = 0;
    for (const [onBus, offBus] of busStations) {
        peopleRemain += onBus - offBus
    }
    return peopleRemain
}
console.log(peopleOnBus(busStops));
console.log(peopleOnBus(busStops2));

console.log('----------------------------Question 4.1 - Fibonacci -------------------------------');
function fibonacciIterative(n) {
    if (n <= 0) return "nope";
    if (n === 1) return 0;
    if (n === 2) return 1;
    let prev = 0;
    let current = 1;
    for (let i = 3; i <= n; i++) {
        const next = prev + current;
        [prev, current] = [current, next];
    }
    return current;
}
console.log(fibonacciIterative(10));
console.log(fibonacciIterative(8));
console.log(fibonacciIterative(20));

console.log('----------------------------Question 4.2 - tribonacci -------------------------------');
function tribonacci(signature, n) {
    if (n === 0) {
        return [];
    } else if (n <= signature.length) {
        return signature.slice(0, n);
    } else {
        while (signature.length < n) {
            const nextElement = signature
                .slice(-3)
                .reduce((sum, num) => sum + num, 0);
            signature.push(nextElement);
        }
        return signature;
    }
}
console.log(tribonacci([1, 1, 1], 5));
console.log(tribonacci([1, 1, 2], 8));
console.log(tribonacci([9, 17, 31], 12));

console.log('----------------------------Basic iteration logic -------------------------------');
console.log('----------------------------Question 5.1 - trimming string -------------------------------');

const trimString = (str) => str.slice(1, str.length - 1);
console.log(trimString("Java"));
console.log(trimString("JavaScript"));

console.log('----------------------------Question 5.2 - string repeat -------------------------------');
const repeat_str = (count, str) => str.repeat(count);
console.log(repeat_str(5, "Hi"));
console.log(repeat_str(3, "World"));

console.log('----------------------------Question 5.3 - To camel case -------------------------------');
const toCamelCase = (str) => str.replace(/[-_](.)/g, (_, char) => char.toUpperCase()); // the regex here is capturing the char after the macthed regex dash and underscore, the _ used for placeholder convention.
console.log(toCamelCase("my-name-is_Daniel"));
console.log(toCamelCase("is_good-function"));

console.log('----------------------------Question 5.4 - To weird case -------------------------------');
const toWeirdCase = (str) => {
    return str.split('').map((char, index) => {
        return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
    }).join('')

}

console.log(toWeirdCase("String"));
console.log(toWeirdCase("Weird string case"));

console.log('----------------------------Question 5.5 - Abbreviate two words -------------------------------');
const abbreviateTwoWords = (str) => {
    return str.split(' ').map(word => word[0].toUpperCase()).join('.')

}
console.log(abbreviateTwoWords("daniel yehezkely"));
console.log(abbreviateTwoWords("Sam Harris"));

console.log('----------------------------Question 5.6 - mask -------------------------------');
const masking = (str) => {
    return str.split("").map((char, index) => {
        return index < str.length - 4 ? "#" : char;
    }).join("");
}
console.log(masking("458033002134556"));
console.log(masking("45803'''''30021'''''34556"));

console.log('----------------------------Question 5.7 - shortest words -------------------------------');
const getShortestWord = (str) => {
    return str.split(' ').reduce((minLength, word) => {
        const length = word.length;
        if (length < minLength || minLength === 0) {
            minLength = length;
        }
        return minLength;
    }, 0);
}

console.log(getShortestWord("Th1s Task Is Pretty Fun"));
console.log(getShortestWord("enjoying javascript full time"));

console.log('----------------------------Question 5.8 - shortest words 2 -------------------------------');
const getLongestWord = (str) => {
    return str.split(' ').reduce((maxLength, word) => {
        const length = word.length;
        if (length > maxLength || maxLength === 0) {
            maxLength = length;
        }
        return maxLength;
    }, 0);
}

console.log(getLongestWord("Th1s Task Is Pretty Fun"));
console.log(getLongestWord("enjoying javascript full time"));

console.log('----------------------------Advanced iteration logic -------------------------------');
console.log('----------------------------Question 6.1 - Mumbling -------------------------------');

const accum = (str) => !/^[a-zA-Z]+$/.test(str) ?
    `Invalid String - this function accepts only letters form a-z (also capitalized)` :
    str.split('').map((char, index) =>
        char.toUpperCase() + char.toLowerCase().repeat(index)).join('-')

console.log(accum("abcd"));
console.log(accum("aabbcde"));

console.log('----------------------------Question 6.2 - Counting Duplicates -------------------------------');

const countDuplicates = (str) => {
    const frequencies = str.split('').reduce((obj, char) => {
        obj[char] ? obj[char]++ : obj[char] = 1
        return obj
    }, {})

    let highestFreq = 0;
    let charsWithHighestFreq = [];

    for (const char in frequencies) {
        if (frequencies[char] > highestFreq) {
            highestFreq = frequencies[char];
            charsWithHighestFreq = [char];
        } else if (frequencies[char] === highestFreq) {
            charsWithHighestFreq.push(char);
        }
    }
    return `Highest frequency: ${highestFreq} - ${charsWithHighestFreq.join(', ')} shows ${highestFreq} times.`
}

console.log(countDuplicates("aabbcde"));
console.log(countDuplicates("aabbcdekjnsdfffenjscddas"));

console.log('----------------------------Question 6.3 - organize strings -------------------------------');
const a = "xyaabbbccccdefww"
const b = "xxxxyyyyabklmopq"
const longestStr = (s1, s2) => {
    if (!/^[a-z]+$/.test(s1 + s2)) {
        return "only letters from a-z";
    }
    return [...new Set([...s1, ...s2])].sort().join('');
};

console.log(longestStr(a, b));

console.log('----------------------------Question 6.4 - isogram -------------------------------');
const isIsogram = (str) => {
    const frequencies = {};
    for (const char of str.toLowerCase()) {
        if (frequencies[char]) {
            return false;
        }
        frequencies[char] = true;
    }
    return true;
};
console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));

console.log('----------------------------Advanced iteration logic -------------------------------');
console.log('----------------------------Question 7 - implement Js methods -------------------------------');
// Filter -
const arr = [1, 2, 3, 4]
const Filter = (arr) => {
    const filterArr = [];
    for (const item of arr) {
        if (item > 1) { // Some condition
            filterArr.push(item);
        }
    }
    return filterArr;
};

console.log(Filter(arr));

// Foreach
const foreach = (arr) => {
    for (let item of arr) {
        item ++;
        console.log(item);
    }
    return arr
}
console.log(foreach(arr));
console.log(arr);

// map 
const map = (arr) => {
    const mappedArr = [];
    for (let i = 0; i < arr.length; i++) {
        mappedArr.push(arr[i] + 1);
    }
    return mappedArr;
}

console.log(map(arr));

console.log('----------------------------Question 8 - find the parameter of rectangle -------------------------------');
const findPerimeter = (length, width) => 2*(length+width);
console.log(findPerimeter(2,9));
console.log(findPerimeter(20,10));




