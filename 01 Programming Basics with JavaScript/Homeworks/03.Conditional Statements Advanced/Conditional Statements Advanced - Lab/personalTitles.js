function personalTitles(input) {
const age = Number(input[0]);
const gander = input[1];

if (age >= 16) {
    if (gander === "m") {
        console.log("Mr.");
    } else {
        console.log("Ms.");
    }
} else {
    if (gander === "f") {
        console.log("Miss") 
    } else {
        console.log("Master")
    }
}
}
personalTitles(["20",
"f"])
;