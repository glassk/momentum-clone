// Example #1
function sayHello() {
  console.log('Hello!');
}

sayHello(); // Hello!
sayHello(); // Hello!

alert();
console.log(); // 아무것도 출력하지 않는다

// Example #2
function sayHello(nameOfPerson, age) {
  console.log('Hello! my name is ' + nameOfPerson + " and I'm " + age);
}

sayHello('nico', 10);
sayHello('dal', 23);
sayHello('lynn', 21);

// Example #3
function plus(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}
console.log(firstNumber); // Uncaught ReferenceError: firstNumber is not defined

function divide(a, b) {
  console.log(a / b);
}

plus(8, 60); // 68
divide(98, 20); // 4.9

// Example #4
const player = {
  name: 'nico',
  sayHello: function (otherPersonsName) {
    console.log('hello! ' + otherPersonsName + ' nice to meet you!');
  },
};

console.log(player.name);
player.sayHello('lynn');
player.sayHello('nico');
