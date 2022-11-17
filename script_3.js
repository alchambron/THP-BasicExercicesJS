function pyramid(number) {
  for (let i = 0; i <= number; i++){
    console.log("#".repeat(i))
  }
}

pyramid(prompt("Donner un nombre"))
