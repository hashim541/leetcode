/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const carrierfunc = (a, b, c) => {

    if(a == '0' && b == '0' && c == '0') return ['0','0']
    else if ((a == '0' && b == '0' && c == '1') || (a == '0' && b == '1' && c == '0') || (a == '1' && b == '0' && c == '0')) return ['0','1']
    else if ((a == '0' && b == '1' && c == '1') || (a == '1' && b == '1' && c == '0') || (a == '1' && b == '0' && c == '1')) return ['1','0']
    else return ["1","1"]
}

const addZeros = (len) => {
    let zeroes =''
    for(let i = 0; i < len; i++){
        zeroes+='0'
    }
    return zeroes
}

var addBinary = function(a, b) {
    const aLen = a.length
    const bLen = b.length

    if (aLen > bLen) b=addZeros(aLen-bLen)+b
    if (bLen > aLen) a=addZeros(bLen-aLen)+a

    const loop = aLen >= bLen ? aLen : bLen
    let carry = '0'
    let str = ''
    
    for(let i = loop-1; i >= 0; i--){
        let[rcarry,sum] = carrierfunc(a[i],b[i],carry)
        carry = rcarry
        str = sum+str
    }
    if(str == '0' && carry == '0') return '0'
    if(carry == '0') return str
    return carry+str
};
