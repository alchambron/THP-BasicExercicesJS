const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  // { title: 'la vie de alexis', id: 4345, rented: 0},
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// ==================== Question 1 ========================

console.log("-1- Never Rented ?")
console.log("---------------------------------------")

let books_never_rented = books.some(element => {
  return element.rented === 0
})

if (books_never_rented === true) {
  console.log("Un livre n'as pas été empruntés")

} else {
  console.log("Tout les livres ont été empruntés au moins une fois")
}

// ====================== Question 2 / 3 =====================

// Fonction qui permet de trier le tableau par ordre sans se retrouver bloquer ensuite
function sort_by_rent(array) {

  array.sort((a, b) => {
    let x = a.rented;
    let y = b.rented;
    if (x < y) { return -1; }
    if (x > y) { return 1; }
    return 0;
  })

console.log("-2- Most Rented")
console.log("---------------------------------------")

  let most_rented = array.slice(-1)
  console.log(most_rented)

console.log("-3- Less Rented")
console.log("---------------------------------------")

  let less_rented = array.slice(0, 1)
  
  console.log(less_rented)
}

sort_by_rent(books)

// ==================== Question 4 / 5 ==============================

// Fonction qui permet de rechercher un objet à partir d'un id
function find_id(id) {
  let specific_id = books.filter(element => {
    return element.id === id
  })
  return specific_id
}


console.log("-4- Id : 873495")
console.log("---------------------------------------")
console.log(find_id(873495))


console.log("-5- Id : 133712")
console.log("---------------------------------------")
console.log(find_id(133712))


// ==================== Question 6 ==============================

console.log("-6- Alphabetical order except 133712")
console.log("---------------------------------------")

books.sort((a, b) => {
  let x = a.title.toLowerCase();
  let y = b.title.toLowerCase();
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
});

var remove_title = 133712

let final = books.filter(item => {
  return item.id !== remove_title
})

console.log(final)

