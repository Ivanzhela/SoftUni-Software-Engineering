function worldSwimmingRecord(input) {

const recordInSecond = Number(input[0]);
const distanceInMeters = Number(input[1]);
const swimmingMeterTime = Number(input[2]);

let swimmingMetersInSeconds = distanceInMeters * swimmingMeterTime;
let delay = Math.floor(distanceInMeters / 15) * 12.5;
let finalSwimmingTime = swimmingMetersInSeconds + delay;

if (finalSwimmingTime < recordInSecond) {
    console.log(`Yes, he succeeded! The new world record is ${finalSwimmingTime.toFixed(2)} seconds.`);
}
let diference = Math.abs(finalSwimmingTime - recordInSecond);

if (finalSwimmingTime >= recordInSecond) {
    console.log(`No, he failed! He was ${diference.toFixed(2)} seconds slower.`)

}
} 
worldSwimmingRecord(["55555.67",
"3017",
"5.03"])


