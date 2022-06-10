import SqlStatements from '../config/statements.js';
import {wrapStringAroundDoubleQuotes, removeLastCommaAndAddSemiColon} from '../helpers/strings.js';
import mockSettings from '../config/mocks.js'
import createOutputFile from '../helpers/files.js';

class MockQuery extends SqlStatements {
  /**
   * 
   * @param {Object} options 
   * {
   *  columns: [],
   *  tableName: String,
   *  amount: Number,
   *  mocks: []
   * }
   */

  mockInsert(options = {}) {
    let values = [];
    for (let i = 0; i < options.amount; i++) {
      let temporaryValues = []
      const amountOfValues = options.mocks.length
      options.mocks.forEach(value => {
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

    let query = statement.replace('table', options.tableName).replace('columns', options.columns.join())
    let queryWithSemiColon =  removeLastCommaAndAddSemiColon(query)
    createOutputFile(queryWithSemiColon)
  }
}

export default MockQuery;
