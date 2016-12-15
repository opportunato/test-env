import { should } from 'chai';
import { describe, it } from 'mocha';

should();

const fibonacci = (n) => {
  return 0;
};

describe('selection fibonacci', function() {
  it('should return correct number for 0', () => {
    fibonacci(0).should.eql(0);
  });

  it('should return correct number for 5', () => {
    fibonacci(5).should.eql(5);
  });
});
