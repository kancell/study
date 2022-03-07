/**
 * @param {number[]} nums
 * @return {boolean}
 * 
 */
/* 
给你一个整数数组 nums ，判断这个数组中是否存在长度为 3 的递增子序列。

如果存在这样的三元组下标 (i, j, k) 且满足 i < j < k ，使得 nums[i] < nums[j] < nums[k] ，返回 true ；否则，返回 false 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/increasing-triplet-subsequence
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
var increasingTriplet = function(nums) {
  if (nums.length < 3) {
    return false
  }
  let firstNum = nums[0]
  let secondNum = Number.MAX_VALUE
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > secondNum) return true
    else if (nums[i] > firstNum) {
      secondNum = nums[i]
    } else {
      firstNum = nums[i]
    }
  }
  return false
};

console.log(increasingTriplet([20,100,10,12,5,13]))
console.log(2^1)