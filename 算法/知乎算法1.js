const data = [{
  key: 'name1',
  value: '豆皮1'
}, {
  key: 'name2',
  value: '豆皮2'
}, {
  key: 'name3',
  value: '豆皮3'
}]

const processFn = (data) => {
  let obj = {}
  for (const [index, it] of data.entries()) {
    obj[it.key] = it.value
  }
  return obj
}
console.log(processFn(data))