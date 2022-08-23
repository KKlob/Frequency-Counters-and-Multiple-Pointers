// inputs: array of ints, a target sum
// find number of pairs of ints in array whose sum is equal to target sum
// assume no duplicate values in array
// returns: num of pairs that add to target
function countPairs(intArray, target) {
    let count = 0;
    intArray.forEach(int => {
        let dif = target - int;
        if (intArray.includes(dif) && dif !== int) {
            count++;
        }
    });

    return count / 2;

}

module.exports = { countPairs }