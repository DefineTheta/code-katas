const DNAStrand = (dna) => {
  return dna.split('').reduce((complement, c) => {
    if (c === 'A') return `${complement}T`;
    if (c === 'T') return `${complement}A`;
    if (c === 'G') return `${complement}C`;

    return `${complement}G`;
  }, '');
};

module.exports = DNAStrand;
