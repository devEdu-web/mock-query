import MockQuery from './src/queries/Mock.js'

const mock = new MockQuery({
  tableName: 'users',
  columns: ['first_name', 'last_name', 'age'],
  mocks: ['firstName', 'lastName', 'age'],
  amount: 10000,
})

console.log(mock.mockInsert())
// mock.mockInsert()
// const generator = new Query({
//   columns: ['name', 'age'],
//   values: ["eduardo", 10],
//   table: 'users_domain'
// })
