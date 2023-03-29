//ordered according to the ascii code
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort()
console.log(months);

const numbers = [1, 30, 4, 21, 100000];
numbers.sort( (a,b) => a - b ); //ascending order
console.log(numbers);

const words = ['reservation', 'premier', 'communicate', 'café', 'adieu', 'éclair', 'banana'];
words.sort( (a,b) => a.localeCompare(b));//old browser 
console.log(words);

const orders = [
    {
      customerName: "Nicolas",
      total: 600,
      delivered: true,
    },
    {
      customerName: "Zul",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 1840,
      delivered: true,
    },
    {
      customerName: "Valentin",
      total: 240,
      delivered: true,
    },
  ];
  orders.sort((a,b) => a.total - b.total);
  console.log(orders);