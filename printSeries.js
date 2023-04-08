// 8. Print the following series:-
// 1, 2, 6, 8, 11, 14, 16, 20, 21,....

let a = 1, b = 2;

function getDoubleSeries() {
    console.log(a);
    console.log(b);
    for (let i = 0; i < 15; i++){
        if (i % 2 == 0) {
            a += 5;
            console.log(a);
        } else {
            b += 6;
            console.log(b);
        }
         
    }
}
getDoubleSeries()