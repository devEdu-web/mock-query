import { getColumnsFromCsv } from './files.js'
import { removeSpacesFromColumn } from './strings.js'

async function prepColumnsPartOfQuery(path) {
  const tableColumns = await getColumnsFromCsv(path)
  const columnsArray = tableColumns.split(',')
  const columnItemWithNoSpaces = removeSpacesFromColumn(columnsArray).join()

  return {
    columnsArray,
    columnItemWithNoSpaces
  }
}

export { prepColumnsPartOfQuery }