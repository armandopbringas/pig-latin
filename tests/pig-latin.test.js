const firstLetterIsVowel = require('../pig-latin');
const consonantLetters = require('../pig-latin');
 
test('the first word letter is vowel', () => {
  expect(firstLetterIsVowel).toBe(true);
});

test('the consonantLetters array has vowles', () => {
  expect(consonantLetters).toContain('n');
  expect(new Set(consonantLetters)).toContain('n');
});
