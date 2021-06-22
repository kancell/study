let person = function () {
}
let nicole = new person()

function otherInstanceof(leftValue, rightValue) {
    leftProto = leftValue.__proto__
    rightProto = rightValue.prototype
    while(true) {
        if (leftProto === null) return false
        if (leftProto === rightProto) return true
        leftProto = leftProto.__proto__
    }
} 

console.log(otherInstanceof(nicole, person))