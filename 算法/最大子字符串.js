var lengthOfLongestSubstring = function(s) {
    if (s.length === 0 || s.length === 1) return s.length

    let result = 0
    let nowMaxChild
    for (let i = 0; i < s.length; i++) {
        nowMaxChild = s[i]
        for (let j = i+1; j < s.length; j++) {
            if (s.substring(j).indexOf(nowMaxChild) !== -1) {
               
                nowMaxChild += s[j]

            } else {
                if (nowMaxChild.length > result) {result = nowMaxChild.length}

            }
        }
        
    }
    return result
};

console.log(lengthOfLongestSubstring("abcbba"))
//整体不重复的，最短的子字符串