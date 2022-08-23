// input: two strings
// chedcks if chars in first string form subsequence of chars in second string.
// aka check if string1 appears somewhere in string2 without order changing
// can have leters between string1 chars
function isSubsequence(string1, string2) {
    //cover base cases
    // string1 has no characters
    if (string1.length === 0) return true;

    //string2 has no characters
    if (string2.length === 0) return false;

    const s1Array = string1.split("");

    // iterate through string2 chars. if char in s1Array & s1Array.indexOf(char) !== 0 return false (out of order)
    // if char in s1Array & s1Array.indexOf(char) === 0 => s1Array.shift();
    // if s1Array.length === 0 return true;
    // if s1Array has length after iterating through string2 return false;

    for (let char of string2) {
        let isIncluded = s1Array.includes(char);
        let isFirst = (s1Array.indexOf(char) === 0);

        if (isIncluded && isFirst) s1Array.shift();
        if (s1Array.length === 0) return true;
        if (isIncluded && !isFirst) return false;
    }

    if (s1Array.length) return false;

}

module.exports = { isSubsequence };