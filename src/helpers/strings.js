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

function replaceDoubleQuotesToSingle(array) {
  const newArray = []
  array.forEach(value => {
    if(typeof value == 'string') {
      const newValue = value.replaceAll('\"', '\'')
      newArray.push(newValue)
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

function removeSpacesFromColumn(columns) {
  const newArray = []
  columns.forEach(column => {
    const updatedColumn = column.replace(' ', '_')
    newArray.push(updatedColumn)
  })
  return newArray
}

export {
  wrapStringAroundDoubleQuotes,
  removeLastCommaAndAddSemiColon,
  removeSpacesFromColumn,
  replaceDoubleQuotesToSingle
}