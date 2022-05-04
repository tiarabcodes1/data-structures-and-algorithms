'use strict';

const { repeatedWord } = require('../repeatedWord');

describe('TESTING HASMAP FUNCTIONALITY', () => {
  test('should return the repeating words and a count of their occurrences', () => {
    let paragraph = 'I once had a dog. He had a bone.';
    expect(repeatedWord(paragraph)).toEqual([ 'had', 'a' ]);
  });
  test('should make sure only repeated words are returned', () => {
    let newParagraph = 'Nothing repeats.';
    expect(repeatedWord(newParagraph)).toEqual([]);
  });
  test('should return proper repeated word', () => {
    let brandNewParagraph = 'I do repeat repeat.';
    expect(repeatedWord(brandNewParagraph)).not.toEqual(['milk']);
  });
});
