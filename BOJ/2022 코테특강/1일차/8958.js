const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let idx = 0;
const T = +input[idx++];
const data = [];

for (var i = 1; i <= T; i++) {
    let N = +input[idx++];
    const arr = [];
    for (var k = 0; k < N; k++) {
        arr.push(input[idx++]);
    }

    const testData = {
        N: N,
        arr: arr,
    };
    data.push(testData);
}

function solution(N, data) {
    for (var i = 0; i < N; i++) {
        let arr = data[i].arr.sort();
        console.log(arr);

        let check = true;
        for (var n = 0; n < arr.length - 1; n++) {
            if (arr[n + 1].startsWith(arr[n])) {
                check = false;
                break;
            }
        }

        if (check) console.log("YES");
        else console.log("NO");
    }
}

solution(T, data);

foo = "test";
