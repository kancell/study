
function compareVersion (verA, operator, verB) {
    let caInfo = {}
    caInfo.data = verA.split('.')
    caInfo.length = caInfo.data.length
    
    let cbInfo = {}
    cbInfo.data = verB.split('.')
    cbInfo.length = cbInfo.data.length

    let allLength = caInfo.length > cbInfo.length ? caInfo.length : cbInfo.length

    let result = null

    let operatorBox = {
        '>': judge1,
        '<': judge2,
        '=': EqualOf
    }
    for (let i = 0; i < allLength; i++) {
        let opr = operatorBox[operator]
        if (typeof(caInfo.data[i]) === 'undefined') caInfo.data[i] = 0
        if (typeof(cbInfo.data[i]) === 'undefined') cbInfo.data[i] = 0
        let check = opr(Number(caInfo.data[i]), Number(cbInfo.data[i]))
        
        if (check === 'eq') {} else {
            result = check
            console.log(result)
            return result
        } 
    }

    operator === '=' ? result = true : result = false
    console.log(result)
    return result
}

function judge1(a, b) {
    return a > b ? true : a === b ? 'eq' : false
}
function judge2(a, b) {
    return a < b ? true : a === b ? 'eq' : false
}
function EqualOf(a, b) {
    return a === b
}

compareVersion( '4.0.1.0' , '=', '4.0.1.0' )  // false
compareVersion( '4.0.1.0' ,'>', '4.1.0.1')    // false
compareVersion( '4.0.1.0' ,'<', '4.1.0' )