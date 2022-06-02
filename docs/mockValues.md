# Mock Values

The mock values is the values you can mock that are passed as values to the mock array, when you are using the MockQuery class. Here an example of the values you can pass:

```javascript

import MockQuery from 'genquery'

const mockValues = [
  'firstName',
  'lastName',
  'age',
  'city',
  'country',
  'product',
  'price',
  'companyName',
  'phone',
  'musicGenre',
  'songName',
]

const mock = new MockQuery({
  tableName: 'users',
  columns: ['first_name', 'last_name', 'age'],
  mocks: mockValues,
  amount: 1000,
})



```