// evaluates that all elements satisfy the condition
const numbers = [1,23,45,50,55,65,70];

let verification = true;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element >= 40) {
    verification = false;
  }
}
console.log(verification);

const verificationEvery = numbers.every(item => item <= 40);
console.log("every", verificationEvery);

const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zul",
    age: 2,
  },
  {
    name: "Santiago",
    age: 18,
  },
];

const verificationAge = team.every( item => item.age <= 15);