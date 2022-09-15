const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input.map((item) => Number(item));
const res = [];
const mergeSort = (arr, l, r) => {
    if (l == r) return;

    let mid = parseInt((l + r) / 2);
    mergeSort(arr, l, mid);
    mergeSort(arr, mid + 1, r);

    let left = l;
    let right = mid + 1;
    let temp = [];

    while (left <= mid && right <= r) {
        if (arr[left] <= arr[right]) {
            temp.push(arr[left]);
            left++;
        } else {
            temp.push(arr[right]);
            right++;
        }
    }

    while (left <= mid) {
        temp.push(arr[left++]);
    }

    while (right <= r) {
        temp.push(arr[right++]);
    }

    for (let i = 0; i < temp.length; i++) {
        arr[l + i] = temp[i];
    }
};

mergeSort(arr, 0, arr.length - 1);

console.log(arr.join("\n"));
