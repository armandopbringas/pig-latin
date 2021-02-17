// Pig Latin algorithm

// - para palabras que comienzan con una vocal, se añade 'way' al final
// - para palabras que comienzan con consonante, se mueven todas las consonantes antes de la primera vocal al final de la palabra y se añade 'ay'

function pigLatin(word) {

  const vowels = ['a', 'e', 'i', 'o', 'u'];
  // let isVowel = 0;

  const [firstLetter] = word;
  console.log(word);
  const firstLetterIsVowel = vowels.some(vowel => vowel === firstLetter);
  console.log(firstLetterIsVowel);

  const lettersArray = [...word];
  console.log(lettersArray);
  const firstVowelIndex = lettersArray.findIndex(letter => vowels.contains(letter));
  console.log(firstVowelIndex);

  const frstPart = lettersArray.slice(1);
  console.log(frstPart);

  // if ( vowels.includes( word[0] ) ) {
  //   return word + 'way';
  // } else {
  //   for ( let consonant of word ) {
  //     if ( vowels.includes(consonant) ) {
  //       isVowel = word.indexOf(consonant);
  //       // console.log(isVowel);
  //       break;
  //     }
  //   }
  //   const frstPart = word.slice(isVowel);
  //   // console.log(frstPart);
  //   const scnPart = word.slice(0, isVowel);
  //   // console.log(scnPart);
  //   return `${frstPart}${scnPart}ay`;
  // }

}

console.log(pigLatin('angular'));