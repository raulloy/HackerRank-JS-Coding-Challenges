const findMedian = (arr) => {
  const orderedArray = arr.sort((a, b) => a - b);

  const arrayLength = orderedArray.length;
  const middleElements = (arrayLength - 1) / 2;

  const firstElements = orderedArray.splice(0, middleElements);
  const lastElements = orderedArray.splice(1, middleElements);

  console.log(firstElements);
  console.log(lastElements);
  console.log(orderedArray[0]);

  return orderedArray[0];
};

const arr = [5, 3, 1, 2, 4];
// const arr = [0, 1, 2, 4, 6, 5, 3];
findMedian(arr);
