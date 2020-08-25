const DNAStrand = require('./complementary-dna');

test('String AAAA is', () => {
  expect(DNAStrand('AAAA')).toBe('TTTT');
});
test('String ATTGC is', () => {
  expect(DNAStrand('ATTGC')).toBe('TAACG');
});
test('String GTAT is', () => {
  expect(DNAStrand('GTAT')).toBe('CATA');
});
