// Pig Latin algorithm

// - para palabras que comienzan con una vocal, se añade 'way' al final
// - para palabras que comienzan con consonante, se mueven todas las consonantes antes de la primera vocal al final de la palabra y se añade 'ay'

function pigLatin(word) {

  const vowels = ['a', 'e', 'i', 'o', 'u'];

  const [firstLetter] = word;
  const firstLetterIsVowel = vowels.some(vowel => vowel === firstLetter);

  const lettersArray = [...word];
  const firstVowelIndex = lettersArray.findIndex(letter => vowels.contains(letter));
  
  const frstPart = lettersArray.slice(1);

}

console.log(pigLatin('angular'));