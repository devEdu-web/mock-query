function wrapStringAroundDoubleQuotes(array) {
  const newArray = []
  array.forEach(value => {
    if(typeof value === 'string') {
      newArray.push(`\"${value}\"`)
    } else {
      newArray.push(value)
    }
  })
  return newArray
}

function removeLastCommaAndAddSemiColon(string) {
  const lastCommaIndex = string.lastIndexOf(',')
  return string.substring(0, lastCommaIndex) + ';' + string.substring(lastCommaIndex + 1);
}

export {
  wrapStringAroundDoubleQuotes,
  removeLastCommaAndAddSemiColon
}