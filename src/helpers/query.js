import { getColumnsFromCsv } from './files.js'
import { removeSpacesFromColumn, wrapStringAroundDoubleQuotes, replaceDoubleQuotesToSingle, removeLastCommaAndAddSemiColon } from './strings.js'

/**
 * 
 * @param {String} path 
 * @returns Object
 */
async function prepColumnsPartOfQuery(path) {
  const tableColumns = await getColumnsFromCsv(path)
  const columnsArray = tableColumns.split(',')
  const columnItemWithNoSpaces = removeSpacesFromColumn(columnsArray).join()

  return {
    columnsArray,
    columnItemWithNoSpaces
  }
}
/**
 * 
 * @param {Array} values Array
 * @returns String
 */
function prepValuesPartOfQuery(values) {
  const valuesWithNoDoubleQuotes = replaceDoubleQuotesToSingle(values)
  const stringValuesWithQuotes = wrapStringAroundDoubleQuotes(valuesWithNoDoubleQuotes)
  return stringValuesWithQuotes.join()
}

export { prepColumnsPartOfQuery, prepValuesPartOfQuery }