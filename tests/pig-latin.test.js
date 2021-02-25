const { TestScheduler } = require('jest');
const vowels = require('../constants');
const { firstLetterIsVowel, getConsonants, pigLatin } = require('../pig-latin');

describe('testing firstLetterIsVowel function', () => {
  test('should be type string', () => {
    expect(() => firstLetterIsVowel()).toThrow(Error);
  });
  
  test('should be start with vowel', () => {
    expect(firstLetterIsVowel('animal')).toBeTruthy();
  });
  
  test('should not start with vowel', () => {
    expect(firstLetterIsVowel('true')).toBeFalsy();
  });
})

