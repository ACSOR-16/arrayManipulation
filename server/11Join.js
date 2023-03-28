const elements = ['fire', 'air', 'water', 'earth'];

let finalArray = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
  const element = elements[index];
  finalArray = finalArray + element + separator;
}
console.log(finalArray);

const elementsJoin = elements.join('--');
console.log(elementsJoin);

//split separate an array with elements
const title = "Array Course Manipulation";
const urlFinal = title.split(' ').join('-').toLowerCase();
console.log(urlFinal);