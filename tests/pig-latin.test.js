const { firstLetterIsVowel, getConsonants, pigLatin } = require('../pig-latin');
const { vowelStartingWords, nonVowelStartingWords } = require("./utils");

describe('Testing firstLetterIsVowel function', () => {
  it('should be type string', () => {
    expect(() => firstLetterIsVowel()).toThrow(Error);
  });
  
  it('Words should be start with vowel', () => {
    vowelStartingWords.forEach( word => {
      expect(firstLetterIsVowel(word)).toBeDefined(); 
      expect(firstLetterIsVowel(word)).toStrictEqual(true);
    });
  });
  
  it('should not start with vowel', () => {
    expect(firstLetterIsVowel('true')).toBeFalsy();
  });
});