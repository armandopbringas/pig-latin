const { firstLetterIsVowel, getConsonants, pigLatin } = require('../pig-latin');
const { vowelStartingWords, nonVowelStartingWords } = require("./utils");

describe('Testing input normalization', () => {
  test('TBD 1', () => {
    expect().toBeDefined();
  });
  test('TBD 2', () => {
    expect().toBeDefined();
  });
})

describe('Testing firstLetterIsVowel function', () => {
  it('should be type string', () => {
    expect(() => firstLetterIsVowel()).toThrow(Error);
  });
  
  it('Correctly validate vowel starting words', () => {
    vowelStartingWords.forEach( word => {
      expect(firstLetterIsVowel(word)).toBeDefined(); 
      expect(firstLetterIsVowel(word)).toStrictEqual(true);
    });
  });
  
  it('should not start with vowel', () => {
    expect(firstLetterIsVowel('true')).toBeFalsy();
  });
});