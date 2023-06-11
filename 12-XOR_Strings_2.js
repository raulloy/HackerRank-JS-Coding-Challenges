const strings_xor = (s, t) => {
  const sArray = s.split();
  const tArray = t.split();

  const result = sArray.map((s, index) => {
    return s ^ tArray[index];
  });

  console.log(result[0].toString());
};

strings_xor('10101', '00101');
