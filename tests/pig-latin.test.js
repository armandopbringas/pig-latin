const { firstLetterIsVowel, getConsonants, pigLatin } = require('../pig-latin');
const words = [ { word: "arquimides", assert: true } ];

describe('Unit tests', () => {

  describe('First #letterIsVowel', () => {
    // It's fine to declare here a short description on
    // why this method exists (as part of the overall solution)
    // and a BRIEF on what's it's general behavior to come to a solution
  })
  
  it('Should be called with a word as string', () => {
    expect(() => firstLetterIsVowel()).toThrow(Error);
  });

  // Should validate vowel starting words as `true`

  // Should validate non vowel starting words as `false`

  // Include a test for cases like the string "   apple as parameter"
  // This test may take you to a bit of change in the implementation

});
