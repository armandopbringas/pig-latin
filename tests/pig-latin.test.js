
const vowels = require('../constants');
const { firstLetterIsVowel, getConsonants, pigLatin } = require('../pig-latin');

const { vowelStartingWords, nonVowelStartingWords } = require("./utils");

describe('Testing firstLetterIsVowel function', () => {
  test('should be type string', () => {
    expect(() => firstLetterIsVowel()).toThrow(Error);
  });
  
  test('Correctly validate vowel starting words', () => {
    vowelStartingWords.forEach(word => {
      expect(firstLetterIsVowel(word)).toBeTruthy();
    });
  });
  
  test('should not start with vowel', () => {
    expect(firstLetterIsVowel('true')).toBeFalsy();
  });
})

