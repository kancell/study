//JSON.stringify不支持regexp
let unique = ( input ) => {
    let cache = {}
    let cacheArray = []

    input.forEach(ele => {
        let ca = ele

        if (ele instanceof Object || ele instanceof Array) {
            ca = JSON.stringify(ele)
        }
        
        if (!cache.hasOwnProperty(ca)) {
            cache[ca] = typeof ca
            cacheArray.push(ele)
        }
        else if (cache[ca] !== typeof ca) {
            cache[ca] = typeof ca
            cacheArray.push(ele)
        }
        else {
            return
        }
    })
    return cacheArray
}


console.log(unique([1, "a", {b: 2}, {c: 3}, {b: 2}, "1", "a"]))