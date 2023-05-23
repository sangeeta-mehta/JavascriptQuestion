let arr = [1, 3, 3, 5, 7, 2, 5, 8, 6]

function duplicate(arr) {
    let newarr = []
    for (let i = 0; i < arr.length; i++){
        var isDuplicate = false;
        
        for (let j = 0; j < newarr.length; j++){
            if (arr[i] === newarr[j]) {
                isDuplicate = true;
                break;
            }
           
        }
        if (!isDuplicate) {
            newarr.push(arr[i])
        }
    }
    return newarr
}
duplicate(arr)
console.log(duplicate(arr));


