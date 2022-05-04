'use strict';

const { describe } = require('eslint/lib/rule-tester/rule-tester');
const { treeIntersection } = require('../tree-intersection');

describe('TESTING TreeIntersection FUNCTIONALITY', () => {
  test('should return the repeating words and a count of their occurrences', () => {
    let paragraph = 'I once had a dog. He had a bone.';
    expect(treeIntersection(paragraph)).toEqual([ 'had', 'a' ]);
  });
  test('should make sure only repeated words are returned', () => {
    let newParagraph = 'Nothing repeats.';
    expect(treeIntersection(newParagraph)).toEqual([]);
  });
  test('should return proper repeated word', () => {
    let brandNewParagraph = 'I do repeat repeat.';
    expect(treeIntersection(brandNewParagraph)).not.toEqual(['milk']);
    console.log('HELLO',treeIntersection(brandNewParagraph));
  });
});
