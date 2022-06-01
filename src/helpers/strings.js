function wrapStringAroundSingleQuotes(array) {
  const newArray = []
  array.forEach(value => {
    if(typeof value === 'string') {
      newArray.push(`\'${value}\'`)
    } else {
      newArray.push(value)
    }
  })
  return newArray
}

export default wrapStringAroundSingleQuotes