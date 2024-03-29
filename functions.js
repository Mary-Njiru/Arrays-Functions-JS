//Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order
function sorting (){
    const words = ['Hey','there','Mary','Njiru'];
    console.log(words.sort());
    console.log(words.reverse());
}
//Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero
function checkElements() {
    let arr =arr.forEach(element => {
       if (element > 0) {
         console.log("positive");
       } else if (element < 0) {
         console.log("negative");
       } else {
         console.log("zero");
       }
    });
   }

//Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.
let employee = [
    { id: 1 },
    { name: "Mary" },
    { salary: [100, 250, 450, 700] },
  ];
    employee.sort(function(a, b) {
    return a.salary - (b.salary);
  });
  employee.forEach((person) => console.log(employee.salary));
 console.log(employee);

//Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2
function multiply(numbers) {
    numbers.forEach((number) => {
       console.log(number * 2);
    });
   }
   multiply([1, 2, 3, 4]);



//Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values

function changeArray2(arr) {
    const firstFour = arr.slice(0, 4).map(item => item * 8);
    const lastTwo = arr.slice(-2).map(item => item + 5);
    const newArr = firstFour.concat(lastTwo);
    console.log(newArr);
   }
   changeArray2([2, 4, 6, 8, 10, 12]);