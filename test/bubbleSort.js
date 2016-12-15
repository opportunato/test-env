import { should } from 'chai';
import { describe, it } from 'mocha';

should();

const sortBubble = (list, sortFunc=(x, y) => x-y) => {
  let swapped = true;

  while (swapped) {
    swapped = false;
    for (let i = 0; i < list.length - 1; i++) {
      if (sortFunc(list[i], list[i+1]) > 0) {
        [list[i], list[i+1]] = [list[i+1], list[i]];
        swapped = true;
      }
    }
  }
  return list;
};

describe('bubble sort', function() {
  it('should sort empty list', () => {
    sortBubble([]).should.eql([]);
  });

  it('should sort simple list', () => {
    sortBubble([3, 2, 1]).should.eql([1, 2, 3]);
  });

  it('should sort simple list', () => {
    sortBubble([4, 6, 5]).should.eql([4, 5, 6]);
  });

  it('should sort list with same values', () => {
    sortBubble([2, 1, 3, 2]).should.eql([1, 2, 2, 3]);
  });

  it('should sort list with same values', () => {
    sortBubble([2, 1, 3, 2, 10, 10000000, -50]).should.eql([-50, 1, 2, 2, 3, 10, 10000000]);
  });

  it('should accept function to sort elements', () => {
    sortBubble([{rank: 5}, {rank: 10}, {rank: -5}], (x, y) => x.rank-y.rank).should.eql([{rank: -5}, {rank: 5}, {rank: 10}]);
  });
});



