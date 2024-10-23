/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let first = 0, last = x;
    let mid;
    while (first <= last) {
        mid = first + Math.floor((last - first) / 2);
        if (mid * mid === x) return mid;
        if (mid * mid < x) first = mid + 1;
        else last = mid - 1;
    }
    return last;
};