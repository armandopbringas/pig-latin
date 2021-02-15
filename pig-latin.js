// Pig Latin algorithm

// - para palabras que comienzan con una vocal, se añade 'way' al final
// - para palabras que comienzan con consonante, se mueven todas las consonantes antes de la primera vocal al final de la palabra y se añade 'ay'

function pigLatin(word) {

  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let isVowel = 0;

  if ( vowels.includes( word[isVowel] ) ) {
    return word + 'way';
  } else {
    for ( let consonant of word ) {
      if ( vowels.includes(consonant) ) {
        isVowel = word.indexOf(consonant);
        // console.log(isVowel);
        break;
      }
    }
    const frstPart = word.slice(isVowel);
    // console.log(frstPart);
    const scnPart = word.slice(0, isVowel);
    // console.log(scnPart);
    return `${frstPart}${scnPart}ay`;
  }

}

console.log(pigLatin('javascript'));