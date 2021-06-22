var checkSubarraySum = function(nums, k) {
  let kmap = new Map()
  kmap.set(0, -1)
  let reminder = 0;
  nums.forEach((item, index) => {
      reminder = (item + reminder) % k;
      if (kmap.has(reminder)) {
          console.log(index-kmap.get(reminder))
          if (index - kmap.get(reminder) > 1) {
              return true
          }
      } else {
          kmap.set(reminder, index)
      }
  })
  
  return false
};

console.log(checkSubarraySum([23,2,4,6,7],6))