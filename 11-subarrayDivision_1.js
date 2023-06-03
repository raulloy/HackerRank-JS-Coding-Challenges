const subarrayDivision = (s, d, m) => {
  let count = 0;

  // Check if the total number of squares is less than the birth month
  if (s.length < m) {
    return count;
  }
  console.log('array length:', s.length);

  let sum = 0;

  // Initialize the sum with the first m squares
  for (let i = 0; i < m; i++) {
    console.log(sum, s[i], (sum += s[i]));
    sum += s[i];
  }

  console.log('sum', sum);

  // Check the first contiguous segment
  if (sum === d) {
    count++;
  }

  // Slide the window over the remaining squares
  for (let i = m; i < s.length; i++) {
    // Add the current square and subtract the square at the beginning of the window
    sum += s[i] - s[i - m];

    // Check if the sum matches the birth day
    if (sum === d) {
      count++;
    }
  }

  return count;
};

// const s = [2, 2, 1, 3, 2];
// const d = 4;
// const m = 2;
const s = [1, 2, 1, 3, 2];
const d = 5;
const m = 3;

const result = subarrayDivision(s, d, m);
console.log(result);
