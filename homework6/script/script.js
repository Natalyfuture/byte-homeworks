/* //TASK1


let userName;
let userSurname;
let userPassword;
let registration = false;

const userRegistration = () =>{
   
    do {
        userName = prompt('Enter your name');
        if (userName.trim().length < 1) {
            alert('The name must contain at least one character not white space.'); 
            continue;
        }

        let nameRes = upperCaseFullName(userName);

        userSurname = prompt('Enter your surname')
        if (userSurname.trim().length < 1) {
            alert('The surname must contain at least one character not white space.'); 
            continue;
        };

        let surnameRes = upperCaseFullName(userSurname);

        userPassword = prompt('Enter your password');
        if (userPassword.trim().length < 6 || userPassword.toLowerCase() === userPassword || userPassword.toUpperCase() === userPassword || !isNaN(userPassword)) {
            alert('The password must contain at least six characters with upper and lower case.'); 
            continue;
        }else {
            registration = true;
        }
        
        alert(`You have registered under your  name ${nameRes}, your surname ${surnameRes} and your password ${userPassword}`) ;

    } while(!registration);

   
}


const upperCaseFullName = (name) => {
    
    let firstSymbolName = name[0].toUpperCase();
    let symbolsStringName =name.slice(1).toLowerCase();
    let fullUserName = firstSymbolName + symbolsStringName;
    return fullUserName;
}


userRegistration(); */




//TASK2


function getRandomInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }
  console.log(getRandomInclusive(100, 200));

