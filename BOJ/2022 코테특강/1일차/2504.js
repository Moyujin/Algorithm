const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("");

let stack = [];

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

function solution(input) {
    let i = 0;
    do {
        const data = input[i];

        if (data === "(" || data === "[") stack.push(data);
        else {
            if (!isCheck(data)) {
                console.log(0);
                break;
            }
        }
        i++;

        if (i === input.length) {
            if (
                stack.length > 0 &&
                !stack.find((element) => typeof element === "string")
            )
                console.log(stack.reduce((acc, curr) => acc + curr));
            else console.log(0);
        }
    } while (i < input.length);
}

solution(input);
