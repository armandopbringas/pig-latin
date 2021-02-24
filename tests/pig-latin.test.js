const { firstLetterIsVowel, getConsonants, pigLatin } = require('../pig-latin');
const words = [ { word: "arquimides", assert: true } ];

describe('Unit tests', () => {

  it('should be type string', () => {
    expect(() => firstLetterIsVowel()).toThrow(Error);
  });

});

// describe("Big picture", () => {
//   const [ arquimides, pico, resto, malo, bestTeamEver, hola ] = words;
//   expect(pigLatin(arquimides)).toEqual("")
// })

// test('the consonantLetters array has vowles', () => {
//   expect(consonantLetters).toContain('n');
//   expect(new Set(consonantLetters)).toContain('n');
// });