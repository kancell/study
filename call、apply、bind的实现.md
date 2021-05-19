## bind
```javascript
let foo = {
    value: 1
}
function bar (name, age) {
    console.log(this.value);
    console.log(name);
    console.log(age);
}
let barfoo = bar.bind(foo)
barfoo() //1
```
使用call\apply实现bind，
```javascript
Function.prototype.bind2 = function (param) {
    return () => {
        console.log(this)
        return this.call(param)
    }
}
```
如果要传参呢
```javascript
Function.prototype.bind2 = function (param) {
    let self = this
    let arg = Array.prototype.slice.call(arguments, 1)
    return function () {
        let bindArg = Array.prototype.slice.call(arguments);
        return self.apply(param, arg.concat(bindArg))
    }
}
let barfoo = bar.bind2()
```
如果是将bind作为构造函数使用，则构造函数中指定的this会失效，但参数依然有效
```javascript
let barfoo = bar.bind(foo)
let obj = new barfoo()
```