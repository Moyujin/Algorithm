const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input.map((item) => item.split(" ").map((i) => +i));
const select = Array(N);

let isCheck = Array.from(Array(11), () =>
    new Array(11).fill(0).map((item) => +item)
);

const check = (point) => {
    for (let i = 0; i < 5; i++) {
        let [y, x] = point[i];
        if (isCheck[y][x]) return false;
        isCheck[y][x] = 1;
    }
    return true;
};

const solution = (N, arr) => {
    let cost = 10000;
    let dy = [1, -1, 0, 0, 0];
    let dx = [0, 0, 1, -1, 0];
    const list = [];
    const list2 = [];
    const list3 = [];

    let point = Array.from(Array(3), () => new Array(5));

    for (let i = 1; i < N - 1; i++) {
        for (let j = 1; j < N - 1; j++) {
            list.push([i, j]);
        }
    }

    for (let i = 1; i < N - 1; i++) {
        for (let j = 1; j < N - 1; j++) {
            list.push([i, j]);
        }
    }

    for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
            for (let k = j + 1; k < list.length; k++) {
                list2.push([list[i], list[j], list[k]]);
            }
        }
    }

    for (let i = 0; i < list2.length; i++) {
        cnt = 0;
        for (let k = 0; k < 3; k++) {
            for (let j = 0; j < 5; j++) {
                let nY = list2[i][k][0] + dy[j];
                let nX = list2[i][k][1] + dx[j];
                point[k][j] = [nY, nX];
                console.log("k ", k, point[k]);
            }
            if (!check(point[k])) {
                isCheck = Array.from(Array(N + 1), () =>
                    new Array(N + 1).fill(0).map((item) => +item)
                );
                break;
            }
            cnt++;
        }
        if (cnt === 3) {
            let temp = 0;
            for (let y = 0; y < 3; y++) {
                for (let x = 0; x < 5; x++) {
                    temp += arr[point[y][x][0]][point[y][x][1]];
                }
            }
            if (temp < cost) cost = temp;
        }
    }
    console.log(cost);
};

solution(N, arr);
