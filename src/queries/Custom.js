import SqlStatements from "../config/statements.js"
import {wrapStringAroundDoubleQuotes, removeSpacesFromColumn, replaceDoubleQuotesToSingle} from "../helpers/strings.js"
import {createOutputFile} from "../helpers/files.js"
import { parse } from 'csv-parse'
import { getColumnsFromCsv } from '../helpers/files.js'
import { prepColumnsPartOfQuery } from '../helpers/query.js'
import fs from 'fs'
class Query extends SqlStatements {
  // constructor(options) {
  //   super()
  //   this.columns = options.columns
  //   this.values = options.values
  //   this.tableName = options.tableName
  // }

  customInsertQuery() {
    const stringsWithQuotes = wrapStringAroundDoubleQuotes(this.values)
    let query = this.insert
      .replace('table', this.table)
      .replace('columns', this.columns.join())
      .replace('?', stringsWithQuotes.join())
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
          const valuesWithNoDoubleQuotes = replaceDoubleQuotesToSingle(group)
          const groupWithDoubleQuotes = wrapStringAroundDoubleQuotes(valuesWithNoDoubleQuotes)
          queryWithColumns += `(${groupWithDoubleQuotes.join()}),`
        })
        createOutputFile(queryWithColumns)
      })

  }

}


export default Query