const numbers = [1,2,3,4,5];

let validation = false;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element % 2 === 0) {
    validation = true;
    break;
  }
}
console.log(validation);

const answer = numbers.some( (item) => item % 2 === 0 );
console.log(answer);

const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zul",
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
  {
    customerName: "Nicolas",
    total: 2322,
    delivered: false,
  },
];

const answerOne = orders.some( item => item.delivered);
console.log(answerOne);

const dates = [
  {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: "work appointment ",
  },
  {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: "appointment with my boss",
  },
  {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    title: "dinner",
  },
];

const newAppointment = {
  startDate: new Date(2021, 1, 1, 8),
  endDate: new Date(2021, 1, 1, 9, 30),
};

const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

const isOverLap = (newDate) => {
  return dates.some( date => {
    return areIntervalsOverlapping(
    {star: date.startDate, end: date.endDate},
    {star: newDate.startDate, end: newDate.endDate},
    )
  })
}

console.log('isOverLap', isOverLap(newAppointment));