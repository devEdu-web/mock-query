/**
 * 
 * @param {Array} arrayValues 
 * @returns Array
 */

function wrapStringAroundDoubleQuotes(arrayValues) {
  const newArray = []
  arrayValues.forEach(value => {
    if(typeof value === 'string') {
      newArray.push(`\"${value}\"`)
    } else {
      newArray.push(value)
    }
  })
  return newArray
}

/**
 * 
 * @param {Array} arrayValues 
 * @returns Array
 */
function replaceDoubleQuotesToSingle(arrayValues) {
  const newArray = []
  arrayValues.forEach(value => {
    if(typeof value == 'string') {
      const newValue = value.replaceAll('\"', '\'')
      newArray.push(newValue)
    } else {
      newArray.push(value)
    }
  })
  return newArray
}

/**
 * 
 * @param {String} query 
 * @returns String
 */
function removeLastCommaAndAddSemiColon(query) {
  const lastCommaIndex = query.lastIndexOf(',')
  return query.substring(0, lastCommaIndex) + ';' + query.substring(lastCommaIndex + 1);
}

/**
 * 
 * @param {Array} columns 
 * @returns Array
 */
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