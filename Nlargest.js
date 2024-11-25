let largArr = new Array();
let arr = new Array(93, 17, 56, 91,
    98, 33, 9, 38, 55, 78, 29, 81, 60);

function largest() {
    largArr[0] = 0;
    largArr[1] = 0;
    largArr[2] = 0;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] > largArr[0]) {
            largArr[0] = arr[i];

        }
    }

    for (i = 0; i < arr.length; i++) {
        if (arr[i] > largArr[1]
            && arr[i] < largArr[0]) {
            largArr[1] = arr[i];

        }
    }

    for (i = 0; i < arr.length; i++) {
        if (arr[i] > largArr[2]
            && arr[i] < largArr[1]) {
            largArr[2] = arr[i];
        }
    }

    console.log(largArr[0]);
    console.log(largArr[1]);
    console.log(largArr[2]);
}

largest();