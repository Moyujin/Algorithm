const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [T, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

input = input.map((item) => item.split(" ").map((item) => +item));
const datas = [];

for (let i = 0; i < T; i++) {
    const [N, M] = input[i * 2];
    const arr = input[i * 2 + 1];
    datas.push({ N: N, M: M, priority: arr });
}

function solution(T, datas) {
    for (let idx = 0; idx < T; idx++) {
        const data = datas[idx];
        const { N, M, priority } = data;
        let cnt = 0;

        const arr = Array.from({ length: N }, (v, i) => i);
        while (priority.length) {
            let check = false;

            for (let i = 1; i < N; i++) {
                if (priority[0] < priority[i]) {
                    priority.push(priority.shift());
                    arr.push(arr.shift());
                    check = true;
                    break;
                }
            }
            if (!check) {
                priority.shift();
                let m = arr.shift();
                cnt++;

                if (m === M) {
                    console.log(cnt);
                    break;
                }
            }
        }
    }
}

solution(T, datas);
