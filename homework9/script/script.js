//       TASK1
//        1.1

/* const sourceArray = [1, 2, -10, -2, 7];
const booleanArray = sourceArray.map((item) => {
    if(item > 0){
        item = true;
    }else {
        item = false;
    }
    return item;
});



const booleanArray  = sourceArray.map((item) => item > 0);
console.log(booleanArray);
 */

/* //          1.2

const users = [
    {
      name: 'Sam',
      role: 'admin',
      age: 25,
    },
      {
      name: 'Peter',
      role: 'admin',
      age: 16,
    },
      {
      name: 'Pablo',
      role: 'admin',
      age: 32,
    },
      {
      name: 'Enrico',
      role: 'client',
      age: 43,
    },
      {
      name: 'Mary',
      role: 'client',
      age: 34,
    },
      {
      name: 'Katerine',
      role: 'guest',
      age: 17,
    },
  ]

console.log(users);

  const sortAdmins =(users) => { 
    users.filter(function(person){
      return person.role === 'admin' && person.age > 18})
    .map(users => console.log(users.name))
      
    };

 sortAdmins(users); */
 

/*  //     TASK 1.3

 const numbers = [1, 10, 17, 24, 45];

 console.log(numbers);


 const average = numbers.reduce((total, amount, index, array) => {
  total += amount;
  if( index === array.length-1) { 
    return total/array.length;
  }else { 
    return total;
  }
});
console.log(average); */


// TASK2



/* //      TASK 2.1

const logger = (element, index, array) => {
    
    console.log(`In array [${array}] on position ${index}: ${element}`);

};
logger(1, 0, [1, 2, 3]);

function ownForEach (array, callback){
  for(let i = 0; i < array.length; i++){
    let element = array[i];
    console.log(element);
    let index = array.indexOf(element);
    console.log(index);
    callback(element, index, array);
  }
}

ownForEach([1, 2, 3], logger); 
 */

/* //    TASK    2.2
const increment = (number) => number + 1;

function ownMap(arr, callback) {
  for(let i = 0; i < arr.length; i++){
    arr[i] = callback(arr[i]);
  }
  console.log(arr)
}

ownMap([1, 2, 3], increment);


 */


/* //TASK     2.3


const isNegative = (number) => number < 0;

function ownFilter (arr, callback) {
  const negativeArr = [];
  for(let i = 0; i < arr.length; i++){
    if(callback(arr[i])){
    negativeArr.push(arr[i]);
  }
  
  }
  console.log(negativeArr);
}


ownFilter([-2, 4, -1], isNegative); 
 */


//    TASK 3


const data = [
  {
    name: "John",
    age: 24,
    position: "senior",
    isActive: false,
  },
  {
    name: "Peter",
    age: 33,
    position: "middle",
    isActive: false,
  },
  {
    name: "Sam",
    age: 29,
    position: "junior",
    isActive: true,
  },
  {
    name: "Mary",
    age: 24,
    position: "middle",
    isActive: false,
  },
  {
    name: "Steve",
    age: 23,
    position: "middle",
    isActive: true,
  },
  {
    name: "Kate",
    age: 31,
    position: "middle",
    isActive: false,
  },
  {
    name: "Sally",
    age: 19,
    position: "junior",
    isActive: false,
  },
  {
    name: "Jack",
    age: 19,
    position: "middle",
    isActive: true,
  },
];

const filterData= (list, findObj) => {
  const resFiltration = list.filter(item =>
     Object.keys(findObj).every(key =>
    item[key] === findObj[key]));

  return resFiltration;
}


/* console.log(filterData(data, { age: 23 })); */
/* console.log(filterData(data,  { age: 24 })); */
console.log(filterData(data,  { age: 19, position: "junior" }));