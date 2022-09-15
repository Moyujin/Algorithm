const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let stdin = fs.readFileSync(filePath).toString().trim().split("\n");

const input = (() => {
    let line = 0;
    return () => stdin[line++].split(" ").map((item) => +item);
})();

const BFS = (arr, Y, X, point) => {
    const queue = [];
    queue.push([point, point]);
    arr[point][point] = 1;

    let dy = [1, -1, 0, 0];
    let dx = [0, 0, 1, -1];

    while (queue.length) {
        let node = queue.shift();
        let [y, x] = node;

        for (let i = 0; i < 4; i++) {
            let nY = dy[i] + y;
            let nX = dx[i] + x;

            if (nY > 1000 || nX > 1000 || nY < 0 || nX < 0) continue;

            if (arr[nY][nX] !== 0) continue;
            if (nY === Y && nX === X) {
                console.log(arr[y][x]);
                return;
            }
            queue.push([nY, nX]);
            arr[nY][nX] = arr[y][x] + 1;
        }
    }
};

const solution = () => {
    const [Y, X, N] = input();
    const arr = Array.from(Array(1001), () => new Array(1001).fill(0));
    let point = Number(500);

    for (let i = 0; i < N; i++) {
        const [y, x] = input();
        arr[y + point][x + point] = 2;
    }

    BFS(arr, Y + 500, X + 500, point);
};

solution();
