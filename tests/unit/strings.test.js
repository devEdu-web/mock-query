import {
  wrapStringAroundDoubleQuotes,
  removeLastCommaAndAddSemiColon,
} from '../../src/helpers/strings.js';

describe('Strings Helpers', () => {
  test('If every value is wrapped around a string', () => {
    const array = ['test_value1', 'test_value2', 'test_value3', 'test_value4'];
    const arrayWithQuotes = wrapStringAroundDoubleQuotes(array);
    arrayWithQuotes.forEach((value) => {
      const regex = /["."]/gi;
      expect(value.match(regex)).not.toBe(null);
    });
  });
  test('If the last character is a semicolon', () => {
    const queryWithNoSemicolon =
      "INSERT INTO table (test, test2) VALUES ('test, test'), ('test, test1'),";
    const queryWithSemicolon =
      removeLastCommaAndAddSemiColon(queryWithNoSemicolon);
    const lastCharacter = queryWithSemicolon[queryWithSemicolon.length - 1];
    expect(lastCharacter).toBe(';');
  });
});
