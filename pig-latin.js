const { vowels: VOWELS } = require('./constants');

const normalize = word => {
  if (!word || typeof word !== 'string') throw new Error('Only strings allowed');
  return word.toLocaleLowerCase().trim();
};

const firstLetterIsVowel = word => {
  const [firstLetter] = word;
  return VOWELS.some(vowel => vowel === firstLetter);
};

const getConsonants = word => {
  const wordLetters = [...word];
  const firstLetter = wordLetters[0]; 
  const firstLetterIsConsonant = VOWELS.includes(firstLetter);
  const secondLetter = wordLetters[1];
  const secondLetterIsConsonant = VOWELS.includes(secondLetter);
  return {
    wordLetters,
    firstLetter,
    firstLetterIsConsonant,
    secondLetter,
    secondLetterIsConsonant,
  };
};

function pigLatin(word) {
  if (firstConsonantLetter & secondConsonantLetter === false) {
    return word + 'ay';
  } 
};

module.exports = {
  normalize,
  firstLetterIsVowel,
  getConsonants,
  pigLatin
};