let arr = [1, 5, 3, 9, 2,12,21,3,6,8,34,12,43,43];

function SecondlargestNum(arr) {
    let max = 0, secHigh = 0;
    for (let i = 0; i < arr.length; i++){
        console.log("max",max, "secHigh", secHigh);
        
        if (arr[i] > max) {
            secHigh = max
            max = arr[i]
            
        }
        else if (arr[i] > secHigh && arr[i] < max) {
            secHigh = arr[i]
        }
    }
    return secHigh;
}
console.log(SecondlargestNum(arr));