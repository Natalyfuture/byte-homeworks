/* //     TASK1

const countTrue = (arr) => {
    let count = 0;

    for(let i = 0; i < arr.length; i++ ){

        if (arr[i] === true) {
            count++
        }
    }
    return count;
}

//const res = countTrue([true, false, false, true, false]);
//const res = countTrue([false, false, false, false]);
const res = countTrue([]);

console.log(res); */


/* //     TASK2

const getOccurrencesCount = (arr) => {
    let repeatingElem = {};
    
    for(let i = 0; i < arr.length; i++){
    
        let key = arr[i];
        console.log(key);

        if (key in repeatingElem) {
            repeatingElem[key]++
            
            }else{
                repeatingElem[key] = 1;      
            }

            console.log(repeatingElem)
               
    }
    return repeatingElem;
}

 //const res = getOccurrencesCount(["a", "v", "a", "b", "b", "v", "v", "a"]);
 const res = getOccurrencesCount([
    "apples",
    "oranges",
    "pears",
    "pears",
    "apples",
    "oranges",
    "oranges",
    "pears",
  ]);

 console.log(res);

 */

 
 
 
 
 //             TASK3


 const findExcess = (arr) =>{
    const evenNumbers = [];
    const oddNumbers = [];
    const res = [];

    if (arr.length <3){
        alert('The length of th array is so short')
    }else{
    for(let i = 0; i < arr.length; i++){
        
        
        if(arr[i] % 2 === 0){
            evenNumbers.push(arr[i]);
        }else{
            oddNumbers.push(arr[i]);    
        }
    }

    if(evenNumbers.length === 1){
         return evenNumbers;
    }else{
         return oddNumbers;
    }
    }
    
 }

 const res = findExcess([0, 1, 2]);
 //const res = findExcess([1, 2, 3]);
 //const res = findExcess([2, 6, 8, 10, 3]);
 //const res = findExcess([0, 0, 3, 0, 0]); 
 //const res = findExcess([1, 1, 0, 1, 1]);
console.log(res);
