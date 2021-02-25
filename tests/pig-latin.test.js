const { firstLetterIsVowel, getConsonants, pigLatin } = require('../pig-latin');

describe('testing firstLetterIsVowel function', () => {
  it('should be type string', () => {
    expect(() => firstLetterIsVowel()).toThrow(Error);
  });
  
  it('should be start with vowel', () => {
    expect(firstLetterIsVowel('animal')).toBeTruthy();
  });
  
  it('should not start with vowel', () => {
    expect(firstLetterIsVowel('true')).toBeFalsy();
  });
});