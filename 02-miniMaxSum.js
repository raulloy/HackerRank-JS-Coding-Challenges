const miniMaxSum = (arr) => {
  const minValue = Math.min.apply(Math, arr);
  const maxValue = Math.max.apply(Math, arr);

  if (minValue === maxValue) {
    const uniqueValueMinArr = arr.slice(0, 4);
    const uniqueValueMaxArr = arr.slice(1, 5);

    const arrMinSum = uniqueValueMinArr.reduce((acc, cur) => acc + cur, 0);
    const arrMaxSum = uniqueValueMaxArr.reduce((acc, cur) => acc + cur, 0);
    console.log(`${arrMinSum} ${arrMaxSum}`);
  } else {
    const minSumArr = arr.filter((element) => element != maxValue);
    const maxSumArr = arr.filter((element) => element != minValue);

    const minSum = minSumArr.reduce((acc, cur) => acc + cur, 0);
    const maxSum = maxSumArr.reduce((acc, cur) => acc + cur, 0);

    console.log(`${minSum} ${maxSum}`);
  }
};

const array = [1, 3, 5, 7, 9];
miniMaxSum(array);
