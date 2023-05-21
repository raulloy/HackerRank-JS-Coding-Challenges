/* 
The "plusMinus" function takes an array (arr) as its input. The goal of this function is to calculate and display the ratios of positive, negative, and zero elements in the array.
These ratios are then printed to the console using console.log, resulting in the following output:

0.600000
0.200000
0.200000

So, the output indicates that 60% of the elements in the array are positive, 20% are negative, and 20% are zero.
*/

const plusMinus = (arr) => {
  const positiveItems = arr.filter((element) => element > 0);
  const negativeItems = arr.filter((element) => element < 0);
  const zeroItems = arr.filter((element) => element === 0);

  console.log((positiveItems.length / arr.length).toFixed(6));
  console.log((negativeItems.length / arr.length).toFixed(6));
  console.log((zeroItems.length / arr.length).toFixed(6));
};

plusMinus([1, 2, 0, 3, -4]);
