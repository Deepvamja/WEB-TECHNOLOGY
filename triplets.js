function findSmallestDifferenceTriplet(arr1, arr2, arr3) {
    let minDifference = Number.MAX_SAFE_INTEGER;
    let resultTriplet;

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            for (let k = 0; k < arr3.length; k++) {
                const maxNum = Math.max(
                    arr1[i],
                    arr2[j],
                    arr3[k]
                );
                const minNum = Math.min(
                    arr1[i],
                    arr2[j],
                    arr3[k]
                );
                const difference = maxNum - minNum;

                if (difference < minDifference) {
                    minDifference = difference;
                    resultTriplet = [
                        arr1[i],
                        arr2[j],
                        arr3[k],
                    ];
                }
            }
        }
    }

    return resultTriplet;
}

const arr1 = [1, 2, 3, 4, 7];
const arr2 = [5, 10, 12];
const arr3 = [8, 9, 11, 14];
console.log(
    findSmallestDifferenceTriplet(arr1, arr2, arr3)
);