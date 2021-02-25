// Pig Latin algorithm

// - para palabras que comienzan con una vocal, se añade 'way' al final
// - para palabras que comienzan con consonante, se mueven todas las consonantes 
//   antes de la primera vocal al final de la palabra y se añade 'ay'

const { vowels: VOWELS } = require('./constants');

const normalize = word => {
  if (!word || typeof word !== 'string') throw new Error('Only strings allowed');
  return word.toLocaleLowerCase().trim();
}

const firstLetterIsVowel = word => {
  const [firstLetter] = word;
  return VOWELS.some(vowel => vowel === firstLetter);
}

const getConsonants = word => {
  const wordLetters = [...word];
  const consonants = wordLetters.filter(wordLetter => !VOWELS.includes(wordLetter));
  const hasConsonants = consonants.length > 0;
  const consonantsCount = consonants.length;
  return {
    consonants,
    hasConsonants,
    consonantsCount
  };
} 

function pigLatin(word) {};

module.exports = {
  normalize,
  firstLetterIsVowel,
  getConsonants,
  pigLatin
}