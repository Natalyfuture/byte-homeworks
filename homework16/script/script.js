                               //Homework 16
//Вашей задачей будет реализовать функционал приветсвия пользователя на сайте c помощью localStorage.

//При первом входе на сайт просто показывать на экране приветствие Дооро пожаловать!
//Если пользователь уже заходил на сайт (при первом визите), то к базовому приветсвию следует добавить строку Вы заходили раз: N. Где вместо N будет количесво посещений сайта пользователем. Обратите внимание, что первый визит так же считается.
//Функционал должен работать при закрытии вкладки или бразура, обновлении страницы.


const firstGreeting = document.createElement('h1');
const greeting = document.createElement('h1');


const handleVisits = (event) =>{
    
    const keyName = 'Number of times user entered website';
    
    let visitTimes = Number(JSON.parse(localStorage.getItem(keyName)));
   
    if(visitTimes === null){
       
        visitTimes = 1;
        
        localStorage.setItem(keyName, JSON.stringify(visitTimes));

        firstGreeting.innerText = 'WELCOME!';
        document.body.append(firstGreeting);

    }else{
       
        visitTimes = Number(visitTimes) + 1;
        
        localStorage.setItem(keyName, JSON.stringify(visitTimes));

        firstGreeting.innerText = 'WELCOME!';
        greeting.innerText = `You visited website ${visitTimes} times.`;
        document.body.append(firstGreeting);
        document.body.append(greeting);
        
    }
   
}

handleVisits();
