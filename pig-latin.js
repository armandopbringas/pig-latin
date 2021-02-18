// Pig Latin algorithm

// - para palabras que comienzan con una vocal, se añade 'way' al final
// - para palabras que comienzan con consonante, se mueven todas las consonantes 
//   antes de la primera vocal al final de la palabra y se añade 'ay'

function pigLatin(word) {

  const vowels = ['a', 'e', 'i', 'o', 'u'];

  const [firstLetter] = word;
  const firstLetterIsVowel = vowels.some(vowel => vowel === firstLetter);
  // console.log(firstLetterIsVowel);

  const lettersArray = [...word];
  // console.log(lettersArray)

  // This constant searchs the index position of the first vowel in the word
  const firstVowelIndex = lettersArray.findIndex(letter => vowels.includes(letter));
  // console.log(firstVowelIndex)
 
  const frstPart = lettersArray.slice(1);
  // console.log(frstPart)

  // Code what add 'way' at word ends if the word starts with vocal 
  // or add 'ay' if the word strts with consonants
  if(firstLetterIsVowel) {
    return word + 'way';
  } else {
    return word +'ay';
  }

}

// pigLatin('angular');

console.log(pigLatin('javascript'));