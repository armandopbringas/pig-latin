const firstLetterIsVowel = require('../pig-latin');
const words = [ { word: "arquimides", assert: true } ];

describe("Unit tests", () => {
  // until here, in theory, it´is passing the test for a typeof string data but then i don´t know whats the way to use the parameter 'word' to evaualate it, i´v been trying some ways but they are not correct
  test('should be type string', () => {
    expect(typeof 'string').toBe('string');
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