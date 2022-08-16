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


//Part 2
//Challenge 1

let calcAverage = (score1, score2, score3) => {
    let average = (score1 + score2 + score3) / 3
    return average
}

function checkWinner(avgKoalas, avgDolphins) {
    if (avgKoalas > (avgDolphins * 2)) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
    } else if (avgDolphins > (avgKoalas * 2)) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
    }
} 

//data set 1
let dolphinsScore1 = 44
let dolphinsScore2 = 23
let dolphinsScore3 = 71

let koalasScore1 = 44
let koalasScore2 = 23
let koalasScore3 = 71

let teamDolphinsAvg = calcAverage(dolphinsScore1, dolphinsScore2, dolphinsScore3)
let teamKoalasAvg = calcAverage(koalasScore1, koalasScore2, koalasScore3)

checkWinner(teamKoalasAvg, teamDolphinsAvg)

//data set 2
dolphinsScore1 = 85
dolphinsScore2 = 54
dolphinsScore3 = 41

koalasScore1 = 23
koalasScore2 = 34
koalasScore3 = 27

teamDolphinsAvg = calcAverage(dolphinsScore1, dolphinsScore2, dolphinsScore3)
teamKoalasAvg = calcAverage(koalasScore1, koalasScore2, koalasScore3)

checkWinner(teamKoalasAvg, teamDolphinsAvg)

//Part 2 Challenge 2
let bills = [125, 55, 44]


console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`) 

function calcTip(bill) {
    let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20
    return tip
}

let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])]
console.log(tips)
console.log(bills)

let totalBills = [calcTip(bills[0]) + bills[0], calcTip(bills[1]) + bills[1], calcTip(bills[bills.length - 1]) + bills[bills.length - 1]]
console.log(totalBills)

//Part 3 Challenge 3
const john = {
   fullName: 'John Smith',
   mass: 92,
   height: 1.95,
   calcBmi: function () {
    this.BMI = this.mass / (this.height ** 2)
    return this.BMI
   }
}

const mark = {
    fullName: 'Mark Miller',
    mass: 92,
    height: 1.95,
    calcBmi: function () {
        this.BMI = this.mass / (this.height ** 2)
        return this.BMI
    }
 }
//  "John's BMI (28.3) is higher than Mark's (23.9)!"
if(mark.calcBmi() > john.calcBmi()) {
    console.log(`${mark.fullName}'s BMI (${mark.calcBmi()}) is higher than ${john.fullName}'s BMI (${john.calcBmi()})`)
} else if (john.calcBmi() > mark.calcBmi()) {
    console.log(`${john.fullName}'s BMI (${john.calcBmi()}) is higher than ${mark.fullName}'s BMI (${mark.calcBmi()})`)
} else {
    console.log(`${john.fullName}'s BMI (${john.calcBmi()}) is the same as ${mark.fullName}'s BMI (${mark.calcBmi()})`)
}

//Part 3 Challenge 4
let billsArray = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
let tipsArray = []
let totalBillsArray = []

for(let i = 0; i < billsArray.length; i++) {
    tipsArray.push(calcTip(billsArray[i])) 
    totalBillsArray.push(tipsArray[i] + billsArray[i])
}

// console.log(billsArray)
console.log(tipsArray)
console.log(totalBillsArray)


//Bonus

function calcArrayAverage(arr) {
    let sum = 0;
    arr.forEach(item => {
        sum += item
    });
    return sum / arr.length
}

let newArray = [1, 2, 3]
console.log("Average: " + calcArrayAverage(newArray))

//Developer Skills & Editor Setup challenge

function printForecast(arr) {
    let tempString = '... '
    for(let i = 0; i < arr.length; i++) {
        tempString += `${arr[i]}ºC in ${i + 1} ${i + 1 < 2 ? 'day': 'days'} ... `      
    }
    console.log(tempString)
}

let arrarDataSet = [17, 21, 23]
printForecast(arrarDataSet)

arrarDataSet = [12, 5, -5, 0, 4]
printForecast(arrarDataSet)