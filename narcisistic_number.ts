
function narcissistic(param : number){
    let splitDigit = param.toString().split('');

    let lengthDigit = splitDigit.length;
    
    let total = 0;
    splitDigit.forEach( (i:any) => total += Math.pow(i,lengthDigit));

    if (param == total)
        return true;
    else 
        return false;
}

console.log('153 :', narcissistic(153));
console.log('111 :', narcissistic(111));
console.log('1634 :', narcissistic(1634));
