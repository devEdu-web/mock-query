# GenQuery

This tool was built to help with one problem: add hundreds or thousands of data into a database. Before this situation you may be prone to write a script with a loop constantly sending thousands of queries to the database, but it's easier and faster to send this amount of data with a single query, with all the values you need. This tool provides you this query. 

## Custom Queries

You can use use the GenQuery to generate custom queries. This use is recommended to generate simpler and shorter queries.

```javascript

import { Query } from 'genquery';

const newQuery()

// Note: The values order must match the columns order.

newQuery.customInsertQuery({
  tableName: 'users',
  columns: ['first_name', 'last_name', 'age']
  values: ['Chris', 'Rock', 34]
})

```

## Mocking Queries

To generate larger queries, or random queries, you can use this functionality.

```javascript
import { MockQuery } from 'genquery';

const mock = new MockQuery()

mock.mockInsert({
  tableName: 'users',
  columns: ['first_name', 'last_name', 'age'],
  mocks: ['firstName', 'lastName', 'age'] // Defines what kind of value to mock
  amount: 20 // Defines how many values generate
})

// Note: the mocks property have fixed values, you can see all them in the docs.

```

***

## Generate queries from CSV files
You can also use a CSV file to generate a query using the values present on it. The application will get the column names and add the values correctly.

Note: This functionality wasn't completely tested, there may be troubles generating queries from specific CSV files.

```javascript
import Query from "./src/queries/Custom.js";

const newQuery = new Query()

newQuery.file({
  tableName: 'example_name',
  file: `relative_path_to_file.csv`
})

```
