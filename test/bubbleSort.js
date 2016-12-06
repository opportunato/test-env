import { should } from 'chai';
import { describe, it } from 'mocha';

should();

const sortBubble = (list) => {
  return list;
};

describe('bubble sort', function() {
  it('should sort empty list', () => {
    sortBubble([]).should.eql([]);
  });

  it('should sort simple list', () => {
    sortBubble([3, 2, 1]).should.eql([1, 2, 3]);
  });

  it('should sort list with same values', () => {
    sortBubble([2, 1, 3, 2]).should.eql([1, 2, 2, 3]);
  });
});
