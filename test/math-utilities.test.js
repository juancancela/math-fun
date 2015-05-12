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