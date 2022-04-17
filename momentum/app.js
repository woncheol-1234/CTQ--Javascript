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

