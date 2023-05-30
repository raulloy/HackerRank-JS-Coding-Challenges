const permutingTwoArrays = (k, A, B) => {
  const aArr = A.sort((a, b) => b - a);
  const bArr = B.sort((a, b) => a - b);

  //   const permutations = aArr.flatMap((a) => {
  //     return bArr.map((b) => `a:${a}, b:${b} = ${a + b}`);
  //   });
  const permutations = aArr.map((a, i) => {
    // console.log(`${a} + ${bArr[i]} = ${a + bArr[i]}`);
    return a + bArr[i] >= k;
  });

  console.log(permutations.some((value) => value === false) ? 'NO' : 'YES');
  return permutations.some((value) => !value) ? 'NO' : 'YES';
};

permutingTwoArrays(1, [0, 1], [0, 2]);
permutingTwoArrays(10, [2, 1, 3], [7, 8, 9]);
permutingTwoArrays(5, [1, 2, 2, 1], [3, 3, 3, 4]);
