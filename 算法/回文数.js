var longestPalindrome = function(s) {
    let arr = {
        length: 0,
        value: null
    }
    for (let i = 0; i < s.length; i++) {
        for (let j = s.length; j > i; j--) {
            if(check(s.substring(i,j))) {            
                let cache = s.substring(i,j)
                if (arr.length < cache.length){
                    arr.length = cache.length  
                    arr.value = cache
                }      
            }
        }
    }
    return arr.value
};
function check(s) {
    if (s.length === 0) return false
    let start = 0
    let end = s.length-1
    while(start !== end && start < end) {
        if (s[start] === s[end]) {
            start += 1
            end -= 1
        } else {
            return false
        }
    }
    return true
}
console.log(longestPalindrome("aa"))