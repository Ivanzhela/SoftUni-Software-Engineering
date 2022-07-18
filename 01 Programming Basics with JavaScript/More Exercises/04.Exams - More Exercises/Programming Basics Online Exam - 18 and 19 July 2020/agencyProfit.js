function agencyProfit(input) {

    const name = input[0];
    const countTicket = Number(input[1]);
    const countKidsTicket = Number(input[2]);
    const netoPriceOfTicket = Number(input[3]);
    const serviceCharge = Number(input[4]);


    let ticket = countTicket * (netoPriceOfTicket + serviceCharge)
    let ticketKids = ((netoPriceOfTicket * 0.30) + serviceCharge) * countKidsTicket
    let allTickets= ticket + ticketKids;
    let pofitAgency = allTickets * 0.20;

    console.log(`The profit of your agency from ${name} tickets is ${pofitAgency} lv.`)
     
}
agencyProfit(["WizzAir",
"15",
"5",
"120",
"40"])
