class SqlStatements {
  #commonInsertStatement = "INSERT INTO table (columns) VALUES (values);"
  #mockInsertStatement =  "INSERT INTO table (columns) VALUES "
  
  getCommonInsertStatement() {
    return this.#commonInsertStatement
  }
  getMockInsertStatement() {
    return this.#mockInsertStatement
  }
}


export default SqlStatements