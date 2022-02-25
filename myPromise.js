/*
 * @Author: xxxafu
 * @Date: 2022-02-19 09:21:17
 * @LastEditTime: 2022-02-19 17:04:32
 * @LastEditors: xxxafu
 * @Description: 
 * @FilePath: \study\myPromise.js
 */


class myPromise {
  static PENDING = 'pending'
  static FULFILLED = 'fulfilled'
  static REJECTED = 'rejected'

  constructor(func) {
    this.PromiseStatus = myPromise.PENDING
    this.PromiseResult = null
    this.onFulFilledCallbacks = []
    this.onRejectedCallbacks = []
    try {
      func(this.resolve.bind(this), this.reject.bind(this))
    } catch (error) {
     this.reject(error) 
    }
  }

  resolve(result) {
    console.log(result, this.PromiseStatus, 'resolve')
    if (this.PromiseStatus === myPromise.PENDING) {
      setTimeout(() => {
        this.PromiseStatus = myPromise.FULFILLED
        this.PromiseResult = result
        this.onFulFilledCallbacks.forEach(func => func(result))    
      }, 0);
    }
  }

  reject(error) {
    console.log(error, this.PromiseStatus, 'reject')
    if (this.PromiseStatus === myPromise.PENDING) {
      setTimeout(() => {
        this.PromiseStatus = myPromise.REJECTED
        this.PromiseResult = error
        this.onRejectedCallbacks.forEach(func => func(error))
      }, 0);
    }
  }

  then(onFulFilled, onRejected) {
    onFulFilled = typeof onFulFilled === 'function' ? onFulFilled : (value) => value
    onRejected = typeof onRejected === 'function' ? onRejected : (error) => {
      throw (error)
    }
    const promiseCallback = new myPromise((resolve, reject) => {
      if (this.PromiseStatus === myPromise.PENDING) {
        this.onFulFilledCallbacks.push(onFulFilled)
        this.onRejectedCallbacks.push(onRejected)
      }
      if (this.PromiseStatus === myPromise.FULFILLED) {
        setTimeout(() => {
          try {
            resolvePromise(promiseCallback, onFulFilled(this.PromiseResult), resolve, reject)        
          } catch (error) {
            reject(error)
          }
        }, 0);
      }
      if (this.PromiseStatus === myPromise.REJECTED) {
        setTimeout(() => {
          try {
            resolvePromise(promiseCallback, onFulFilled(this.PromiseResult), resolve, reject)
          } catch (error) {
            reject(error)
          }
        }, 0)
      }
    })
    return promiseCallback
  }

}

function resolvePromise(promise2, x, resolve, reject) {}

let promise1 = new myPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('这次一定');
    resolve('这次一定2');
    reject('这次一定3');
    console.log('a', promise1.PromiseStatus);
  });
})
promise1.then(
  result => {   
    console.log('fulfilled:', result);
    console.log('b', promise1.PromiseStatus);
  },
  reason => {
    console.log('rejected:', reason)
    console.log('c', promise1.PromiseStatus);
  }
)
