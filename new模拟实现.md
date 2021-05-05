```javascript
function objectFactory(fun, params) {
    let obj = new Object()
    let constructor = fun
    //let constructor = Array.prototype.shift.call(arguments)
    obj.__proto__ = constructor.prototype
    constructor.apply(obj, params)
    //constructor.apply(obj, arguments)
    return obj
}

function Otaku (name, age) {
    this.name = name;
    this.age = age;
    this.habit = 'Games';
}
Otaku.prototype.strength = 60;
Otaku.prototype.sayYourName = function () {
    console.log('I am ' + this.name);
}
let person = objectFactory(Otaku, ['Kevin', '18'])
//let person = objectFactory(Otaku, 'Kevin', '18')
console.log(person.name) // Kevin
console.log(person.habit) // Games
console.log(person.strength) // 60

person.sayYourName(); // I am Kevin
```0