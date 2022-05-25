function cinemaTickets(input) {
let index = 0;
let name = input[index];
index++;
let total = 0;
let students = 0;
let standarts = 0;
let kids = 0;
while(name !== "Finish") {
    let freePlace = Number(input[index]);
    index++;
    let type = input[index];
    index++
    let ticketsForFilm = 0;
    while(type !== "End") {
        ticketsForFilm++;
        if(type === "standard") {
            standarts += 1;
        } else if(type === "student") {
            students += 1;
        } else if(type === "kid") {
            kids += 1;
        } 
        if(ticketsForFilm >= freePlace) {
            break;
        }
        type = input[index];
        index++;
    }
    total += ticketsForFilm;
    let fullProcent = ticketsForFilm / freePlace * 100;
    console.log(`${name} - ${fullProcent.toFixed(2)}% full.`)
    name = input[index];
    index++;
}
console.log(`Total tickets: ${total}`);
console.log(`${(students / total * 100).toFixed(2)}% student tickets.`);
console.log(`${(standarts / total * 100).toFixed(2)}% standard tickets.`);
console.log(`${(kids / total * 100).toFixed(2)}% kids tickets.`);
}
cinemaTickets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])
