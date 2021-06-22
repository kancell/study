function deal(num) {
    let result = num.toString().split('')
    let le = result.length
    if(le <= 3) return num
    for (let i = 1; i < le; i++) {
       if ((le - i)%3 === 0) {
          result[i] = `,${result[i]}`
       }
    }
    return result.join('')
 }
 console.log(deal(100000))