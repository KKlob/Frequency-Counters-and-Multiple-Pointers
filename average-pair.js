// input is sorted array of ints and target average.
// because input is all ints, if target averarge % 0.5 !== 0 return false
function averagePair(intArray, tAvg) {
    // cover base cases
    // tAvg must be either an int or a float with 0.5 increment.
    if (tAvg % 0.5 !== 0) return false;

    //if intArray is empty, return false
    if (intArray.length === 0) return false;

    let left = 0;
    let right = intArray.length - 1;

    while (left < right) {
        let intAvg = (intArray[left] + intArray[right]) / 2;
        if (intAvg === tAvg) return true;
        if (intAvg > tAvg) right--;
        if (intAvg < tAvg) left++;
    }
    return false;
}

module.exports = { averagePair };