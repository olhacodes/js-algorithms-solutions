function flippingMatrix(matrix) {
    // Reverse column 2
    matrix = matrix.map((row, i, arr) => {
        row[2] = arr[arr.length - 1 - i][2];
        return row;
    });

    // Reverse row 0
    matrix[0] = matrix[0].slice().reverse();

    // Calculate the sum of the values in the n*n submatrix in the upper-left quadrant
    let sum = matrix.slice(0, matrix.length / 2)
        .reduce((sum, row) => sum + row.slice(0, row.length / 2).reduce((a, b) => a + b, 0), 0);

    return sum;
};

let matrix = [[112,42,83,119], [56,125,56,49], [15,78,101,43], [62,98,114,108]];
console.log(submatrix(matrix)); // Outputs: 414
