/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSumOfThreeSubarrays = function(nums, k) {
  const result = [0, 0, 0]
  let sliderA = 0, sumA = 0, indexA = 0; newIndexA = 0
  let sliderB = 0, sumB = 0, indexB = 0; 
  let sliderC = 0, sumC = 0, indexC = 0;
  for (let i = k*2; i < nums.length; i++) {
      sliderA += nums[i - k*2]
      sliderB += nums[i - k]
      sliderC += nums[i]
      if (i >= k*3 -1) {
          if (sliderA > sumA) {
              sumA = sliderA
              indexA = i - k*3 + 1
          }
          if (sliderB + sumA > sumB) {
              sumB = sumA + sliderB
              newIndexA = indexA
              indexB = i - k*2 + 1
          }
          if (sliderC + sumB > sumC) {
              sumC = sumB + sliderC
              indexC = i - k + 1
              result[0] = newIndexA
              result[1] = indexB
              result[2] = indexC
          }
          console.log(indexA, newIndexA, indexB, indexC, sumA, sumB, sumC)
          sliderA -= nums[i - k*3 + 1] 
          sliderB -= nums[i - k*2 + 1] 
          sliderC -= nums[i - k + 1] 
      }
  }
  return result
};

maxSumOfThreeSubarrays([4,5,10,6,11,17,4,11,1,3], 1)
