//Homework 17
//Реализуйте таймер обратного отсчета на JS.

//1. При запуске приложения на странице должно находиться 2 кнопки Start и Stop.
//2. При нажатии пользователем на кнопку Start, на странице должен появиться таймер обратного отсчета. (Количесво секунд, 
//    которые будет "идти" таймер можете спросить у пользователя через инпут, prompt или записать в коде).
//3. Длительность таймера обязательно должна быть указана в секундах.
//4. Элемент таймера обязательно сожержать часы минуты и секунды. То есть, если пользователь длительность таймера 3600 секунд, 
//   изначально на странице должно отобразиться 01:00:00, если 10 секунд, то 00:00:10.
//5. Каждую секунду таймер должен уменьшаться на секунду.
//6. При нажатии на кнопку Pause таймер должен остановиться, а при повторном нажатии - продолжиться с того же места.
//7. По истечению таймера, должна быть возможность обработать возвращенный из функции промис. То есть, при выполнении следующего кода, 
//  в консоли через 30 секунд должна появиться строка Timer end!
//  startTimer(30).then(() => {
//  console.log("Timer end!");
//});

const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');

let timeInterval = null;


const settingTime = (time) => {
    console.log(time)
    const hours = Math.floor(time / 3600 ) % 24;
    console.log(hours)
    const minutes = Math.floor(time / 60) % 60;
    console.log(minutes);
   const seconds = Math.floor(time) % 60;
    console.log(seconds)

    let hour = ((hours < 10) ? "0" : "") + hours;
    let minute = ((minutes < 10) ? " : 0" : ":") + minutes;
    let second = ((seconds < 10) ? " : 0" : ":") + seconds;

      return {
        time,
        hour,
        minute,
        second,
    }
 
}



const start = () => {
    
    const enteredTime = Number(prompt('Enter time in seconds'));
 
    if(!enteredTime){
     alert('You have not entered a time')
     return;
     }

     const clock = document.getElementById('timer');
     let hoursSpan = timer.querySelector('.hours');  
     let minutesSpan = timer.querySelector('.minutes');  
     let secondsSpan = timer.querySelector('.seconds');

   let t = settingTime(enteredTime);

   hoursSpan.innerText = t.hour;
   minutesSpan.innerText = t.minute;
   secondsSpan.innerText = t.second;

    return enteredTime;
 }


let endTime = start()
console.log(endTime)

const initializeClock = (id) => {

    const clock = document.getElementById(id);
    let hoursSpan = timer.querySelector('.hours');  
    let minutesSpan = timer.querySelector('.minutes');  
    let secondsSpan = timer.querySelector('.seconds');

    const updateClock = () => {

        endTime--;

        let t = settingTime(endTime+1);
    
        
        hoursSpan.innerText = t.hour;
        minutesSpan.innerText = t.minute;
        secondsSpan.innerText = t.second;
    
        if(t.time === 0){
            clearInterval(timeInterval);

         const stopTimer = (ms) => {
            return new Promise(resolve => {
                setTimeout(() => { 
                    resolve()

            }, ms)
        })
    }

        stopTimer(30).then(() => {
            console.log("Timer end!");
        }) 
            
        } 
        return t.time
    }

    timeInterval = setInterval(updateClock, 1000)
}




const startTimer = () => {
   
    if(!timeInterval){
    
        initializeClock('timer');
    
    }
   
}



const pauseTimer = () =>{

    clearInterval(timeInterval);
    timeInterval = null;
    
}
 

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
