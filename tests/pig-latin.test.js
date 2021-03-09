const { normalize, firstLetterIsVowel, getConsonants, pigLatin } = require('../pig-latin');
const { vowelStartingWords, nonVowelStartingWords, wordChecks } = require("./utils");

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
      expect(getConsonantsCheck).toBeTruthy();
      expect(typeof getConsonantsCheck).toStrictEqual('object');

      const { 
        firstLetter,
        firstLetterIsConsonant,
        secondLetter,
        secondLetterIsConsonant,
      } = getConsonantsCheck;
      const checkProps = [firstLetter,  firstLetterIsConsonant, secondLetter, secondLetterIsConsonant];
      checkProps.forEach(p => expect(p).toBeDefined());
      expect(typeof firstLetter).toEqual('string');
      expect(typeof firstLetterIsConsonant).toEqual('boolean');
      expect(typeof secondLetter).toEqual('string');
      expect(typeof secondLetterIsConsonant).toEqual('boolean');
    });
  });
});

describe('Test pig latin function', () => {
  it('Should handle non string parameters', () => {
    expect(() => pigLatin()).toThrow(Error);
    expect(() => pigLatin(1000)).toThrow(Error);
    expect(() => pigLatin({})).toThrow(Error);
  });

  it('Should validate pig latin translate', () => {
    wordChecks.forEach(({ word, translate }) => {
      expect(pigLatin(word)).toBeTruthy();
      expect(typeof pigLatin(word)).toEqual('string');
      expect(pigLatin(word)).toEqual(translate);
    });
  });

});