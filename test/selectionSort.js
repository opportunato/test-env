import { should } from 'chai';
import { describe, it } from 'mocha';

should();

const selectionSort = (list, sortFunc=(x, y) => x-y) => {
  for (var i = 0; i < list.length; i++) {
    let maxI = 0;
    for (var j = 0; j < list.length - i; j++) {
      if (maxI !== j && sortFunc(list[j], list[maxI]) > 0) {
        maxI = j;
      }
    }
    [list[maxI], list[list.length - i - 1]] = [list[list.length - i - 1], list[maxI]];
  }
  return list;
};

describe('selection sort', function() {
  it('should sort empty list', () => {
    selectionSort([]).should.eql([]);
  });

  it('should sort simple list', () => {
    selectionSort([3, 2, 1]).should.eql([1, 2, 3]);
  });

  it('should sort simple list', () => {
    selectionSort([4, 6, 5]).should.eql([4, 5, 6]);
  });

  it('should sort list with same values', () => {
    selectionSort([2, 1, 3, 2]).should.eql([1, 2, 2, 3]);
  });

  it('should sort list with same values', () => {
    selectionSort([2, 1, 3, 2, 10, 10000000, -50]).should.eql([-50, 1, 2, 2, 3, 10, 10000000]);
  });

  it('should sort list with strings', () => {
    selectionSort(["string", "String", "else", "work", "strin"], (x, y) => {
      if (x.toLowerCase() > y.toLowerCase()) {
        return 1;
      } else if (x.toLowerCase() < y.toLowerCase()) {
        return -1;
      } else {
        return 0;
      }
    }).should.eql(["else", "strin", "String", "string", "work"]);
  });

  it('should accept function to sort elements', () => {
    selectionSort([{rank: 5}, {rank: 10}, {rank: -5}], (x, y) => x.rank-y.rank).should.eql([{rank: -5}, {rank: 5}, {rank: 10}]);
  });
});



