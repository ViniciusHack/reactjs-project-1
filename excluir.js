// FILTER

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const result = numbers
  .filter((number) => number % 2 == 0)
  .map((par) => par * 2)
  .reduce((ac, numbers) => (ac += numbers));

console.log(result);

const overTen = numbers.filter((number) => number > 10);

/* numbers.filter((number) => {
  return number > 10;
}); */

const people = [
  {
    name: "Luíz",
    age: 62,
  },
  {
    name: "Maria",
    age: 23,
  },
  {
    name: "Eduardo",
    age: 55,
  },
  {
    name: "Letícia",
    age: 19,
  },
  {
    name: "Rosana",
    age: 32,
  },
  {
    name: "Wallace",
    age: 47,
  },
];
const lastLetterIsA = people.filter(
  // (obj) => obj.name[obj.name.length - 1] == "a"
  (obj) => obj.name.toLowerCase().endsWith("a")
);

// MAP
const peopleAges = people.map((person) => ({ age: person.age })); // delete person.name;

const addId = people.map((person, index) => {
  const newObj = { ...person };
  newObj.id = index + 1;
  return newObj;
});
console.log(addId);
