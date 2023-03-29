const users = [
  { userId: 1, username: "Tom", attributes: ["Nice", "Cute"] },
  { userId: 2, username: "Mike", attributes: ["Lovely"] },
  { userId: 3, username: "Nick", attributes: ["Nice", "Cool"] },
];

const newArray= user.map(user => user.attributes).flat();
console.log('map - flat',newArray);

const flatMapArray = users.flatMap(user => user.attributes);
console.log("flatMapArray",flatMapArray);


const calendars = {
  primaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "appointment 1",
    },
    {
      startDate: new Date(2021, 1, 1, 17),
      endDate: new Date(2021, 1, 1, 18),
      title: "appointment 2",
    },
  ],
  secondaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 12),
      endDate: new Date(2021, 1, 1, 12, 30),
      title: "appointment 2",
    },
    {
      startDate: new Date(2021, 1, 1, 9),
      endDate: new Date(2021, 1, 1, 10),
      title: "appointment 4",
    },
  ],
};

const flatMapObject = Object.values(calendars).flatMap(item => {
  return item.map(date => date.startDate);
});
console.log("flatMapObject", flatMapObject);