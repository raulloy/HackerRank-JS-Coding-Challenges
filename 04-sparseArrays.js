const matchingStrings = (strings, queries) => {
  let results = [];

  queries.map((qElement) => {
    let accumulator = 0;

    strings.map((sElement) => {
      if (qElement == sElement) accumulator += 1;
    });

    results.push(accumulator);
  });
  console.log(results);

  return results;
};

const strings = ['ab', 'ab', 'abc'];
const queries = ['ab', 'abc', 'bc'];

matchingStrings(strings, queries);
