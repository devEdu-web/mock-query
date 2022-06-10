// import Query from "./src/queries/Custom.js";
// import MockQuery from "./src/queries/Mock.js";

// export {
//   Query,
//   MockQuery
// }

import Query from "./src/queries/Custom.js";

const custom = new Query()

custom.file({
  tableName: 'top_songs',
  path: './titles_amazon.csv'
})