// 1) Remove the first 2 letters of a string
const removeFirstTwo = (str) => str.slice(2);

// 2) Get the last 2 letters of a string
const getLastTwo = (str) => str.slice(-2);

// 3) Capitalize the first 2 letters of a string
const capitalizeFirstTwo = (str) => {
  const firstTwo = str.slice(0, 2).toUpperCase();
  const rest = str.slice(2);
  return firstTwo + rest;
};

// 3) ver 2
// `str` here is just the input string you pass to the function.
// For example: capitalizeFirstTwoAgain("hello") -> str is "hello".
const capitalizeFirstTwoAgain = (str) => capitalizeFirstTwo(str);

// Example usages (optional)
// console.log(removeFirstTwo("hello"));      // "llo"
// console.log(getLastTwo("hello"));          // "lo"
// console.log(capitalizeFirstTwo("hello"));  // "HEllo"
