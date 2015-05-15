var assert = require("assert");
var utils = require('../lib/math-utilities');

describe('#gcd(x,y): greatest common divisor', function () {
    it('should return 4 if x = 4 and y = 8', function () {
        assert.equal(4, utils.gcd(4,8));
    });

    it('should return the given number if both x and y are the same prime number', function () {
        assert.equal(7, utils.gcd(7,7));
        assert.equal(11, utils.gcd(11,11));
        assert.equal(1, utils.gcd(1,1));
    });
});

describe('#divisors(x): All divisors of a given number x', function () {
    it('should return null if x is null or undefined', function () {
        assert.equal(null, utils.divisors(null));
        assert.equal(null, utils.divisors(undefined));
    });

    it('should return [1] if x is 1', function () {
        assert.equal(1, utils.divisors(1)[0]);
    });

    it('should return [1,2] if x is 2', function () {
        assert.equal(1, utils.divisors(2)[0]);
        assert.equal(2, utils.divisors(2)[1]);
    });

    it('should return [1,2,4] if x is 4', function () {
        assert.equal(1, utils.divisors(4)[0]);
        assert.equal(2, utils.divisors(4)[1]);
        assert.equal(4, utils.divisors(4)[2]);
    });

    it('should return [1,2,4,5,8,10,20,40] if x is 40', function () {
        assert.equal(1, utils.divisors(40)[0]);
        assert.equal(2, utils.divisors(40)[1]);
        assert.equal(4, utils.divisors(40)[2]);
        assert.equal(5, utils.divisors(40)[3]);
        assert.equal(8, utils.divisors(40)[4]);
        assert.equal(10, utils.divisors(40)[5]);
        assert.equal(20, utils.divisors(40)[6]);
        assert.equal(40, utils.divisors(40)[7]);
    });

});