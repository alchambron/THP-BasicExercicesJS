const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log("Les entrepreneurs née dans les année 70 sont : ")
entrepreneurs.forEach(person => {
  if (person.year >= 1970 && person.year < 1980) {
    console.log(person)
  }
})

console.log("-----------------------------------------")
console.log("Le prénom et non des entrepreneurs ")
entrepreneurs.forEach(person => {
  console.log(`${person.first} ${person.last}`)
})

console.log("-----------------------------------------")
console.log("L'âge de chaque inventeur")
entrepreneurs.forEach(person => {
  let age = 2022 - person.year
  console.log(`${person.first} ${person.last} aurait ${age} ans aujourd'hui`)
})

console.log("-----------------------------------------")
console.log("Ordre alphabetique")

entrepreneurs.sort((a, b) => {
  let x = a.last.toLowerCase();
  let y = b.last.toLowerCase();
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
});

console.log(entrepreneurs)
