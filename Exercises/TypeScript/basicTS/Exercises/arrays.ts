let numbersArray: number[] = [];
numbersArray = [1, 2, 4, 6, 7, 8, 9, 10];

function sumArray(array: number[]): number {
  return array.reduce((acc, curr) => acc + curr, 0);
} 

console.log(sumArray(numbersArray));

let tuple: [string, number[]];

const logTuple = () : void => {
  const [text, numbers] = tuple;
  console.log(text);
  numbers.forEach(num=> console.log(num))
}

tuple = ["Example", [1, 2, 3, 4, 5]];
logTuple();
