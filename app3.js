"use strict";

//Первая задача

let start = +prompt("Введите первое число диапазона");
let end = +prompt("Введите второе число диапазона");
while (Math.abs(end - start) < 5) {
  alert("введите числа повторно");
  start = +prompt("Введите первое число диапазона");
  end = +prompt("Введите второе число диапазона");
}
if (start < end) {
  for (let i = start; i <= end; i++) {
    console.log(i);
  }
} else {
  for (let j = start; j >= end; j--) {
    console.log(j);
  }
}

//Вторая задача

let rightPIN = "1234";
const rightPUC = "12345678";

let i = 3;

let PIN = prompt("Введите PIN");

do {
  if (PIN !== rightPIN) {
    if (i === 1) {
      alert("неверно");
      i = 0;
      let j = 3;
      let PUC = prompt("Введите PUC");
      do {
        if (PUC !== rightPUC) {
          if (j === 1) {
            alert("неверный PUC");
            j = 0;
          } else {
            alert("неверный PUC");
            PUC = prompt("Введите PUC заново");
            j--;
          }
        } else if (PUC == rightPUC) {
          alert("УРА!");
          j = 0;
        }
      } while (j > 0);
    } else {
      alert("неверно");
      PIN = prompt("Введите PIN заново");
      i--;
    }
  } else {
    alert("УРА!");
    i = 0;
  }
} while (i > 0);

//Четвертая задача

let start1 = +prompt("Введите первое число диапазона");
let end1 = +prompt("Введите второе число диапазона");
while (Math.abs(end1 - start1) < 7) {
  alert("введите числа повторно");
  start1 = +prompt("Введите первое число диапазона");
  end1 = +prompt("Введите второе число диапазона");
}
if (start1 < end1) {
  for (let i = 0; i < 7; i++) {
    console.log(start1 + i);
  }
} else {
  for (let j = 0; j < 7; j++) {
    console.log(start1 - j);
  }
}

// Третья задача

let num1 = +prompt("Введите первое число");
let num2 = +prompt("Введите второе число");
let answer1;
let answer2;
let answer3;

while (isNaN(num1) || isNaN(num2) || num1 == num2) {
  alert(
    "какое-то из введенных значений не является числом либо Вы ввели одинаковые числа"
  );
  num1 = +prompt("Введите первое число диапазона повторно");
  num2 = +prompt("Введите второе число диапазона повторно");
}
if (num1 < num2) {
  for (let i = num1; i <= num2; i++) {
    if (i > 100) {
      answer1 = "больше ста";
    } else if (i === 100) {
      answer1 = "равно 100";
    } else {
      answer1 = "меньше ста";
    }
    if (i % 2 === 0) {
      answer2 = "чётное";
    } else {
      answer2 = "нечётное";
    }
    if (i > 0) {
      answer3 = "положительное";
    } else if (i === 0) {
      answer3 = "равно 0";
    } else {
      answer3 = "отрицательное";
    }
    console.log(`Введенное Вами число ${answer1}, ${answer2}, ${answer3}`);
  }
} else {
  for (let j = num1; j >= num2; j--) {
    if (j > 100) {
      answer1 = "больше ста";
    } else if (j === 100) {
      answer1 = "равно 100";
    } else {
      answer1 = "меньше ста";
    }
    if (j % 2 === 0) {
      answer2 = "чётное";
    } else {
      answer2 = "нечётное";
    }
    if (j > 0) {
      answer3 = "положительное";
    } else if (j === 0) {
      answer3 = "равно 0";
    } else {
      answer3 = "отрицательное";
    }
    console.log(`Введенное Вами число ${answer1}, ${answer2}, ${answer3}`);
  }
}
