const diagonalDifference = (arr) => {
  const matrixSize = arr.length;

  const leftToRightDiagonal = arr.map((element, index) => element[index]);
  const rightToLeftDiagonal = arr.map(
    (element, index) => element[matrixSize - (index + 1)]
  );

  const d1 = leftToRightDiagonal.reduce((acc, curr) => acc + curr, 0);
  const d2 = rightToLeftDiagonal.reduce((acc, curr) => acc + curr, 0);

  const diagonalDifference = Math.abs(d1 - d2);

  console.log('matrixSize', matrixSize);
  console.log('Diagonal absolute difference', diagonalDifference);
};

const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

diagonalDifference(array);

// This is the solution for when the array is flat and must first be converted to an array
const diagonalDifferenceAlt = (arr) => {
  const arrLength = arr.length;
  const matrixSize = Math.sqrt(arrLength);

  //   const convertToMatrix = [];
  //   for (let i = 0; i < arr.length; i += matrixSize) {
  //     convertToMatrix.push(arr.slice(i, i + matrixSize));
  //   }

  //   Array.from(object, mapFunction, thisValue)
  const convertToMatrix = Array.from(arr, () => arr.splice(0, matrixSize));

  const leftToRightDiagonal = convertToMatrix.map(
    (element, index) => element[index]
  );
  const rightToLeftDiagonal = convertToMatrix.map(
    (element, index) => element[matrixSize - (index + 1)]
  );

  const d1 = leftToRightDiagonal.reduce((acc, curr) => acc + curr, 0);
  const d2 = rightToLeftDiagonal.reduce((acc, curr) => acc + curr, 0);

  const diagonalDifference = Math.abs(d1 - d2);

  console.log(convertToMatrix);
  console.log('left-to-right diagonal', leftToRightDiagonal);
  console.log('right to left diagonal', rightToLeftDiagonal);
  console.log('Diagonal absolute difference', diagonalDifference);
};

// const array_1 = [68, 23, 95, 77, 42, 12, 85, 19, 36, 47, 58, 30, 71, 86, 15, 64];
// const array_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// diagonalDifferenceAlt(array_2);

// The usage of _ as a placeholder is a convention to indicate that the value of the parameter is intentionally ignored.
// The purpose of using _ in this context is to signal to other developers that the parameter is intentionally ignored and not used within the function's logic.
// const convertToMatrix = Array.from(arr, _ => arr.splice(0, matrixSize));
