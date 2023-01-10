// const firstValue = 0.1;
// const secondValue = 0.2;
// const resalt = firstValue + secondValue;
// console.log(resalt);

// const stringValue = "1";
// const num = Number(stringValue);
// const numberValue = 2;
// const resalt2 = num + numberValue;
// console.log(resalt2);

// const memory = 820000;
// const file = 820;
// const quantity = Math.round(memory / file);
// console.log(quantity);

// const balance = 100;
// const price = 16;
// const extra = balance % price;
// const amount = (balance - extra) / price;
// console.log(amount, extra);

// const number = 502;
// const value1 = number % 10;
// const value2 = ((number % 100) - value1) / 10;
// const value3 = ((number % 1000) - value2 * 10 - value1) / 100;
// console.log(value1, value2, value3);

// const year = 12;
// const months = 2;
// const percent = 5;
// const value = 1000000;
// const result = ((percent / year) * months * value) / 100;
// console.log(result);

// (2 && 0 && 3)= 0;
// (2 || 0 || 3)= 2;
// (2 && 0 || 3)= 3;

// ЦИКЛИ І УМОВИ
// let age = prompt("Введите ваш возрост", "");

// if (age < 0 || age > 150 || !age) {
//   alert("Введите корректный возраст ");
// } else if (age >= 1 && age <= 11) {
//   alert("Ви  дитина");
// } else if (age > 11 && age <= 17) {
//   alert(" Ви підліток");
// } else if (age > 18 && age <= 59) {
//   alert("Ви дорослий");
// } else if (age < 60) {
//   alert(" Ви пенсіонер");
// }

// let value = +prompt("Видите число от 0 до 9 ", "");
// if (value >= 0 && value <= 9) {
//   switch (value) {
//     case 0:
//       alert(")");
//       break;
//     case 1:
//       alert("!");
//       break;
//     case 2:
//       alert("@");
//       break;
//     case 3:
//       alert("#");
//       break;
//     case 4:
//       alert("$");
//       break;
//     case 5:
//       alert("%");
//       break;
//     case 6:
//       alert("^");
//       break;
//     case 7:
//       alert("&");
//       break;
//     case 8:
//       alert("*");
//       break;
//     case 9:
//       alert("(");
//       break;
//   }
// } else {
//   alert("Цифра не найдена.");
// }

// let start = 1;
// const end = 4;
// let result = 0;
// while (start <= end) {
//   result = result + start;
//   console.log(start, result);
//   start++;
// }

// let number1 = prompt("Введите первое  число", "");
// let number2 = prompt("Введите второе  число", "");
// let min = number2;
// let max = number1;
// if (number1 < number2) {
//   min = number1;
//   max = number2;
// }
// let current = min;
// while (!(max % current == 0 && min % current == 0)) {
//   current--;
// }
// console.log("result", current);

// let number = prompt("Ведите число", "");
// for (let i = 1; i <= number; i++) {
//   if (!(number % i)) {
//     console.log(i);
//   }
// }

// let number = prompt("Ведите пятизначное число", "");

// if (number[0] == number[4] && number[1] == number[3]) {
//   console.log("Это  полиндром");
// } else {
//   console.log("Это не полиндром");
// }

// let number = prompt("Ведите сумму покупки", "");
// if (number < 200) {
//   console.log("Скидки нет");
// } else if (number >= 200 && number < 300) {
//   console.log(" Ваша скидка -3%");
// } else if (number >= 300 && number < 500) {
//   console.log(" Ваша скидка -5%");
// } else if (number > 500) {
//   console.log(" Ваша скидка -7%");
// }

// let numberZero = 0;
// let numberPositive = 0;
// let numberNegatively = 0;
// let numberDouble = 0;
// let numberNotPaired = 0;
// for (let i = 0; i < 10; i++) {
//   let number = prompt("Ведите  число " + (i + 1), "");
//   if (number < 0) {
//     numberNegatively++;
//   } else if (number > 0) {
//     numberPositive++;
//   } else {
//     numberZero++;
//   }
//   if (number % 2) {
//     numberDouble++;
//   } else {
//     numberNotPaired++;
//   }
// }
// console.log(
//   numberNegatively,
//   numberPositive,
//   numberZero,
//   numberDouble,
//   numberNotPaired
// );

// let day = 1;
// while (true) {
//   alert("Дни недели " + day);
//   day++;
//   if (day > 7) {
//     day = 1;
//   }
// }

// alert("Загадайте число от 0-100 ");
// let numberStart = 1;
// let numberMidle;
// let numberFinish = 100;
// while (numberStart !== numberFinish) {
//   numberMidle = (numberFinish + numberStart) / 2;
//   let isTrue = confirm(
//     "Ваше число в єтом диапазоне" + numberStart + "-" + numberMidle
//   );
//   if (isTrue) {
//     numberFinish = numberFinish / 2;
//   } else {
//     numberStart = numberFinish / 2;
//     numberFinish = (numberFinish + numberStart) / 2;
//   }
// }

// Функций

// 1.1;
// function block(a, b) {
//   return a + b;
// }
// let result = block(4, 5);

// 1.2;
// let helper = function (a, v) {};

// let arrow = (list = []) => {
//   const helper = 10;
//   const arrowChildren = () => {
//     helper;
//   };
//   if (list.length) {
//     return list;
//   }

//   return [1, 4, 6];
// };
// const arrowChildren = function () {};
// 1.3;
// const arrowLeft = () => {};

// 2.
// const func = function (e, t, y, u, i) {};
// console.log(func.length);

// 3.
// const helper = (a, b) => {
//   if (a < b) return -1;
//   if (a > b) return 1;
//   return 0;
// };

// 4
// const factorial = (n) => {
//   let result = n;
//   for (let i = n - 1; i > 1; i--) {
//     result = result * i;
//   }
//   return result;
// };
// console.log(factorial(5));

// 5
// const namber = (a, b, c) => {
//   let namberA = String(a);
//   let namberB = String(b);
//   let namberC = String(c);
//   return namberA + namberB + namberC;
// };

// 6
// const func = (a, b) => {
//   if (b) {
//     return a * b;
//   }
//   return a * a;
// };

// console.log(func(3, 5));

// 2.1
// const func = (numbr) => {
//   let resalt = 0;
//   for (let i = 0; i < numbr; i++) {
//     if (!(numbr % i)) {
//       resalt = resalt + i;
//     }
//   }
//   return resalt == numbr;
// };
// console.log(func(28));

// 2.2

// const isPerfect = (numbr) => {
//   let resalt = 0;
//   for (let i = 0; i < numbr; i++) {
//     if (!(numbr % i)) {
//       resalt = resalt + i;
//     }
//   }
//   return resalt == numbr;
// };

// const isPerfectrange = (min, max) => {
//   let resalt = [];

//   for (let i = min; i <= max; i++) {
//     if (isPerfect(i)) {
//       resalt.push(i);
//     }
//   }
//   return resalt;
// };
// console.log(isPerfectrange(2, 700), "fa");

// Обекті
// 1.min
const car = {
  model: 320,
  manufacturer: "bmv",
  date: 2010,
  spead: 240,
  tank: 150,
  averageFuel: 9,
};
// const showCarInfo = () => {
//   let rasult = "";
//   for (const [key, value] of Object.entries(car)) {
//     rasult = rasult + `${key}: ${value},`;
//   }
//   alert(rasult);
// };
// showCarInfo();

// const draiverList = [];
// draiverList.push("Andry", "Sollo");

// const checkDraiver = (list, name) => {
//   const result = list.find((item) => {
//     return name == item;
//   });
//   return result;
// };
// console.log(checkDraiver(draiverList, "Sollo"));

// const getDistance = (distance, car, period = 4) => {
//   let vacation = 1;
//   let manyFuel = (distance / 100) * car.averageFuel;
//   let whatTime = distance / (car.spead / 2);
//   let periodAmout = Math.floor(whatTime / period);
//   let resalt = vacation * periodAmout + whatTime;
//   console.log(periodAmout, period);
//   return { resalt, manyFuel };
// };
// console.log(getDistance(2000, car));

//2 norma
let oneDay = 24;
let sixty = 60;

const dayHelper = (hours) => {
  return hours > oneDay ? hours - oneDay : hours;
};

const minutesHelper = (minutes, day) => {
  const minutesResult = (day.minutes + minutes) % sixty;
  const hoursResult = dayHelper(
    Math.floor((day.minutes + minutes) / sixty) + day.hours
  );

  return { minutes: minutesResult, hours: hoursResult };
};

const secondsHelper = (seconds, day) => {
  const secondsResult = (day.seconds + seconds) % sixty;

  const resalt = minutesHelper(
    Math.floor((day.seconds + seconds) / sixty) + day.minutes,
    day
  );

  return {
    seconds: secondsResult,
    minutes: resalt.minutes,
    hours: resalt.hours,
  };
};

const time = { hours: 8, minutes: 36, seconds: 54 };
const day = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  showtime: () => {
    alert(day.hours + " : " + day.minutes + " : " + day.month);
  },
  setTime: (time) => {
    if (time.hours) {
      day.hours = dayHelper(day.hours + time.hours);
    }
    if (time.minutes) {
      let resalt = minutesHelper(time.minutes, day);

      day.minutes = resalt.minutes;
      day.hours = resalt.hours;
    }
    if (time.seconds) {
      let resalt = secondsHelper(time.seconds, day);
      day.seconds = resalt.seconds;
      day.minutes = resalt.minutes;
      day.hours = resalt.hours;
    }
  },
};

console.log(day);
day.setTime({ seconds: 8620, minutes: 180 });
console.log(day);
