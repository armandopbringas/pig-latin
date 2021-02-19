// Pig Latin algorithm

// - para palabras que comienzan con una vocal, se añade 'way' al final
// - para palabras que comienzan con consonante, se mueven todas las consonantes 
//   antes de la primera vocal al final de la palabra y se añade 'ay'

function pigLatin(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  // Step one: want to know if the first word letter is vowel
  const [firstLetter] = word;
  console.log([firstLetter]);
  const firstLetterIsVowel = vowels.some(vowel => vowel === firstLetter);
  console.log(firstLetterIsVowel);
  module.exports = firstLetterIsVowel;
  
  // Step two: the word starts with one or more consonants
  const wordLetters = [...word];
  console.log(wordLetters);
  const firstLettersAreConsonants = wordLetters.some(letter => letter === vowels);
  console.log(firstLettersAreConsonants);
  module.exports = firstLettersAreConsonants;
  
  // Step three: want to know with how many consonants word starts

  // return word + 'way'
  // return word + 'ay'
}

// pigLatin('place'); 

console.log(pigLatin('angular'));