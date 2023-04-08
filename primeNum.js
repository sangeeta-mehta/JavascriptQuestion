// Write a program to print all prime numbers between 1 and 100
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97

for (var i = 1; i <= 100; i++) {
    var isPrime = true;
    // Check if the number is divisible by any number except 1 and itself
    for (var j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
  
    // If the number is not divisible by any number except 1 and itself, it is prime
    if (isPrime && i > 1) {
      console.log(i);
    }
  }