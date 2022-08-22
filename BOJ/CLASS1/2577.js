const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(number) {
    const res =
        "" +
        number.reduce((sum, currNum) => {
            return sum * Number(currNum);
        }, 1);

    const arr = Array.from({ length: 10 }, () => 0);

    for (var i = 0, resLen = res.length; i < resLen; i++) {
        arr[res[i]]++;
    }

    for (var i = 0, arrLen = arr.length; i < arrLen; i++) {
        console.log(arr[i]);
    }
}

solution(input);
