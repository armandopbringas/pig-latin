const { vowels: VOWELS } = require('./constants');
const word = 'buzz';
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
  const firstConsonantLetter = wordLetters[0]; 
  const firstLetterIsConsonant = VOWELS.includes(firstConsonantLetter);
  const secondConsonantLetter = wordLetters[1];
  const secondLetterIsConsonant = VOWELS.includes(secondConsonantLetter);
  return {
    wordLetters,
    firstConsonantLetter,
    firstLetterIsConsonant,
    secondConsonantLetter,
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