function narcissistic(param) {
    var splitDigit = param.toString().split('');
    var lengthDigit = splitDigit.length;
    var total = 0;
    splitDigit.forEach(function (i) { return total += Math.pow(i, lengthDigit); });
    if (param == total)
        return true;
    else
        return false;
}
console.log('153 :', narcissistic(153));
console.log('111 :', narcissistic(111));
console.log('1634 :', narcissistic(1634));
