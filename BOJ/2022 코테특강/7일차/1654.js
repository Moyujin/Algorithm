const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [num, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const check = (N, M, mid, arr) => {
    let cnt = 0;

    for (let i = 0; i < N; i++) {
        cnt += Math.floor(arr[i] / mid);
    }

    if (cnt < M) return false;
    return true;
};

const binarySearch = (N, M, arr) => {
    let low = 0;
    let high = arr.at(-1);
    let ans = 0;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (check(N, M, mid, arr)) {
            low = mid + 1;
            ans = mid;
        } else {
            high = mid - 1;
        }
    }
    return ans;
};

const solution = (num, arr) => {
    let [N, M] = num.split(" ").map((item) => +item);
    arr = arr.map((item) => +item);
    arr.sort((a, b) => a - b);

    console.log(binarySearch(N, M, arr));
};

solution(num, arr);
