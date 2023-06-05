const subarrayDivision = (s, d, m) => {
  let count = 0;
  let sum = 0;

  for (let index = 0; index < m; index++) {
    console.log('sum:', sum, 'sum+=s[i]:', (sum += s[index]));
  }

  if (sum === d) {
    count++;
  }

  for (let i = m; i < s.length; i++) {
    // console.log((sum += s[i] - s[i - m]));
    sum += s[i] - s[i - m];

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
