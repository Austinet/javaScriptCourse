//Challenge 1
let markMass = 78 
let markHeight = 1.69
let  johnMass = 92 
let johnHeight = 1.95 

let markBmi = markMass / (markHeight ** 2)
let johnBmi = johnMass / (johnHeight ** 2)
let isMarkBmiHigher = markBmi > johnBmi
console.log(isMarkBmiHigher)

markMass = 95
markHeight = 1.88
johnMass = 85
johnHeight = 1.76;

markBmi = markMass / (markHeight ** 2)
johnBmi = johnMass / (johnHeight ** 2)
isMarkBmiHigher = markBmi > johnBmi
console.log(isMarkBmiHigher)

//Challenge 2 - conditionals

if(isMarkBmiHigher) {
    console.log(`Mark's BMI: ${markBmi} is greater than John's BMI: ${johnBmi}`)
} else {
    console.log(`John's BMI: ${johnBmi} is greater than Mark's BMI: ${markBmi}`)
}

//Challenge 3 - boolean
let dolphinsAverage = (96 + 108 + 89)/3
let koalasAverage = (88 + 91 + 110)/3

if(dolphinsAverage > koalasAverage) {
    console.log(`Dolphins win with an average score of ${dolphinsAverage}`)
} else if (koalasAverage > dolphinsAverage) {
    console.log(`Koalas win with an average score of ${koalasAverage}`)
} else {
    console.log(`Draw! both teams had the same score`)
}

//Bonus
// dolphinsAverage = (97 + 112 + 101)/3
// koalasAverage = (109 + 95 + 123)/3

dolphinsAverage = (97 + 112 + 101)/3
koalasAverage = (109 + 95 + 106)/3

if((dolphinsAverage > koalasAverage) && (dolphinsAverage >= 100)) {
    console.log(`Dolphins win with an average score of ${dolphinsAverage}`)
} else if ((koalasAverage > dolphinsAverage) && (koalasAverage > 100)) {
    console.log(`Koalas win with an average score of ${koalasAverage}`)
} else if ((dolphinsAverage === koalasAverage) && dolphinsAverage >= 100 && (koalasAverage >= 100)){
    console.log(`Draw! both teams had the same score`)
} else {
    console.log("No team wins!")
}

//Challenge 4
let bill = 275

let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`) 
