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
                                console.log('There is no such day of the week')
                                }
        

}
dayOfWeek(); */
