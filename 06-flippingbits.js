// This solution is wrong. I don't know how to solve it yet.

const flippingBits = (n) => {
  const binaryNumber = (n >>> 0).toString(2).padStart(16, '0');
  const binaryNumberArr = Array.from(binaryNumber);

  binaryNumberArr.forEach((number, index) => {
    if (number == '0') {
      binaryNumberArr[index] = '1';
    } else {
      binaryNumberArr[index] = '0';
    }
  });

  const arrayToString = binaryNumberArr.join('');
  console.log(arrayToString);
  const convertedNumber = parseInt(arrayToString, 2);

  console.log(convertedNumber);
};

flippingBits(3);
