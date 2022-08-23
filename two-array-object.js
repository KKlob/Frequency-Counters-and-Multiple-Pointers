// inputs: array of keys(keyArray), array of values(valArray)
// returns: object created from keys and values.
// if valArray.length < keyArray.length => rest of keys have value null
// if keyArray.length < valArray.length => ignore remaining values
function twoArrayObject(keyArray, valArray) {
    //cover base cases
    //empty keyArray
    if (!keyArray.length) return {};

    // empty valArray
    if (!valArray.length) {
        const obj = {}
        for (let key of keyArray) {
            obj[key] = null;
        }
        return obj;
    }

    //create object based on keyArray length. if valArray[ind] === undefined set value to null
    const obj = {}
    keyArray.forEach((key, i) => {
        valArray[i] ? obj[key] = valArray[i] : obj[key] = null;
    });
    return obj;
}

module.exports = { twoArrayObject };