es6中class继承中的super，指父类的构造器
```javascript
class c extends d {
    constructor () {
        super(...args)
    }
}
```
c中的super(...args)指调用父类d中的constructor，使c中的this = Reflect.construct(d, args, c)，子类构造器中，子类的this是调用super通过父类构造器产生的