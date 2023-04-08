// 1. Write a program to print a series with a 'while' loop.
// 0,1,1,2,3,5,8,13,21,..................

function printSeries() {
    let a = 0, b = 1, i=0, sum;
    while (i < 10) {
        console.log(a);
        sum = a + b;
        a = b;
        b = sum;
        i++;
    }

}
printSeries()