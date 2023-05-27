const pangrams = (s) => {
  const trimmedStr = s.toLowerCase().split(' ').join('');

  const strLength = trimmedStr
    // Convert to an array
    .split('')
    // Get unique values and length
    .filter((v, i, a) => a.indexOf(v) == i).length;

  if (strLength === 26) {
    return 'pangram';
  } else {
    return 'not pangram';
  }
};

console.log(
  pangrams('We promptly judged antique ivory buckles for the next prize')
);
console.log(pangrams('We promptly judged antique ivory buckles for the prize'));
console.log(pangrams('qmExzBIJmdELxyOFWv LOCmefk TwPhargKSPEqSxzveiun'));
