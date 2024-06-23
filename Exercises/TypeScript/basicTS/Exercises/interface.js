var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person1 = {
    firstName: "Daniel",
    lastName: "Yehezkely",
    age: 27,
    greet: function () {
        return "Hi ".concat(this.firstName, " Welcome Back!");
    }
};
console.log(Person1.greet());
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distance) {
        console.log("".concat(this.name, " moves ").concat(distance, " meters."));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.bark = function () {
        console.log("woof woof !");
    };
    Dog.prototype.move = function (distance) {
        console.log("dog named ".concat(this.name, " moves ").concat(distance, " meters."));
    };
    return Dog;
}(Animal));
var myDog = new Dog('johnny');
myDog.bark();
myDog.move(20);
