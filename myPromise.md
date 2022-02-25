<!--
 * @Author: xxxafu
 * @Date: 2022-02-19 08:34:20
 * @LastEditTime: 2022-02-19 09:19:18
 * @LastEditors: xxxafu
 * @Description: 
 * @FilePath: \study\myPromise.md
-->
```javascript
class myPromise {
  static PENDING = 'pending'
  static FULFILLED = 'fulfilled'
  static REJECTED = 'rejected'

  constructor(func) {
    this.promiseStatus = myPromise.PENDING
    this.promiseResult = null
    func(this.resolve, this.reject)
  }
  
  resolve(result) {
    if (this.promiseStatus === myPromise.PENDING) {
      this.promiseStatus = FULFILLED
      this.promiseResult = result
    }
  }

  reject(reason) {
    if (this.promiseStatus === myPromise.PENDING) {
      this.promiseStatus = REJECTED
      this.promiseResult = reason
    }
  }
  
}
```