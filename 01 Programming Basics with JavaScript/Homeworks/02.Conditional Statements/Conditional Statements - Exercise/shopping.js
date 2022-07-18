function shopping(input) {

const petersBuget = Number(input[0]);
const videoCardCount = Number(input[1]);
const processorCount = Number(input[2]);
const ramMemoryCount = Number(input[3]);


let videoCardPrice = 250;
let processorPrice = (videoCardCount * videoCardPrice) * 0.35;
let ramMemoryPrice = (videoCardCount * videoCardPrice) * 0.10;

finalPrice = 
videoCardCount * videoCardPrice + 
processorCount * processorPrice + 
ramMemoryCount * ramMemoryPrice;

if (videoCardCount > processorCount) {
    finalPrice = finalPrice - (finalPrice * 0.15);
}

let diference = Math.abs(petersBuget - finalPrice);

if (petersBuget >= finalPrice) {
    console.log(`You have ${diference.toFixed(2)} leva left!`);
}
if (petersBuget < finalPrice) {
    console.log(`Not enough money! You need ${diference.toFixed(2)} leva more!`);
}
}
shopping(["900",
"2",
"1",
"3"])
