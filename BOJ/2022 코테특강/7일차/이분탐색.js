const upperBound = (arr, v) => {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[i] > v) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return low;
};

const lowerBound = (arr, v) => {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[i] >= v) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return low;
};

const binarySearch = (num) => {
    let low, high;
    low = 0;
    high = nArr.length - 1;
    let ans = 0;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (nArr[mid] > num) {
            high = mid - 1;
        } else if (nArr[mid] < num) {
            low = mid + 1;
        } else {
            ans = 1;
            break;
        }
    }
    arr.push(ans);
};
