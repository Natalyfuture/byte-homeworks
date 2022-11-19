/* //PRCTICE
//Авторизация пользователя

const LOGIN = 'ADMIN';
const PASSWORD = '1q2w3e';
let userLogin;
let userPassword;
let authorSuccess = false;

const authorUser = () =>{

    do {
        userLogin = prompt('Enter your login');
        if (!userLogin) {
            alert('Enter your login');
            continue;
        }
        

        userPassword = prompt('Enter your password');
        if (!userPassword) {
            alert('Enter your password');
            continue;
        }

        if (userLogin === LOGIN && userPassword === PASSWORD) {
            alert('WELCOME!');
            authorSuccess = true;
        } else {
            alert('Your datas are wrong. Try again.');
            continue;
        }
          
    } while(!authorSuccess);
}

authorUser(); */

/* //drawStarsPyramid

const starsPyramid = (height) => {
    for (let i = 0; i < height; i++){
        let stars = '';
        let spaceBefore = '';
        for( let j = 0; j < 2 * i + 1; j++){
            stars += '*';
        }

        for( let k = 0; k < height - i - 1; k++){
            spaceBefore += ' '
        }
        console.log(spaceBefore + stars);
    }
    
}
let height = Number(prompt('Enter your desired height of pyramid'));
starsPyramid(height);
 */



//HOMEWORK5

//               Task1



//    FOR


/* let numberIncrease = 1
const displayNumbers = () => {
    for (let i = 0; i < 10; i++){
        console.log(numberIncrease);
        numberIncrease++
    }
}
displayNumbers(); */


/* let numberDecrease = 20;
const displayNumbers = (n = 11) => {
    for (let i = 0; i < n; i++){
        console.log(numberDecrease);
        numberDecrease--
    }
}
displayNumbers();  */



//   WHILE


/* let numberIncrease = 1;
const displayNumbers = (n = 10) => {
    while(numberIncrease <= 10){
        console.log(numberIncrease);
        numberIncrease++
    }
}
displayNumbers(); */
/* 
let numberDecrease = 20;
const displayNumbers = () => {
    while (numberDecrease >= 10){
        console.log(numberDecrease);
        numberDecrease--
    }
}
displayNumbers(); */ 



//    DO  WHILE


/* let numberIncrease = 1;
const displayNumbers = (n = 10) => {
    do {
        console.log(numberIncrease);
        numberIncrease++ 
    }while(numberIncrease <= 10)
}
displayNumbers(); */


/* let numberDecrease = 20;
const displayNumbers = () => {
    do {
        console.log(numberDecrease);
        numberDecrease-- 
    }while(numberDecrease >= 10)
}
displayNumbers(); */



/* 
//               TASK2

const primeNumbers = (number1, number2) => {
    for(let i = number1; i <= number2; i++){
        let amountDivisors = 0;
       
            for(let j = i; j > 0; j--){
                if(i % j === 0){
                    amountDivisors++
                }else{
                    continue;
                }
            }
            if(amountDivisors === 2){
                console.log(i)
        }
    }
}
const number1 = Number(prompt('Enter number1'));
const number2 = Number(prompt('Enter number2'));
primeNumbers(number1, number2);  */


//    TASK_3 (Var1)

/* const LOGIN = 'ADMIN';
const PASSWORD = '1q2w3e';
let userLogin;
let userPassword;
let attempts;
let authorSuccess = false;

const authorUser = () =>{

    attempts = 3;
   
    do {
        if(attempts > 0){
        alert('You have only ' +  attempts + 'attempts');
        userLogin = prompt('Enter your login');
        if (!userLogin) {
            alert('Enter your login');
            attempts--
            continue;
        }
        

        userPassword = prompt('Enter your password');
        if (!userPassword) {
            alert('Enter your password');
            attempts--
            continue;
        }

        if (userLogin === LOGIN && userPassword === PASSWORD) {
            alert('WELCOME!');
            authorSuccess = true;
        } else {
            alert('Your data are wrong.');
            attempts--
            continue;
        }
    }else {
        alert('You do not have any attempts');
        break;
    }
          
    } while(!authorSuccess);
}

authorUser(); */



//    TASK_3 (Var2 __WHILE)

const LOGIN = 'ADMIN';
const PASSWORD = '1q2w3e';
let userLogin;
let userPassword;
let attempts;


const authorUser = () =>{

    attempts = 3;
    while(attempts >= 0){

        const authorization = 'You have only ' +  attempts + ' attempts';
       

        if (attempts === 0){
            alert('You do not have any attempts');
            break;
        }

        alert(authorization);

        userLogin = prompt('Enter your login.');
            if (!userLogin) {
                alert('Your login is wrong.');
                attempts--;
                continue;
        }

        userPassword = prompt('Enter your password.');
        if (!userPassword) {
            alert('Your password is wrong.');
            attempts--
            continue;
        }

        if (userLogin !== LOGIN || userPassword !== PASSWORD) {
            alert('Your datas are wrong.');
            attempts--
            continue;
        } else {
            alert( 'WELCOME!')
            attempts = -1;
            
        }
        
    }
   
}

authorUser();