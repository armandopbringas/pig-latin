// const pigLatin = require('../pig-latin.js');
const firstLetterIsVowel = require('../pig-latin');

test('the first word letter is vowel', () => {
  expect(firstLetterIsVowel).toBe(true);
});

test('the first word letter is consonant', () => {
  expect(firstLetterIsVowel).toBe(false);
});
