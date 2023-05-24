const lonelyInteger = (arr) => {
  let results = [];
  const uniqueValues = arr.filter((v, i, a) => a.indexOf(v) == i);

  uniqueValues.map((uElement) => {
    let accumulator = 0;

    arr.map((aElement) => {
      if (uElement == aElement) accumulator += 1;
    });

    results.push(accumulator);
  });

  const uniqueValueIndex = results.indexOf(1);
  console.log(uniqueValues[uniqueValueIndex]);
};

lonelyInteger([1, 2, 3, 4, 3, 2, 1]);

// The solution above was what I came up with when faced with that challenge.
// Then, I found another solution, I think it's a very elegant solution.

// const lonelyInteger = (arr) => arr.reduce((a, b) => a ^ b, 0);
// const array = [1, 2, 3, 4, 3, 2, 1];
// console.log(lonelyInteger(array));

// To console log each iteration (in order get a deep understanding of how it works) of the reduce() method in the lonelyInteger function, you can modify the code as follows:

// const lonelyInteger = (arr) =>
//   arr.reduce((a, b, index) => {
//     const result = a ^ b;
//     console.log(`Iteration ${index}: a = ${a}, b = ${b}, result = ${result}`);
//     return result;
//   }, 0);

// lonelyInteger([1, 2, 3, 4, 3, 2, 1]);
