const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [num, arr] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((item) => item.split(" ").map((item) => +item));

const [N, M] = num;

arr.sort((a, b) => a - b);

const check = (num) => {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            sum += arr[i] - num;
        }

        if (sum >= M) return true;
    }

    return false;
};

const solution = () => {
    let low = 0;
    let high = arr.at(-1);
    let ans = 0;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (check(mid)) {
            low = mid + 1;
            ans = mid;
        } else {
            high = mid - 1;
        }
    }
    console.log(ans);
};

solution();
