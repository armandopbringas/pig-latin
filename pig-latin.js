// Pig Latin algorithm

// - para palabras que comienzan con una vocal, se añade 'way' al final
// - para palabras que comienzan con consonante, se mueven todas las consonantes 
//   antes de la primera vocal al final de la palabra y se añade 'ay'

function pigLatin(word) {

  const vowels = ['a', 'e', 'i', 'o', 'u'];

  const [firstLetter] = word;
  const firstLetterIsVowel = vowels.some(vowel => vowel === firstLetter);
  module.exports = firstLetterIsVowel;

  const lettersArray = [...word];

  // This constant searchs the index position of the first vowel in the word
  const firstVowelIndex = lettersArray.findIndex(letter => vowels.includes(letter));
 
  // Here should be the code what slice the letters

  // Code what add 'way' at word ends if the word starts with vocal 
  // or add 'ay' if the word starts with consonants
  
  return firstLetterIsVowel ? word + 'way' : word + 'ay';

}

console.log(pigLatin('place'));