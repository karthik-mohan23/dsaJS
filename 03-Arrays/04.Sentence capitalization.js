const sentenceCapitalize = (str) => {
  const strArr = str.toLowerCase().split(" ");
  strArr.forEach(
    (word, i) => (strArr[i] = word[0].toUpperCase() + word.substr(1))
  );
  console.log(strArr);
  return strArr.join(" ");
};

console.log(sentenceCapitalize("hello world "));
