// Soal 1

const fullName = (firstName, lastName) => console.log(`\nSoal 1: \n${firstName} ${lastName} \n`)

fullName ('William','Imoh')

// Soal 2

const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!"
}

const {firstName, lastName, destination, occupation, spell} = newObject

console.log(`Soal 2: \n${firstName} ${lastName} ${destination} ${occupation} ${spell}\n`)

// Soal 3

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]
//Driver Code
console.log(`Soal 3 : \n${combined}`)
