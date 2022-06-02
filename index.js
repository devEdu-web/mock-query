import MockQuery from './src/queries/Mock.js'

const mock = new MockQuery({
  tableName: 'users',
  columns: ['first_name', 'last_name', 'age'],
  mocks: ['firstName', 'lastName', 'age'],
  amount: 1000,
})

