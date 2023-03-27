const words = ['spray', 'limit', 'elite', 'exuberant'];
 
const newArray = [];
for (let index = 0; index < words.length; index++) {
  const element = words[index];
  if (element.length >= 6) {
    newArray.push(element);
  }
}
console.log('newArray', newArray);
console.log('original', words);

const answer = words.filter( item => item.length >= 6);
console.log(answer);

const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Carmen",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentin",
    total: 240,
    delivered: true,
  },
]
// filter according to condition
const answer2 = orders.filter( item => item.delivered && item.total >= 150);
console.log(answer2);

// search
const search = (query) => {
  return orders.filter(item => {
    return item.customerName.includes(query);
  });
};

console.log(search('San')); //filter all values with that string