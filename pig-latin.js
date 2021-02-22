// Pig Latin algorithm

// - para palabras que comienzan con una vocal, se añade 'way' al final
// - para palabras que comienzan con consonante, se mueven todas las consonantes 
//   antes de la primera vocal al final de la palabra y se añade 'ay'

function pigLatin(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  // Step one: want to know if the first word letter is vowel
  const [firstLetter] = word;
  const firstLetterIsVowel = vowels.some(vowel => vowel === firstLetter);
  module.exports = firstLetterIsVowel;
  
  // Step two: the word starts with one or more consonants
  const wordLetters = [...word];
  const consonantLetters = wordLetters.filter(wordLetter => !vowels.includes(wordLetter));
  module.export = consonantLetters;

  // Step three: move consonant(s) at word ends
  return firstLetterIsVowel ? word + 'way' : word + 'ay';
}

pigLatin('angular')