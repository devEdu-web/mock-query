import SqlStatements from "../config/statements.js"
import {wrapStringAroundDoubleQuotes} from "../helpers/strings.js"
import createOutputFile from "../helpers/files.js"
class Query extends SqlStatements {
  constructor(options) {
    super()
    this.columns = options.columns
    this.values = options.values
    this.tableName = options.tableName
  }

  customInsertQuery() {
    const stringsWithQuotes = wrapStringAroundDoubleQuotes(this.values)
    let query = this.insert
      .replace('?', this.table)
      .replace('?', this.columns.join())
      .replace('?', stringsWithQuotes.join())
   createOutputFile(query)
  }

}


export default Query