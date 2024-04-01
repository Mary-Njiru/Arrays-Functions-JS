//Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order

function reverseAll(arr){  //This function reverses all elements in a string in ascending order  
  return arr.map(str => str.split('').sort().reverse().join(''));
}
console.log(reverseAll(['abc','def','ghi']));

function reverseSpecific(arr,idxs){   //This function reverses all elements in a string in descending order
  return arr.map((str,i)=>{
    if (idxs.includes(i)){
      return str.split('').sort().reverse().join('');
    }
    else{
      return str;
    }
  });
}
console.log(reverseSpecific(['abc','def','ghi'],[0, 2]));


//Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero
function checkElements(arr) {
      let posCount = 0;
      let negCount = 0;
      let zeroCount = 0;
  arr.forEach(num => {
       if (num > 0) {
         posCount++;
       } else if (num < 0) {
         negCount++;
       } else {
         zeroCount++;
       }
    });
    if (posCount > 0){
        return "positive";
    }
    else if (negCount > 0){
      return "negative";
    }
    else if (zeroCount > 0){
      return "zero";
    }
    else{
      return"mixed";
    }
    return {pos_count: posCount, neg_count: negCount, zero_count:zeroCount};
   }
   console.log(checkElements([1,2,4,6]));
   console.log(checkElements([-1,-4,-7]));
   console.log(checkElements([10,20,-1,22,99,20,-9]));
   

//Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.
function sortEmployeesBySalary(employees){
  return employees.sort((a,b) => a.salary -b.salary);
}
const employees = [
  {id:1, name:"John", salary: 5000},
  {id:2, name: "Mercy", salary: 7000},
  {id:3, name:"Joy", salary: 9000}
];
console.log(sortEmployeesBySalary(employees));



//Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2
function multiply(numbers) {
    numbers.forEach((number) => {
       console.log(number * 2);
    });
   }
   multiply([1, 2, 3, 4]);  // This function does not return anything and only logs the return to the console. If you want to return a new array, us ethe map method
 
function multipliedNumbers(numbers){
  return numbers.map(function(number) {
       return number * 2 
  });
}
const doubledNumbers = multipliedNumbers([1,2,3,4,5]);
console.log(doubledNumbers);


//Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values

function changeArray2(arr) {
    const firstFour = arr.slice(0, 4).map(item => item * 8);
    const lastTwo = arr.slice(-2).map(item => item + 5);
    const newArr = firstFour.concat(lastTwo);
    console.log(newArr);
   }
   changeArray2([2, 4, 6, 8, 10, 12]);

   function processArray(arr) {
    //loop throughout the first four elementsof the array
    for (let i= 0; i <Math.min(4, arr.length); i++){
        console.log(arr[i] * 8);
    }

    //loop throughout the last two elements of the array
    for (let i = Math.max(0, arr.length -2); i < arr.length; i++){
      console.log(arr[i] + 5);
    }
    //console the updated array
    console.log(arr);
   }
   processArray([1,2,3,4,5,6,7,8,9]);