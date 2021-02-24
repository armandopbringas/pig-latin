const { firstLetterIsVowel, getConsonants, pigLatin } = require('../pig-latin');
const words = [ { word: "arquimides", assert: true } ];

describe('Unit tests', () => {

  it('should be type string', () => {
    expect(() => firstLetterIsVowel()).toThrow(Error);
  });

});