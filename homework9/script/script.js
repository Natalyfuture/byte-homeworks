//       TASK1
/* //        1.1

const sourceArray = [1, 2, -10, -2, 7];
const booleanArray = sourceArray.map((item) => {
    if(item > 0){
        item = true;
    }else {
        item = false;
    }
    return item;
});
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

