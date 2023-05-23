// let array = [1,2,3,5,5,6]
// array.forEach((index,value) => {
//     console.log(value,index);
// })

// const data= array.map((index, val) => {
//     return val*2;
// })

// const data = array.reduce((accumulator, currentValue) => {
//     console.log(accumulator, currentValue);
//     return accumulator + currentValue;
//   }, 0);
// const numbers = [{ name: "abc", id: 1 },{ name: "xyzew", id: 1 },{ name: "abc", id: 2 }, { name: "xyz", id: 1 },{ name: "abc", id: 3 }]
// const num = "abc"
// const data = numbers.filter((val)=>val.name==num)

// console.log(data);
// const numb= 5
// console.log(typeof JSON.stringify(numb));
// console.log(typeof numb);

function binarySearch(array, value) {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        console.log(left,right);
        const mid = Math.floor((left + right) / 2);
        console.log(mid,"mid");
      if (array[mid] === value) {
        return mid;
      } else if (array[mid] < value) {
          console.log("run");
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return -1;
  }
  
  const array = [1, 3, 5,7, 9, 11, 13, 15,19 ];
  const value = 19;
  
  const index = binarySearch(array, value);
  
  if (index !== -1) {
    console.log(`'${value}' exists in the array at index ${index}`);
  } else {
    console.log(`'${value}' does not exist in the array`);
  }
