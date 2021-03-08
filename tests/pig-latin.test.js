const { vowels, normalize, firstLetterIsVowel, getConsonants, pigLatin } = require('../pig-latin');
const { vowelStartingWords, nonVowelStartingWords } = require("./utils");

const MIXED_CASE = "mIXeD_CaSe";

describe('Testing input normalization', () => {
  it('Should reject non string parameters', () => {
    expect(() => normalize(1000)).toThrow();
  });
  
  it('Should normalize strings into lower case characters', () => {
    expect(normalize(MIXED_CASE)).toEqual("mixed_case");
  });

  it("Should discard leading spaces", () => {
    expect(normalize("    " + MIXED_CASE)).toEqual("mixed_case");
  });

  it("Should discard trailing spaces", () => {
    expect(normalize(MIXED_CASE + "  ")).toEqual("mixed_case");
  });

  it("Should trim input", () => {
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
    normalizedWords.forEach(word => {
      expect(firstLetterIsVowel(word)).toBeDefined();
      expect(typeof firstLetterIsVowel(word)).toStrictEqual('boolean'); 
      expect(firstLetterIsVowel(word)).toStrictEqual(true);
    });
  });
  
  it('should not start with vowel', () => {
    const normalizedWords = nonVowelStartingWords.map(normalize);
    normalizedWords.forEach(word => {
      expect(firstLetterIsVowel(word)).toBeDefined();
      expect(typeof firstLetterIsVowel(word)).toStrictEqual('boolean');
      expect(firstLetterIsVowel(word)).toStrictEqual(false);
    });
  });
});

describe('Validate word starting with no vowel', () => {
  it('should start with no vowel', () => {
    const normalizedWords = nonVowelStartingWords.map(normalize);
    normalizedWords.forEach(word => {
      const getConsonantsCheck = getConsonants(word);
      const { 
        firstLetter,
        firstLetterIsConsonant,
        secondLetter,
        secondLetterIsConsonant,
      } = getConsonantsCheck;
      expect(getConsonantsCheck).toBeDefined();
      expect(typeof getConsonantsCheck).toStrictEqual('object');
      expect(firstLetter).toBeDefined();
      expect(firstLetterIsConsonant).toBeDefined();
      expect(secondLetter).toBeDefined();
      expect(secondLetterIsConsonant).toBeDefined();
    });
  });
});