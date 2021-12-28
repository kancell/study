var fourSum = function(nums, target) {
    let cache = [...nums]
    cache.sort((x, y) => {
        return x - y
    })
    const result = []
    for (let i = 0; i < cache.length - 3; i++) {
        for (let j = i + 1; j < cache.length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }

            let start = j + 1;
            let end = cache.length - 1
            while (start < end) {
                let cacheSum = cache[i] + cache[j] + cache[start] + cache[end]
                if (cacheSum === target) {
                    if (!result.includes([cache[i], cache[j], cache[start], cache[end]])) {
                        result.push([cache[i], cache[j], cache[start], cache[end]])
                    }
                    break
                } else if (cacheSum > target) {
                    end--
                } else {
                    start++
                }
            }
        }
    }
    console.log(result)
};

fourSum([1, 0, -1, 0, -2, 2], 0)