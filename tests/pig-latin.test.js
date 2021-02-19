const firstLetterIsVowel = require('../pig-latin');
const firstLettersAreConsonants = require('../pig-latin')

test('the first word letter is vowel', () => {
  expect(firstLetterIsVowel).toBe(true);
});

test('the first word letter is consonant', () => {
  expect(firstLettersAreConsonants).toBe(true);
});
