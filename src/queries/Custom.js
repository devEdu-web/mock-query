import SqlStatements from "../config/statements.js"
import {wrapStringAroundDoubleQuotes} from "../helpers/strings.js"
class Query extends SqlStatements {
  constructor(options) {
    super()
    this.columns = options.columns
    this.values = options.values
    this.table = options.table
  }

  customInsertQuery() {
    const stringsWithQuotes = wrapStringAroundSingleQuotes(this.values)
    let query = this.insert
      .replace('?', this.table)
      .replace('?', this.columns.join())
      .replace('?', stringsWithQuotes.join())
   return query
  }

}


export default Query