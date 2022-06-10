import SqlStatements from "../config/statements.js"
import {wrapStringAroundDoubleQuotes, removeLastCommaAndAddSemiColon } from "../helpers/strings.js"
import {createOutputFile} from "../helpers/files.js"
import { parse } from 'csv-parse'
import { getColumnsFromCsv } from '../helpers/files.js'
import { prepColumnsPartOfQuery, prepValuesPartOfQuery } from '../helpers/query.js'
import fs from 'fs'
class Query extends SqlStatements {
  // constructor(options) {
  //   super()
  //   this.columns = options.columns
  //   this.values = options.values
  //   this.tableName = options.tableName
  // }

  customInsertQuery(options = {}) {
    const stringsWithQuotes = wrapStringAroundDoubleQuotes(options.values)
    let query = this.commonInsertStatement
      .replace('table', options.table)
      .replace('columns', options.columns.join())
      .replace('values', stringsWithQuotes.join())
   createOutputFile(query)
  }

  async file(options = {}) {
    const query = (this.mockInsertStatement).replace('table', options.tableName)
    const columnsResult = await prepColumnsPartOfQuery(options.path)
    let queryWithColumns = query.replace('columns', columnsResult.columnItemWithNoSpaces)

    const values = []
    fs.createReadStream(options.path)
    .pipe(parse({
      columns: true,
      bom: true
    }))
    .on('data', (chunk) => {
      let temporaryValues = []
      Object.keys(chunk).forEach(key => {
        const numberCheck = isNaN(chunk[key])
        if(temporaryValues.length == columnsResult.columnsArray.length) {
          temporaryValues = []
        } else {
          if(numberCheck) {
            temporaryValues.push(chunk[key])
          } else {
            const number = Math.abs(chunk[key])
            temporaryValues.push(number)
          }
        }
      })
      values.push(temporaryValues)
      })
      .on('error', (error) => {
        console.log(error)
      })
      .on('end', () => {
        values.forEach(group => {
          const readyValues = prepValuesPartOfQuery(group)
          queryWithColumns += `(${readyValues}),`
        })
        const queryWithSemiColon = removeLastCommaAndAddSemiColon(queryWithColumns)
        createOutputFile(queryWithSemiColon)
      })

  }

}


export default Query