//task1 (var1)
/* function comparison(a, b){
    if (!a || !b || typeof a !== 'number' || typeof b !== 'number'){
        console.log('Данные введены неверно');
    } else {
        const res = a==b ? 'true' : 'false';
        console.log('res', res);
    }
}

comparison(1, 1); */
/* 
//task1 (var2)
function comparison(a, b){
    if (!a || !b || typeof a !== 'number' || typeof b !== 'number'){
        console.log('Данные введены неверно');
    } else if (a == b) {
        console.log('res', 'true')
    } else {
        console.log('res', 'false')
    }  
}
comparison(1); */

//task2 (var1)

/* function sum(){
    const num1 = Number(prompt('Введите первое число'));
    const num2 = Number(prompt('Введите второе число'));
    console.log('summa :', num1 + num2)
}
sum(); */

/* //task2 (var2)
function sum(a,b){
    console.log('summa :', a + b)
}
sum(1,3);
sum(5,9);
sum(-1,10); */

/* //task2 (стрелочная функция)
const sum = (a,b) => a + b;
let res = sum(4,3);
console.log('summa :', res);
res = sum(12,5);
console.log('summa :', res); */


/* //task3
function exponentiation(a, b = 2) {
    console.log('a**b', a**b);
}
exponentiation(2,4);
exponentiation(5); */

/* //task4
function dayOfWeek(){
    const day = Number(prompt('Enter the day of the week (for example: 1, 2 ...)'));
    if (day === 1){
        console.log('Today is Monday');
    }else if (day === 2) {
        console.log('Today is Tuesday');   
        } else if (day === 3) {
                console.log('Today is Wednesday');
            } else if(day === 4) {
                    console.log('Today is Thursday');
                } else if (day === 5){
                    console.log('Today is Friday');
                    }else if (day === 6){
                        console.log('Today is Saturday'); 
                        }else if (day === 7){
                            console.log('Today is Sunday');  
                            } else {
                                console.log('There is no such day of the week');
                                }
}
dayOfWeek();  */
/* 
//task4(var2)
function dayOfWeek(day){
    switch (day) {
        case 1: console.log("Today is Monday");
        break;
        case 2: console.log("Today is Tuesday");
        break;
        case 3: console.log("Today is Wednesday");
        break;
        case 4: console.log("Today is Thursday");
        break;
        case 5: console.log("Today is Friday");
        break;
        case 6: console.log("Today is Saturday");
        break;
        case 7: console.log("Today is Sunday");
        break;
        default: console.log("There is no such day of the week");

    }
}
dayOfWeek(1);
dayOfWeek(2);
dayOfWeek(8); */

//task4(var3)
function dayOfWeek(day){
    switch (day) {
        case 1: return "Today is Monday";
        case 2: return "Today is Tuesday";
        case 3: return "Today is Wednesday";
        case 4: return "Today is Thursday";
        case 5: return "Today is Friday";
        case 6: return "Today is Saturday";
        case 7: return "Today is Sunday";
        default: return "There is no such day of the week";
    }
}

console.log('summa:', dayOfWeek(1));


/* //task5
function userData(){
    const userName = prompt('What is your name?');
    const userAge = Number(prompt('How old are you?'));
    if (userAge > 30) {
        alert('Greetings, ' + userName + '!');
        return;
    } else {
        alert('Hello, ' + userName + '!');
        return;
    }
};
userData();
 */