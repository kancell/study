- standard stack for all synchronous calls (one function calls another, etc)
- microtask queue (or job queue or microtask stack) for all async operations with higher priority (process.nextTick, Promises, Object.observe, MutationObserver)
- macrotask queue (or event queue, task queue, macrotask queue) for all async operations with lower priority (setTimeout, setInterval, setImmediate, requestAnimationFrame, I/O, UI rendering)
```
|=======|
| macro |
| [...] |
|       |
|=======|
| micro |
| [...] |
|       |
|=======|
| stack |
| [...] |
|       |
|=======|
```
Mico stack won't be touch if stack isn't empty. Macro stack won't be touch if micro stack isn't empty OR do not require any execution.
```javascript
console.log('stack [1]');
setTimeout(() => console.log("macro [2]"), 0);
setTimeout(() => console.log("macro [3]"), 1);

const p = Promise.resolve();
for(let i = 0; i < 3; i++) p.then(() => {
    setTimeout(() => {
        console.log('stack [4]')
        setTimeout(() => console.log("macro [5]"), 0);
        p.then(() => console.log('micro [6]'));
    }, 0);
    console.log("stack [7]");
});

console.log("macro [8]");

/* Result:
stack [1]
macro [8]

stack [7], stack [7], stack [7]

macro [2]
macro [3]

stack [4]
micro [6]
stack [4]
micro [6]
stack [4]
micro [6]

macro [5], macro [5], macro [5]
--------------------
but in node in versions < 11 (older versions) you will get something different


stack [1]
macro [8]

stack [7], stack [7], stack [7]

macro [2]
macro [3]

stack [4], stack [4], stack [4]
micro [6], micro [6], micro [6]

macro [5], macro [5], macro [5]

more info: https://blog.insiderattack.net/new-changes-to-timers-and-microtasks-from-node-v11-0-0-and-above-68d112743eb3
```