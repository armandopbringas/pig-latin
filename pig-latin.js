// Pig Latin algorithm

// - para palabras que comienzan con una vocal, se añade 'way' al final
// - para palabras que comienzan con consonante, se mueven todas las consonantes 
//   antes de la primera vocal al final de la palabra y se añade 'ay'

function pigLatin(word) {

  const vowels = ['a', 'e', 'i', 'o', 'u'];

  const [firstLetter] = word;
  const firstLetterIsVowel = vowels.some(vowel => vowel === firstLetter);
  console.log(firstLetterIsVowel);

  // Code what add 'way' at word ends
  if(firstLetterIsVowel) {
    return word + 'way';
  }

  const lettersArray = [...word];
  const firstVowelIndex = lettersArray.findIndex(letter => vowels.includes(letter));
  const frstPart = lettersArray.slice(1);

}

// pigLatin('angular');

console.log(pigLatin('angular'));