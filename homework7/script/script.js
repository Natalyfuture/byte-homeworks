/* //    TASK1


function timeAction(){
    let finish = false;
    let timeTable = {};

    do {
        let timeWish = prompt('Enter time you wish');
        let actionWish = prompt('Enter action you wish');

        if(!timeWish || !actionWish){
            finish = true;
        }else{
            timeTable[timeWish] = actionWish;
        }

    }while(!finish);

    return timeTable
}

let schedule = timeAction();

console.log(schedule); */

//   TASK2

const salaries = {
    John: "4300.00",
    Ann: "5700.40",
    Pete: "4900.95",
  };

  function sumSalaries() {
    let res = 0;

    for(let key in salaries){
     res += Number(salaries[key]);
    }
    return res;
  }

    let sum = sumSalaries(salaries).toFixed(2);
 
  console.log(sum)