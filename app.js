let a = 5; 
const b = 2;

let myName = "nico";
const veryLongVariableName = 0;

console.log(a+b);
console.log(a*b);

a = 8;

console.log(a/b);

console.log("hello " + myName);

myName = "nicolas";

console.log("your new name is " + myName);

const amIFat = null;
console.log(amIFat);

let something;
console.log(something);



const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// Get Item from Aray
console.log(daysOfWeek[4]);

// Add one more day to the array
daysOfWeek.push("aaaa", "abb");

console.log(daysOfWeek);


const player = {
    name: "nico",
    points: 10,
    fat: true,
};

player.lastname="push";

console.log(player);

console.log(player.name);

player.points = player.points + 15;

console.log(player["points"]);


function sayHello(nameOfPerson, age){
    console.log("Hello my name is" + nameOfPerson + "and I'm" + age);
}

sayHello("nico", 28);
sayHello("dal", 23);
sayHello("lynn", 8);


function plus(firstNumber, secondNumber){
    console.log(firstNumber + secondNumber);
}

plus(68,4);




const player1 = {
    name: "nico",
    sayHello: function (otherPersonName) {
        console.log("hello!" + otherPersonName + "nice to meet you!") 
    },
};

console.log(player.name);
player1.sayHello("david");



const calculator ={
    add: function(a,b){
        console.log(a+b);
    },

    minus: function(a,b){
        console.log(a-b);
    },

    times: function(a,b){
        console.log(a*b);
    },

    divide: function(a,b){
        console.log(a/b);
    },

    powerOf: function(a,b){
        console.log(a**b);
    },
};

calculator.add(5,3);
calculator.minus(100,90);
calculator.times(7,4);
calculator.divide(10,5);
calculator.powerOf(2,4);


const age = 96;

function calculaterKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}

const KrAge = calculaterKrAge(96)

console.log(KrAge)





const calculator2 ={

    add2: function(a,b){
        return a + b;
    },

    minus2: function(a,b){
        return a - b;
    },

    times2: function(a,b){
       return a * b;
    },

    divide2: function(a,b){
        return a / b;
    },

    powerOf2: function(a,b){
        return a**b;
    },
};


const plusResult = calculator2.add2(1,3);
const minusResult = calculator2.minus2(plusResult,2);
const timeResult = calculator2.times2(2,minusResult);
const divideREsult = calculator2.divide2(timeResult,plusResult);
const powerOfResult = calculator2.powerOf2(divideREsult,minusResult);




const age1 = parseInt(prompt("How old are you?"));


if (isNaN(age1) || age1 < 0) {
    console.log("Please write a real positive number");
} else if(age1<18) {
    console.log("you are too young");
} else if(age1>=18 && age1<=50) {
    console.log("you can drink");
} else if (age1>50 && age1<=80) {
    console.log("You should exrcise");
} else if (age1 === 100) {
    console.log("you are wise");
} else if (age1 > 80) {
    console.log("You can do whatever you want.");
} 