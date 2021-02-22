// Pig Latin algorithm

// - para palabras que comienzan con una vocal, se añade 'way' al final
// - para palabras que comienzan con consonante, se mueven todas las consonantes 
//   antes de la primera vocal al final de la palabra y se añade 'ay'
const { vowels: VOWELS } = require("./constants");

const firstLetterIsVowel = word => {
  if (!word || typeof word !== "string") throw new Error("Only strings allowed");
  const [ firstLetter ] = word;
  return VOWELS.some(vowel => vowel === firstLetter);
}

module.exports = firstLetterIsVowel;

const getConsonants = word => {
  const wordLetters = [...word];
  const consonants = wordLetters.filter(wordLetter => !vowels.includes(wordLetter));
  const hasConsonants = consonants.length > 0;
  const consonantsCount = consonants.length
  return {
    consonants,
    hasConsonants,
    consonantsCount
  };
} 
module.exports = getConsonants;

function pigLatin(word) {
  // Step one: want to know if the first word letter is vowel

  
  // Step two: the word starts with one or more consonants


  // Step three: move consonant(s) at word ends
  // return firstLetterIsVowel ? word + 'way' : word + 'ay';
}

module.exports.pigLatin = pigLatin;
