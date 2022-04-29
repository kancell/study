## bind

```javascript
let foo = {
    value: 1
}
function bar () {
    console.log(this.value)
}
let barfoo = bar.bind(foo)
barfoo() //1
```

使用call\apply实现bind，

```javascript
Function.prototype.bind2 = function (param) {
    return () => {
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
```