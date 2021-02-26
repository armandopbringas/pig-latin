const { firstLetterIsVowel, getConsonants, normalize, pigLatin } = require('../pig-latin');
const { vowelStartingWords, nonVowelStartingWords } = require("./utils");

const MIXED_CASE = "mIXeD_CaSe";

describe('Testing input normalization', () => {
  
  test('Should reject non string parameters', () => {
    expect(() => normalize(1000)).toThrow();
  });
  
  test('Should normalize strings into lower case characters', () => {
    expect(normalize(MIXED_CASE)).toEqual("mixed_case");
  });

  test("Should discard leading spaces", () => {
    expect(normalize("    " + MIXED_CASE)).toEqual("mixed_case");
  });

  test("Should discard trailing spaces", () => {
    expect(normalize(MIXED_CASE + "  ")).toEqual("mixed_case");
  });

  test("Should trim input", () => {
    expect(normalize(" " + MIXED_CASE + "  ")).toEqual("mixed_case");
  })
})

describe('Testing firstLetterIsVowel function', () => {
  it('Should handle non string parameters', () => {
    expect(() => firstLetterIsVowel()).toThrow(Error);
    expect(() => firstLetterIsVowel(1000)).toThrow(Error);
    expect(() => firstLetterIsVowel({})).toThrow(Error);
  });
  
  it('Correctly validate vowel starting words', () => {
    const normalizedWords = vowelStartingWords.map(normalize);
    normalizedWords.forEach( word => {
      expect(firstLetterIsVowel(word)).toBeDefined(); 
      expect(firstLetterIsVowel(word)).toStrictEqual(true);
    });
  });
  
  it('should not start with vowel', () => {
    const normalizedWords = vowelStartingWords.map(normalize);
    expect(firstLetterIsVowel('true')).toBeFalsy();
  });
});
