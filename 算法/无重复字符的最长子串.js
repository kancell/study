var lengthOfLongestSubstring = function(s) {
    if (s.length === 0 || s.length === 1) return s.length

    let result = 0
    let nowMaxChild = ""

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (nowMaxChild.indexOf(s[j]) === -1) {
                nowMaxChild += s[j]
            } else {
                if (nowMaxChild.length > result) {
                    result = nowMaxChild.length
                }
                nowMaxChild = s[i]
                break
            } 
        }
    
    }
    if (nowMaxChild.length > result) {
        result = nowMaxChild.length
    }
    return result
};

console.log(lengthOfLongestSubstring("dvdf"))
