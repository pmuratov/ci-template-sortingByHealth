import sorter from "../sortByHealthList.js";

test("should sort by health, descending", () => {
  let charsList = [
    { name: "мечник", health: 10 },
    { name: "маг", health: 100 },
    { name: "бард", health: 80 },
    { name: "варвар", health: 40 },
    { name: "рыцарь", health: 90 },
    { name: "монах", health: 60 },
    { name: "тихоходка", health: 79 },
    { name: "покемон", health: 99 },
    { name: "голый землекоп", health: 9 },
  ];

  let expected = [
    { name: "маг", health: 100 },
    { name: "покемон", health: 99 },
    { name: "рыцарь", health: 90 },
    { name: "бард", health: 80 },
    { name: "тихоходка", health: 79 },
    { name: "монах", health: 60 },
    { name: "варвар", health: 40 },
    { name: "мечник", health: 10 },
    { name: "голый землекоп", health: 9 },
  ];

  expect(sorter(charsList)).toEqual(expected);
});
