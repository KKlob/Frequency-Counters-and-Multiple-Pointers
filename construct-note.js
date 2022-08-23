// takes a message and some letters. returns true if letters given can form message, or false if not.
// ex: constructNote('abc', 'dcba') => true
// constructNote('aa', 'abc') => false

// frequency function to get frequenecy of all letters for string passed in
function findFreq(str) {
    const freq = {};

    for (let char of str) {
        freq[char] = (freq[char] + 1) || 1;
    }
    return freq;
}

function constructNote(msg, letters) {

    let msgFreq = findFreq(msg);
    let lettersFreq = findFreq(letters);

    //cover base cases
    // mes has no letters. Auto return true
    if (Object.keys(msgFreq).length === 0) return true;
    // letters has no letters. Auto return false
    if (Object.keys(lettersFreq).length === 0) return false;

    for (let key of Object.keys(msgFreq)) {
        // if lettersFreq doesn't have a key each key in mesFreq, return false
        if (!lettersFreq[key]) return false;
        // if the frequency of key in lettersFreq is less than freq of key in mesFreq, return false;
        if (lettersFreq[key] < msgFreq[key]) return false;
    }

    // all mesFreq keys are in lettersFreq and all letterFreq values are >= mesFreq values
    return true;

}

module.exports = { constructNote };