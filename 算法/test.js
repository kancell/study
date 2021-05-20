let a = (function(){
    let x = {};
    x['y'] = [1];
    console.log(x)
    return x;
})()
console.log(a)