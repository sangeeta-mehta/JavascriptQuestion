let arr = [1, 5, 3, 9, 2,12,21,3,6,8];

function largestNum(arr) {
    let max = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}
console.log(largestNum(arr));