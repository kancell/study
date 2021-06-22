/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let value = 0
    for (let i = 0; i < n; i++) {
        value = value ^ (start + 2*i)
    }
    return value
};
console.log(xorOperation(5,0))