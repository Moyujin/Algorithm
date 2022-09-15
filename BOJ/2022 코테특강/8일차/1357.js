const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [...arr] = fs.readFileSync(filePath).toString().trim().split(" ");

const rev = (num) => {
    return num.split("").reduce((acc, curr) => curr + acc);
};

const solution = (arr) => {
    let [x, y] = arr;

    console.log(Number(rev(`${Number(rev(x)) + Number(rev(y))}`)));
};

solution(arr);
