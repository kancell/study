/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = []
    let arr = nums.sort((pre,nxt) => {return pre - nxt})
    console.log(arr)
    for(let i = 0; i < arr.length - 2 && arr[i] <= 0; i++) {
        if (arr[i] === arr[i-1]) continue
        let left = i + 1
        let right = arr.length - 1
        while (left < right) {
            if (arr[i] + arr[left]  + arr[right] === 0) {
                result.push([arr[i], arr[left], arr[right]])
                while (arr[left] === arr[left+1]) left++
                while (arr[right] === arr[right-1]) right--
                left++
                right--
            } 
            else if (arr[i] + arr[left] + arr[right] > 0) {
                while (arr[right] === arr[right-1]) right--
                right--
            }
            else {
                while (arr[left] === arr[left+1]) left++
                left++
            }
        }
    }
    return result
};
console.log(threeSum([-2,0,0,2,2]))