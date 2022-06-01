import Query from './src/queries/Custom.js'
import MockQuery from './src/queries/Mock.js'
import { faker } from '@faker-js/faker'

const mock = new MockQuery({
  tableName: 'users',
  columns: ['first_name', 'last_name', 'age'],
  mocks: ['firstName', 'lastName', 'age'],
  amount: 20,
})
