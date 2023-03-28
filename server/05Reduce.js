const totals = [1,2,3,4,5,6,7,8,9];

let totalAmount = 0;
for (let index = 0; index < totals.length; index++) {
  const element = totals[index];
  totalAmount = totalAmount + element;
}

console.log(totalAmount);

//REDUCE
const amount = totals.reduce( (accumulator, currentValue) => accumulator + currentValue, totalAmount);// total amount can start with any number or including objects
console.log(amount);