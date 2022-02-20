/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
    const height = grid.length;
    const width = grid[0].length;
    const n = height * width;

    const diff = k % n

    const plain = new Array(height * width + diff);

    for (let h = 0; h < height; h++) {
        for (let w = 0; w < width; w++) {
            plain[h * width + w + diff] = grid[h][w];
        }
    }

    for (let i = 0; i < diff; i++) {
        plain[i] = plain[n + i];
    }

    for (let h = 0; h < height; h++) {
        for (let w = 0; w < width; w++) {
            grid[h][w] = plain[h * width + w];
        }
    }

    return grid
};

console.log(shiftGrid(
    [
        [1, 2],
        [3, 4],
    ],
    1
))

console.log(shiftGrid(
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ],
    1
))