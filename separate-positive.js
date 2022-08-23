// input: array of non-zero ints.
// returns: all positive ints on left, all negative ints or right. Non-sorted. Must be same array passed in. Not a copy
function separatePositive(intArray) {
    let left = 0;
    let right = intArray.length - 1;

    while (left <= right) {
        if (intArray[left] < 0) {
            let val = intArray.splice(left, 1);
            intArray.push(val);
        } else left++;

        if (intArray[right] > 0) {
            let val = intArray.splice(right, 1);
            intArray.unshift(val);
        } else right--;
    }

    return intArray;

}
module.exports = { separatePositive };