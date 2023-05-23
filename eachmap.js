let arr = [1, 2, 3, 4, 5, 6]

// const newarr1  = arr.map((item) => {
//     return item*2;
// })

// const newarr = arr.forEach((item) => {
//     return item*2;
// })
// console.log(newarr, newarr1);

// const numbers = [1, 3, 5, 7, 9];

// const hasEven = arr.every((number) => {
//     return number % 2 === 0;
// });

// console.log(hasEven);


// arr = []
// arr.length = 0

// arr.splice(0, arr.length);

// while (arr.length) {
//     arr.pop(); // Remove the last element iteratively until the array is empty
//   }
// console.log(arr);


// x = 555;
// console.log(x);
// var x;

// myFunction(); 

// function myFunction() {
//   console.log("Hello, World!");
// }

// console.log(1+("-1")+1)
// console.log(1 + -1 + 1)
// let arr1 = {...arr}
// arr = {}

// console.log(arr1);
// console.log(arr);

// let arr2 = [
//     { name: "sangeeta", email: "rdsds" , id:1 },
//     { name: "sangeeta2", email: "rdsds" , id:1 },
//     { name: "sangeeta3", email: "rdsds" , id:1 },
//     { name: "sangeeta4", email: "rdsds" , id:1 },
// ]

// // let newArr = arr2.map(({ name, ...rest }) => rest);
// let newArr = arr2.map(({ email, ...rest }) => rest);

// console.log(newArr);


function outer() {
    var outerVar = 'I am from outer';
    function inner() {
        console.log(outerVar); // Accesses the outer variable
    }
    
    console.log("sdf");
    return inner; // Returns the inner function
  }
  
var closureFunc = outer(); // Assigns the returned inner function to a variable
  console.log(closureFunc);
  closureFunc(); 


// function test() {
//     let id = "fdxcsd"
//     console.log(id);
//     return id;
// }
// var result = test();
// result()


// function addNumbers(a, b) {
//     return a + b;
//   }
  
//   var result = addNumbers(5, 3);
//   console.log(result); // Output: 8