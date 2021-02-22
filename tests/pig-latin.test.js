const { getConsonants, firstLetterIsVowel, pigLatin } = require('../pig-latin');

const words = [ {word: "arquimides", assert: "yofo" }, "citlaltepetl", "tikua", "amlo", "hala madrid", "hola"];7


 

describe("Unit tests", () => {
  describe("First word letter checks", () => {

    //expect(firstLetterIsVowel(/* test case variable * /)).toBe(true);
    //expect(firstLetterIsVowel(/* test case variable 1 * /)).toBe(true);
    //expect(firstLetterIsVowel(/* test case variable 2 * /)).toBe(true);
    // const arrayThatHasSomeTestCases = [testCase1, testCase2, testCase3, testCase_n,];
    // arrayThatHasSomeTestCases.forEach(testCase => expect(testCase).toEqual());
  });

  describe("Consonants check", () => {

  });
});

describe("Big picture", () => {
  const [ arquimides, pico, resto, malo, bestTeamEver, hola ] = words;
  expect(pigLatin(arquimides)).toEqual("")
})


test('the consonantLetters array has vowles', () => {
  expect(consonantLetters).toContain('n');
  expect(new Set(consonantLetters)).toContain('n');
});
