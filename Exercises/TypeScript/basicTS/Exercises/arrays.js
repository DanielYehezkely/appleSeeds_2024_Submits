var numbersArray = [];
numbersArray = [1, 2, 4, 6, 7, 8, 9, 10];
function sumArray(array) {
    return array.reduce(function (acc, curr) { return acc + curr; }, 0);
}
console.log(sumArray(numbersArray));
var tuple;
var logTuple = function () {
    var text = tuple[0], numbers = tuple[1];
    console.log(text);
    numbers.forEach(function (num) { return console.log(num); });
};
tuple = ["Example", [1, 2, 3, 4, 5]];
logTuple();
