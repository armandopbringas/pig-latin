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

const pigLatin = (word) => {
  const consonantChecks = getConsonants(word);
  const {
    wordLetters,
    firstLetter,
    firstLetterIsConsonant,
    secondLetter,
    secondLetterIsConsonant,
  } = consonantChecks;

  const wordWithoutFirstLetter = wordLetters.slice(1);
  const wordWithoutSecondtLetter = wordWithoutFirstLetter.slice(1);
  
  if (firstLetterIsConsonant & secondLetterIsConsonant === false) {
    return word + 'way';
  } else if (firstLetterIsConsonant === true & secondLetterIsConsonant === false) {
    return wordWithoutFirstLetter + firstLetter + 'ay';
  } else if (firstLetterIsConsonant & secondLetterIsConsonant === true) {
    return wordWithoutSecondtLetter + firstLetter + secondLetter + 'ay';
  }
};

module.exports = {
  normalize,
  firstLetterIsVowel,
  getConsonants,
  pigLatin
};