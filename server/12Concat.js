const numbers = [1,2,3,4,5,6];
const othersNumbers = [6,7,8,9,0];

const newArray = [...elements];
for (let index = 0; index < othersNumbers.length; index++) {
  const element = othersNumbers[index];
  newArray.push(element);
}
console.log("newArray", newArray);

const concatMethod = numbers.concat(othersNumbers);
console.log('concatMethod',concatMethod);

// works only with arrays
const concatArray = [...elements, ...othersNumbers]
console.log('concatArray',concatArray);

// add to existing array
numbers.push(...othersNumbers);
