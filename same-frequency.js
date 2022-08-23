// inputs are two positive ints(int1, int2).
// if same frequency of digits, return true. Else return false;

function findFreq(int) {
    //builds object with keys = unique digits in int and values = frquency of digits
    const obj = {};
    for (let num of String(int)) {
        obj[num] = (obj[num] + 1) || 1;
    }
    return obj;
}

function sameFrequency(int1, int2) {

    let int1Freq = findFreq(int1);
    let int2Freq = findFreq(int2);

    //cover base cases
    //both Object.key(obj).length should be equal
    if (Object.keys(int1Freq).length !== Object.keys(int2Freq).length) return false;

    //check if each key is equal & each value for each key is equal
    for (let key of Object.keys(int1Freq)) {
        //if int2Freq does not share a key, return false
        if (!int2Freq[key]) return false;

        if (int1Freq[key] !== int2Freq[key]) return false;
    }

    return true;
}


module.exports = { sameFrequency };