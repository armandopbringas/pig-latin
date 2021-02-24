const vowels = require('../constants');
const { firstLetterIsVowel, getConsonants, pigLatin } = require('../pig-latin');

describe('Unit tests', () => {

  it('should be type string', () => {
    expect(() => firstLetterIsVowel()).toThrow(Error);
  });

}); 