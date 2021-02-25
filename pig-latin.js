// Pig Latin algorithm

// - para palabras que comienzan con una vocal, se añade 'way' al final
// - para palabras que comienzan con consonante, se mueven todas las consonantes 
//   antes de la primera vocal al final de la palabra y se añade 'ay'

const { vowels: VOWELS } = require('./constants');
const firstLetterIsVowel = word => {
  if (!word || typeof word !== 'string') throw new Error('Only strings allowed');
  const [firstLetter] = word;
  const letter = VOWELS.some(vowel => vowel === firstLetter);
  return letter;
}
// console.log(firstLetterIsVowel(word));
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

function pigLatin(word) {

}

module.exports = {
  firstLetterIsVowel,
  getConsonants,
  pigLatin
}