// Example #1
const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  times: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

// 상호의존적(서로 연결됨)
const plusResult = calculator.plus(2, 3); // 5
const minusResult = calculator.minus(plusResult, 10); // -5
const timesResult = calculator.times(10, minusResult); // -50
const divideResult = calculator.divide(timesResult, plusResult); // -45
const powerResult = calculator.power(divideResult, minusResult); //

// Example #2
const age = 96;
function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

// console.log(krAge); // 98
