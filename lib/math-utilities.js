/**
 * greatest common divisor between integers x and y
 * @param x value x
 * @param y value y
 */
function gcd(x, y) {
    return (!y) ? x : gcd(y, x % y);
}

/**
 * @param x number
 * @returns {*} array containing divisors of a given number x
 */
function divisors(x){
    if(!x) return null;
    if(x == 1) return [1];
    var divisors = [1];
    for (var i = 2; i <= x; i++) {
        if (x % i == 0)
            divisors.push(i);
    }
    return divisors;
}

module.exports = {
    gcd : gcd,
    divisors : divisors
};