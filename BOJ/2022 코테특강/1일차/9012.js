const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const isCheck = (data) => {
    const pairData = data === ")" ? "(" : "[";
    const lastStackData = stack.pop();

    if (lastStackData === pairData) {
        stack.push(pairData === "(" ? 2 : 3);
        return true;
    }

    if (typeof lastStackData === "number") {
        let num = lastStackData;

        while (stack.length) {
            const lastStackData = stack.pop();

            if (lastStackData === pairData) {
                stack.push(num * (pairData === "(" ? 2 : 3));
                return true;
            } else if (typeof lastStackData === "number") {
                num += lastStackData;
            } else {
                return false;
            }
        }
    }
    return false;
};

function solution(N, input) {
    let i, check;
    let stack = [];
    for (let t = 0; t < N; t++) {
        stack = [];
        check = false;
        const data = input[t].split("");
        i = 0;
        while (i < data.length) {
            if (data[i] === "(") stack.push(data[i]);
            else {
                if (!stack.length) {
                    check = true;
                    break;
                }
                stack.pop();
            }
            i++;
        }

        if (check || stack.length) console.log("NO");
        else console.log("YES");
    }
}

solution(+N, input);
