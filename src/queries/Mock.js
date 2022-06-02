import SqlStatements from '../config/statements.js';
import {wrapStringAroundDoubleQuotes, removeLastCommaAndAddSemiColon} from '../helpers/strings.js';
import mockSettings from '../config/mocks.js'
import createOutputFile from '../helpers/files.js';

class MockQuery extends SqlStatements {
  constructor(options) {
    super();
    (this.columns = options.columns),
      (this.tableName = options.tableName),
      (this.amount = options.amount);
      (this.mocks = options.mocks)
  }

  mockInsert() {
    // "INSERT INTO table (columns) VALUES (values);"
    let values = [];
    for (let i = 0; i < this.amount; i++) {
      let temporaryValues = []
      const amountOfValues = this.mocks.length
      this.mocks.forEach(value => {
        if(temporaryValues.length == amountOfValues) {
          temporaryValues = []
        } else {
          temporaryValues.push(mockSettings[value]())
        }
      })
      values.push(temporaryValues)
    }
    let statement = this.mockInsertStatement
    values.forEach(valueGroup => {
      const groupWithDoubleQuotes = wrapStringAroundDoubleQuotes(valueGroup)
      statement += `(${groupWithDoubleQuotes.join()}), `
    })

    let query = statement.replace('table', this.tableName).replace('columns', this.columns.join())
    let queryWithSemiColon =  removeLastCommaAndAddSemiColon(query)
    createOutputFile(queryWithSemiColon)
  }
}

export default MockQuery;
