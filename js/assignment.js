//Values and variables
let country = "Nigeria"
let continent = "Africa"
let population = 30_000_000

console.log(country)
console.log(continent)
console.log(population)

//Data Types
let isIsland = false
let language

console.log(typeof isIsland)
console.log(typeof country)
console.log(typeof language)
console.log(typeof population)


//var is function scope, let is block scope
language = "Urhobo"
const PI = 3.142
// PI = 2

//Basic Operators
let halfPopulation = population / 2
console.log(population + 1)

let finlandPopulation = 6_000_000
population > finlandPopulation
let averagePopulation = 33_000_000
population < averagePopulation
let description = country + " is in " + continent + ", and its " + population + " people speak " + language
console.log(description)

//Strings and Template Literals
description = `${country} is in ${continent}, and its ${population} people speak ${language}`
console.log(description)

//Taking Decisions
if(population > averagePopulation) {
    console.log(`${country} population is above average`)
} else {
    console.log(`${country} population is ${averagePopulation - population} below average`)
}

//Type conversion and coercion
'9' - '5'//4
'19' - '13' + '17' //617
'19' - '13' + 17 //23
'123' < 57 // false
5 + 6 + '4' + 9 - 4 - 2 // 1143

//Equality Operators
// let numNeighbours = Number(prompt('How many neighbour countries does your country have?'))
// if(numNeighbours === 1) {
//     console.log("Only 1 border!")
// } else if(numNeighbours > 1) {
//     console.log("More than 1 border!")
// } else {
//     console.log("No borders")
// }

//Logical Operators