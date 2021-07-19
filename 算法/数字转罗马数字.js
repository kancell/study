/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
  let roma = [
      {'M': 1000}, 
      {'CM': 900}, 
      {'D': 500}, 
      {'CD': 400}, 
      {'C': 100}, 
      {'XC': 90}, 
      {'L': 50},
      {'XL': 40},
      {'X': 10},
      {'IX': 9},
      {'V': 5},
      {'IV': 4},
      {'I': 1}
  ]
  let result = []
  while (num > 0) {
      for (let item of roma) {

          let values = Object.values(item)[0]
          let key = Object.keys(item)[0]
          console.log(num)
          console.log(values, key)
          if (num >= values) {
              num -= values
              result.push(key)
              continue
          }
      }
  }
  return result.join('')
};
console.log(intToRoman(3))