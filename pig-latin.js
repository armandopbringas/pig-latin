// Pig Latin algorithm

// - para palabras que comienzan con una vocal, se añade 'way' al final
// - para palabras que comienzan con consonante, se mueven todas las consonantes 
//   antes de la primera vocal al final de la palabra y se añade 'ay'

const { vowels: VOWELS } = require('./constants');
// const word = 'animal'
const firstLetterIsVowel = word => {
  if (!word || typeof word !== 'string') throw new Error('Only strings allowed');
  const [firstLetter] = word;
  // console.log(firstLetter);
  const letter = VOWELS.some(vowel => vowel === firstLetter);
  // console.log(letter);
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
//   Step one: want to know if the first word letter is vowel
//   Step two: the word starts with one or more consonants
//   Step three: move consonant(s) at word ends
// return firstLetterIsVowel ? word + 'way' : word + 'ay';
}

module.exports = {
  firstLetterIsVowel,
  getConsonants,
  pigLatin
}