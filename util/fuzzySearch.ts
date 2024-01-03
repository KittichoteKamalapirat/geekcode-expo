export const fuzzySearch = (text: string, query: string) => {
  const pattern = `.*${query.split("").join(".*")}.*`;
  const regex = new RegExp(pattern);
  return regex.test(text);
};

// export const fuzzySearch2 = (query: string, word: string): boolean => {
//   query = query.toLowerCase();
//   word = word.toLowerCase();

//   let i = 0;
//   let j = 0;

//   while (i < query.length && j < word.length) {
//     if (query[i] === word[j]) {
//       i++;
//     }
//     j++;
//   }

//   return i === query.length;
// };
