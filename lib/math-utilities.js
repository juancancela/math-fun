/**
 * greatest common divisor between integers x and y
 * @param x value x
 * @param y value y
 */
function gcd(x, y) {
    return (!y) ? x : gcd(y, x % y);
}

module.exports = {
    gcd : gcd
};