var plusOne = function(digits) {
    let arr = digits
    let up = false
    arr[arr.length - 1] += 1
    if (arr[arr.length - 1] === 10) {
        arr[arr.length - 1] = 0
        up = true
    }
    for (let i = arr.length - 2; i >= 0; i--) {    
        if (up) {
            console.log(arr[i])
            arr[i] += 1
            
            if (arr[i] === 10) {
                up = true
                arr[i] = 0
            } else {
                return digits
            }
            
        } 
    }
    if (up) {arr.unshift(1)}
    return arr
};
console.log(plusOne([9,9,9,9]))