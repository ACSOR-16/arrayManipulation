// returns an object or all element
const numbers = [1,2,3,4,5,6,7,8,9,0];

let verification = undefined;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element === 9) {
    verification = element;
    break;
  }
}
console.log(verification);

const verifyFind = numbers.find( item => item === 9);
console.log("verification Find",verifyFind);

const products = [
  {
    name: "Pizza",
    price: 12,
    id: '🍕'
  },
  {
    name: "Burger",
    price: 23,
    id: '🍔'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '🌭'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
];
//return an object
const verifyFindProd = products.find( item => item === "🍔");
console.log("Products Find verification",verifyFindProd);

//return the position
const verifyFindIndexProd = products.findIndex( item => item === "🍔");
console.log("products findindex verification",verifyFindProd);