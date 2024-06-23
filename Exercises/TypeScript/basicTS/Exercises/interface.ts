interface Person {
  firstName: string;
  lastName: string;
  age: number;
  greet(): string
}

const Person1: Person = {
  firstName:"Daniel",
  lastName:"Yehezkely",
  age: 27,
  greet: function(): string {
    return `Hi ${this.firstName} Welcome Back!`
  }
}

console.log(Person1.greet());

class Animal {

   public name: string;
   
  constructor (name:string ) {
     this.name = name
  }

  public move(distance: number): void {
    console.log(`${this.name} moves ${distance} meters.`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  public bark(): void {
    console.log("woof woof !");
  }

  public move(distance: number): void {
    console.log(`dog named ${this.name} moves ${distance} meters.`);
  }
}

const myDog = new Dog('johnny');

myDog.bark();
myDog.move(20);