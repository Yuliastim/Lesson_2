"use strict";
/*let userNumber; resultStr;
userNumber = +prompt ("Введите число ", '10');
if (userNumber>5) resultStr = "Число " + userNumber + " больше 5"
else resultStr = "Число " + userNumber + " не больше 5";
alert (resultStr);*/

/*let experiment = (5<2)||("")||(0);
alert (experiment);*/

/*//SWITCH Задание 1
let numberMonth, nameMonth;
numberMonth = prompt ("Введите номер месяца");
switch (numberMonth) {
    case '1': nameMonth = 'Январь';
    break;
    case '2': nameMonth = 'Февраль';
    break;
    case '3': nameMonth = 'Март';
    break;
    case '4': nameMonth = 'Апрель';
    break;
    case '5': nameMonth = 'Май';
    break;
    case '6': nameMonth = 'Июнь';
    break;
    case '7': nameMonth = 'Июль';
    break;
    case '8': nameMonth = 'Август';
    break;
    case '9': nameMonth = 'Сентябрь';
    break;
    case '10': nameMonth = 'Октябрь';
    break;
    case '11': nameMonth = 'Ноябрь';
    break;
    case '12': nameMonth = 'Декабрь';
    break;
}
alert (nameMonth);*/

/*//Задание 2
let firstNumber, secondNumber, resultNumber;
firstNumber = +prompt ("Введите первое число");
secondNumber = +prompt ("Введите второе число");
let operand = prompt ("Введите символ операции между ними");
switch (operand) {
    case '+' : resultNumber = firstNumber+secondNumber;
    break;
    case '-' : resultNumber = firstNumber-secondNumber;
    break;
    case '*': resultNumber = firstNumber*secondNumber;
    break;
    case '/': resultNumber = firstNumber/secondNumber
    break;
    default : resultNumber = 'Вы ввели несуществующую операцию';
}
alert (resultNumber);*/

/*//Задание 1
let firstNumber, secondNumber, resultStr;
firstNumber = +prompt ("Введите первое число");
secondNumber = +prompt ("Введите второе число");
resultStr = firstNumber>secondNumber ? alert (firstNumber) : alert (secondNumber);*/

/*//Задание 2
let userNumber = +prompt ('Введите число');
(userNumber%5) ? alert('Число не кратно 5'): alert('Число кратно 5');*/

/*//Задание 3
let namePlanet = prompt ('С какой вы планеты?');
(namePlanet == 'Земля'|| namePlanet == 'земля') ? alert ('Привет, земляне!') : alert ('Привет, инопланетяне!');*/

//Циклы while Задание 1
let numberRepeat = +prompt ('Введите число');
let i=1;
let resultString = '';
while (i<=numberRepeat) {
   resultString += '#';
    i=i++;
}
alert (resultString);

/*//Задание 2
let userAnswer;
do {
userAnswer = +prompt('Сколько будет 2+2*2?');
 } while (userAnswer !==6);
alert ('Правильно');*/

/*//For Задание 1
let resultString = '';
let userNumber = +prompt ('Введите число');
for(let i=1; i<=100; i++ ) {
    if (!(i % userNumber)) resultString += `${i}, `;
}
alert (resultString);*/
