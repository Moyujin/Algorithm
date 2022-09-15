const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, arr] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((item) => item.split(" ").map((item) => +item));

N = N[0];
const res = [];
const count = Array.from(Array(N + 1), () => new Array(0));

const lowerBound = (num, idx) => {
    let low = 0;
    let high = res.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (num <= res[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    res[low] = num;
    count[low].push(idx);
};

const solution = (N, arr) => {
    arr.map((item, idx) => lowerBound(item, idx));
    const cnt = [];

    const len = res.length - 1;

    cnt[len] = count[len].at(-1);
    for (let i = len; i > 0; i--) {
        for (let j = count[i - 1].length - 1; j >= 0; j--) {
            if (count[i - 1][j] < cnt[i]) {
                cnt[i - 1] = count[i - 1][j];
                break;
            }
        }
    }

    console.log(res.length);
    for (let i = 0; i < cnt.length; i++) {
        cnt[i] = arr[cnt[i]];
    }
    console.log(cnt.join(" "));
};

solution(N, arr);
