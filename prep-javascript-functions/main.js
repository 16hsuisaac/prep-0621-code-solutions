function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
var sum = addTwoNumbers(2, 2);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var minutes = convertHoursToMinutes(2);
console.log('minutes', minutes);

function getGreeting(name) {
  return 'Hello' + ' ' + name + '!';
}
var greeting = getGreeting('World');
console.log(greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var addAndMultiply = addAndMultiplyBy5(10, 5);
console.log(addAndMultiply);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var multiplyAndDivide = multiplyAndDivideBy5(35, 10);
console.log(multiplyAndDivide);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtractTwo = subtractTwoNumbers(22, 7);
console.log(subtractTwo);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
var circumference = getCircleCircumference(5);
console.log(circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var name = getFullName('Juan', 'Ramirez');
console.log(name);

function cube(number) {
  return number ** 3;
}
var cubed = cube(5);
console.log(cubed);
