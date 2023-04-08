// Write a program to get a sum of even and odd numbers between 1-100.

function getEvenOddSum() {
    let evenSum = 0; oddSum = 0;
    for (let i = 1; i <= 100; i++){
        if ( i%2 == 0) {
            evenSum += i;
        } else {
            oddSum += i;
        }
    }
    console.log("Sum of even Number",evenSum);
    console.log("Sum of odd Number", oddSum);
}
getEvenOddSum()