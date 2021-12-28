// 定义一个复杂对象
const obj = {
  obj: {
      children: {
          a: 1
      }
  }
}

const objProxy = new Proxy(obj, {
  get(target, property, receiver){
      console.log('-- target --')
      return Reflect.get(target, property, receiver)
  },

  set(target, property, value, receiver) {
      console.log('-- set --')
      return Reflect.set(target, property, value, receiver)
  }
})

console.log(objProxy.obj) // 输出 '-- target --'
console.log(objProxy.obj.children.a = 9080) // 输出 '-- set --'
