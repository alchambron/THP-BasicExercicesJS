{
  function factorielle(number) {
    let n = 1
    for (let i = 1; i <= number; i++) {
      n = n * i
    }
    return n;
  }
}

console.log(`Le resultat est : ${factorielle(prompt("De quel nombre veux tu calculer le factorielle ?"))}`)


