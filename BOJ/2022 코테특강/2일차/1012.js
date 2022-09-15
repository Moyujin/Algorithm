const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [T, ...stdin] = fs.readFileSync(filePath).toString().trim().split("\n");

const input = (() => {
    let line = 0;
    return () => stdin[line++].split(" ").map((item) => +item);
})();

const BFS = (map, y, x, M, N) => {
    const queue = [];
    queue.push([y, x]);

    let dy = [1, -1, 0, 0];
    let dx = [0, 0, 1, -1];

    map[y][x] = 0;

    while (queue.length) {
        let point = queue.shift();
        let [Y, X] = point;

        for (let i = 0; i < 4; i++) {
            nY = Y + dy[i];
            nX = X + dx[i];

            if (nY < 0 || nX < 0 || nY >= M || nX >= N) continue;

            if (map[nY][nX] === 1) {
                queue.push([nY, nX]);
                map[nY][nX] = 0;
            }
        }
    }
};

const solution = (T) => {
    T = +T;

    for (let idx = 0; idx < T; idx++) {
        let [M, N, K] = input();
        let cnt = 0;

        const map = Array.from(Array(M), () => new Array(N).fill(0));

        for (let k = 0; k < K; k++) {
            let [Y, X] = input();
            map[Y][X] = 1;
        }

        for (let y = 0; y < M; y++) {
            for (let x = 0; x < N; x++) {
                if (map[y][x] === 1) {
                    BFS(map, y, x, M, N);
                    cnt++;
                }
            }
        }

        console.log(cnt);
    }
};

solution(T);
