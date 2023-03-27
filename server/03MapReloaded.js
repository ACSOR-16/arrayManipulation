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

const rta = orders.map(item => item.total);
console.log(rta);

// creates a new array but also modifies the original
const rta2 = orders.map( (item) => {
  item.tax = 0.29
  return item;
})
console.log(rta2);

//correct way to do it
const rta3 = orders.map( (item) => {
  return {
    ...item,
    tax: 0.19,
  };
});
console.log(rta3);