// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation
let castle = {
    name: "Ratimbun",
    rooms: 19,
    country: "Italy",
    age: 451,
    isAvailable: true,
    catsLivingInThere: ["Misifus", "Michuli", "Señor bigotes"]
}
for (let i = 0 ; i < castle.catsLivingInThere.length ; i++) {
    console.log(castle.catsLivingInThere[i])
}

console.log(castle.name)

