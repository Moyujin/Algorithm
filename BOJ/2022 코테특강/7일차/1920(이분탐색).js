const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, nArr, M, mArr] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

nArr = nArr.split(" ").map((item) => +item);
mArr = mArr.split(" ").map((item) => +item);

nArr.sort((a, b) => a - b);
const arr = [];
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

mArr.map((m) => binarySearch(m));

console.log(arr.join("\n"));
