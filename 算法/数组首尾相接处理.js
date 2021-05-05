const list = [
    [1,5],
    [5,2],
    [2,8],
    [8,10],
    [10,16],
].sort((a,b) => {
    return Math.random() - 0.5
})
function sort(arr1) {
    let otherput = []
    let output = [list[0]]
    function sortcontain(arr) {    
        let rubbish = []
        arr.forEach(item => {
            if (item[1] === output[0][0]) {
                output.unshift(item)
            } else if (item[0] === output[output.length-1][1]) {
                output.push(item)
            } else {
                rubbish.push(item)
            }
        })     
        if (rubbish.length === 0) {
            if(otherput.length === 0) {
                return output
                
            } else {
                otherput.push(output)
                return otherput
            }
        } else {
            if (check(output[0][0], output[output.length-1][1], rubbish)) {
                return sortcontain(rubbish)
            } else {
                otherput.push(output)
                output = [rubbish[0]]
                return sortcontain(rubbish.splice(1))    
            }
        } 
    }
    function check(tag1, tag2, arr) {
        let decison = false
        arr.forEach(item => {
            item[0] === tag2? decison = true : ''
            item[1] === tag1? decison = true : ''
        })
        return decison
    }
    return sortcontain(arr1.splice(1))
}


console.log(sort(list))
