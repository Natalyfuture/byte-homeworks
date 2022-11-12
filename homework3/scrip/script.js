/* //task1
const a = 5;
const b = 10;
const sum = a + b;
const subtraction = a - b;
const division = a / b;
const multiplication = a * b;
console.log(sum);
console.log(subtraction);
console.log(division);
console.log(multiplication); */

/* //task2
true && true //true
false || true //true
true && 'false'//true
0 && 1 || ' ' && 42//true, 42
null == undefined//true
'' == 0//true
1 === '1'//false
NaN === NaN && true//false
true || false && true || false//true
(true || false) && (true || false)//true
10 || 0 && 'dog' || ''//true, 10
(10 || 0) && ('dog' || '')//true, dog */

/* //task3
const number1 = Number(prompt('Введите первое число'));
const number2 = Number(prompt('Введите второе число'));
if (number1 > number2){
    alert('Первое число больше второго');
} else if (number1 < number2) {
    alert('Второе число больше первого');
} else {
    alert('Числа равны');

}
 */
/* //task4
const number1 = Number(prompt('Введите первое число'));
const number2 = Number(prompt('Введите второе число'));
let res;
const operation = prompt('Введите действие, которое хотите выполнить');
switch(operation) {
    case '+':
        res = number1 + number2;
        alert(res);
    break;
    case '-':
        res = number1 - number2;
        alert(res);
    break;
    case '*':
        res = number1 * number2;
        alert(res);
    break;
    case '/':
        res = number1 / number2;
        alert(res);
    break;
} 
  */


//task5
const visitorAge = Number(prompt('Введите ваш возраст'));
if (visitorAge >= 18 && visitorAge <= 60){
    alert('Вход разрешен');
} else if (visitorAge < 12 || visitorAge >80){
    alert('Вход запрещен');
} else {
    const withParents = confirm('Вас сопровождает взрослый?');
    if(withParents){
    alert('Вход разрешен');
} else {
    alert('Вход запрещен');
}}  