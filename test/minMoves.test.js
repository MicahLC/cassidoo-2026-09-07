const { expect } = require('chai');
const { minMoves } = require('../src/minMoves');

describe('minMoves', () => {
  it('handles email example #1', () => {
    expect(minMoves("8051", "1199")).to.equal(10);
  });

  it('handles email example #2', () => {
    expect(minMoves("000", "555")).to.equal(15);
  });

  it('handles email example #3', () => {
    expect(minMoves("109", "990")).to.equal(4);
  });

  it('handles the zero case', () => {
    expect(minMoves("333", "333")).to.equal(0);
  });

  it('handles cases where the inputs are different lengths', () => {
    expect(minMoves("12", "123")).to.equal(-1);
    expect(minMoves("12", "1")).to.equal(-1);
  });
});
